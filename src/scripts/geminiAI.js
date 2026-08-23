// Google Gemini & Gemma Open-Source AI Service for EduSync

const GEMINI_API_STORAGE_KEY = 'edusync_gemini_api_key';
const ACTIVE_MODEL_STORAGE_KEY = 'edusync_active_ai_model';

export const AI_MODELS = {
  'gemini-1.5-flash': {
    id: 'gemini-1.5-flash',
    name: 'Gemini 1.5 Flash (Google Cloud)',
    badge: '⚡ Gemini 1.5 Flash',
    type: 'Cloud Free Tier'
  },
  'gemma-2-9b-it': {
    id: 'gemma-2-9b-it',
    name: 'Gemma 2 9B (Google DeepMind Open Source)',
    badge: '🌐 Gemma 2 Open Source',
    type: 'Open Weights / Open Source'
  }
};

const SYSTEM_PROMPTS = {
  'maya': `You are Teacher Maya, a warm, patient, and creative primary school educator on EduSync.
Your mission is to explain educational concepts to children (ages 6-12) using delightful everyday analogies (like fresh pizza, cartoon characters, nature, baking recipes, and LEGO blocks).
Rules:
1. Keep explanations friendly, encouraging, and under 3-4 sentences.
2. Avoid confusing technical jargon unless you immediately explain it with a fun metaphor.
3. Always include 2-3 relevant emojis.
4. End with an inspiring, short question to keep the child curious.`,

  'leo': `You are Coach Leo, an energetic, enthusiastic STEM and sports-science coach on EduSync.
Your mission is to turn science, math, and space concepts into exciting hands-on action (like rocket launches, athletic speed, gravity experiments, and playground physics).
Rules:
1. Be high-energy, motivating, and action-oriented!
2. Use sports, racing, mechanics, or astronaut analogies.
3. Keep responses under 3-4 sentences with dynamic emojis (🚀, ⚡, 🏃, 🪐).
4. Challenge the student with a quick 1-sentence brain puzzle at the end.`,

  'syncbuddy': `You are SyncBuddy AI, a cheerful, supportive peer learning companion on EduSync.
Your mission is to help your fellow student friend understand confusing homework and classroom concepts with pure intuition and zero stress.
Rules:
1. Speak like a smart, friendly peer tutor who loves discovering how things work.
2. Keep explanations simple, visual, and concise (under 3 sentences).
3. Use encouraging praise like "You've got this!" or "Look at it this way! ✨".`
};

export function getStoredGeminiKey() {
  try {
    const envKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) ? import.meta.env.VITE_GEMINI_API_KEY : '';
    return localStorage.getItem(GEMINI_API_STORAGE_KEY) || envKey || '';
  } catch {
    return '';
  }
}

export function saveStoredGeminiKey(key) {
  try {
    if (key) localStorage.setItem(GEMINI_API_STORAGE_KEY, key.trim());
    else localStorage.removeItem(GEMINI_API_STORAGE_KEY);
  } catch (e) {
    console.error('Failed to save Gemini key:', e);
  }
}

export function getActiveModel() {
  try {
    return localStorage.getItem(ACTIVE_MODEL_STORAGE_KEY) || 'gemini-1.5-flash';
  } catch {
    return 'gemini-1.5-flash';
  }
}

export function setActiveModel(modelId) {
  try {
    localStorage.setItem(ACTIVE_MODEL_STORAGE_KEY, modelId);
  } catch {}
}

/**
 * Calls Google Gemini or Gemma Open-Source API with persona system instructions
 */
export async function askGeminiTeacher(userPrompt, persona = 'maya', customApiKey = '', modelId = '') {
  const apiKey = customApiKey || getStoredGeminiKey();
  const activeModelId = modelId || getActiveModel();
  const systemInstruction = SYSTEM_PROMPTS[persona] || SYSTEM_PROMPTS['maya'];

  if (!apiKey) {
    // Graceful fallback to local high-quality pedagogical knowledge base
    return null;
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${activeModelId}:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        role: 'user',
        parts: [
          { text: `${systemInstruction}\n\nStudent asks: "${userPrompt}"` }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 250
    }
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      // If gemma model fails, retry automatically with gemini-1.5-flash
      if (activeModelId !== 'gemini-1.5-flash') {
        const fallbackEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const fallbackResp = await fetch(fallbackEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (fallbackResp.ok) {
          const fallbackData = await fallbackResp.json();
          return fallbackData.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
        }
      }
      return null;
    }

    const data = await response.json();
    const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
    return candidate ? candidate.trim() : null;
  } catch (error) {
    console.warn('AI call notice, using local pedagogical engine:', error.message);
    return null;
  }
}
