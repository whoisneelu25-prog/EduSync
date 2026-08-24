// OpenRouter & Google AI Service for EduSync

const OPENROUTER_API_STORAGE_KEY = 'edusync_openrouter_api_key';
const ACTIVE_MODEL_STORAGE_KEY = 'edusync_active_ai_model';


export const AI_MODELS = {
  'google/gemini-2.5-flash': {
    id: 'google/gemini-2.5-flash',
    name: 'Gemini 2.5 Flash (OpenRouter)',
    badge: '⚡ Gemini 2.5 Flash',
    type: 'High Speed & Precision'
  },
  'google/gemini-2.5-flash-lite': {
    id: 'google/gemini-2.5-flash-lite',
    name: 'Gemini 2.5 Flash Lite',
    badge: '🚀 Gemini Flash Lite',
    type: 'Ultra Fast'
  },
  'google/gemma-4-26b-a4b-it:free': {
    id: 'google/gemma-4-26b-a4b-it:free',
    name: 'Gemma 4 26B (Free)',
    badge: '🌐 Gemma 4 Free Tier',
    type: 'Open Weights'
  },
  'deepseek/deepseek-r1:free': {
    id: 'deepseek/deepseek-r1:free',
    name: 'DeepSeek R1 (Free Reasoning)',
    badge: '🧠 DeepSeek R1',
    type: 'Reasoning Model'
  }
};

const SYSTEM_PROMPTS = {
  'priya': `You are Teacher Priya (also known as Teacher Maya), a warm, patient, and creative primary school educator on EduSync.
Your mission is to explain educational concepts and solve questions for children (ages 6-12) using delightful everyday analogies (like fresh pizza, cartoon characters, nature, baking recipes, and LEGO blocks).
Rules:
1. If the student asks a math problem (e.g. 18+7 or 3*5), give the clear final answer first, then explain with a fun visual counting example.
2. Keep explanations friendly, encouraging, and under 3-4 sentences.
3. Always include 2-3 relevant emojis.
4. End with an inspiring, short question to keep the child curious.`,

  'maya': `You are Teacher Priya, a warm, patient, and creative primary school educator on EduSync.
Your mission is to explain educational concepts and solve questions for children (ages 6-12) using delightful everyday analogies (like fresh pizza, cartoon characters, nature, baking recipes, and LEGO blocks).
Rules:
1. If the student asks a math question, give the exact answer clearly first, then explain with a fun visual counting example.
2. Keep explanations friendly, encouraging, and under 3-4 sentences.
3. Always include 2-3 relevant emojis.
4. End with an inspiring, short question to keep the child curious.`,

  'rohan': `You are Coach Rohan (also known as Coach Leo), an energetic, enthusiastic STEM and sports-science coach on EduSync.
Your mission is to turn science, math, and space concepts into exciting hands-on action (like rocket launches, athletic speed, gravity experiments, and playground physics).
Rules:
1. If asked a math or science problem, solve it with high-energy sports, rocket, or speed analogies.
2. Keep responses under 3-4 sentences with dynamic emojis (🚀, ⚡, 🏃, 🪐).
3. Challenge the student with a quick 1-sentence brain puzzle at the end.`,

  'leo': `You are Coach Rohan, an energetic, enthusiastic STEM and sports-science coach on EduSync.
Your mission is to turn science, math, and space concepts into exciting hands-on action (like rocket launches, athletic speed, gravity experiments, and playground physics).
Rules:
1. If asked a math or science problem, solve it with high-energy sports, rocket, or speed analogies.
2. Keep responses under 3-4 sentences with dynamic emojis (🚀, ⚡, 🏃, 🪐).
3. Challenge the student with a quick 1-sentence brain puzzle at the end.`,

  'syncbuddy': `You are SyncBuddy AI, a cheerful, supportive peer learning companion on EduSync.
Your mission is to help your fellow student friend understand confusing homework and classroom concepts with pure intuition and zero stress.
Rules:
1. Speak like a smart, friendly peer tutor who loves discovering how things work.
2. Keep explanations simple, visual, and concise (under 3 sentences).
3. Use encouraging praise like "You've got this! ✨" or "Look at it this way! 🌟".`
};

export function getStoredOpenRouterKey() {
  try {
    const envKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_OPENROUTER_API_KEY) ? import.meta.env.VITE_OPENROUTER_API_KEY : '';
    return localStorage.getItem(OPENROUTER_API_STORAGE_KEY) || envKey || '';
  } catch {
    return '';
  }
}

export function saveStoredOpenRouterKey(key) {
  try {
    if (key && key.trim()) {
      localStorage.setItem(OPENROUTER_API_STORAGE_KEY, key.trim());
    } else {
      localStorage.removeItem(OPENROUTER_API_STORAGE_KEY);
    }
  } catch (e) {
    console.error('Failed to save OpenRouter key:', e);
  }
}

// Backward compatibility alias for Gemini Key functions
export const getStoredGeminiKey = getStoredOpenRouterKey;
export const saveStoredGeminiKey = saveStoredOpenRouterKey;

export function getActiveModel() {
  try {
    const envModel = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_OPENROUTER_DEFAULT_MODEL) ? import.meta.env.VITE_OPENROUTER_DEFAULT_MODEL : '';
    const stored = localStorage.getItem(ACTIVE_MODEL_STORAGE_KEY);
    if (stored && AI_MODELS[stored]) return stored;
    return envModel || 'google/gemini-2.5-flash';
  } catch {
    return 'google/gemini-2.5-flash';
  }
}

export function setActiveModel(modelId) {
  try {
    if (AI_MODELS[modelId]) {
      localStorage.setItem(ACTIVE_MODEL_STORAGE_KEY, modelId);
    }
  } catch {}
}

/**
 * Direct call to OpenRouter API
 */
export async function askOpenRouterAI(userPrompt, persona = 'priya', customApiKey = '', modelId = '') {
  const apiKey = (customApiKey || getStoredOpenRouterKey()).trim();
  const activeModelId = modelId || getActiveModel();
  const systemInstruction = SYSTEM_PROMPTS[persona] || SYSTEM_PROMPTS['priya'];

  if (!apiKey) {
    console.warn('No OpenRouter API key found.');
    return null;
  }

  const payload = {
    model: activeModelId,
    messages: [
      {
        role: 'system',
        content: systemInstruction
      },
      {
        role: 'user',
        content: userPrompt
      }
    ],
    temperature: 0.7,
    max_tokens: 350
  };

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : 'https://edusync.app',
        'X-Title': 'EduSync Learning Platform'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn(`OpenRouter API response status ${response.status}:`, errText);
      return null;
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;
    return reply ? reply.trim() : null;
  } catch (error) {
    console.warn('OpenRouter API call notice:', error.message);
    return null;
  }
}

/**
 * Backward compatible alias for askGeminiTeacher
 */
export async function askGeminiTeacher(userPrompt, persona = 'priya', customApiKey = '', modelId = '') {
  return askOpenRouterAI(userPrompt, persona, customApiKey, modelId);
}

/**
 * Health check / API verification utility
 */
export async function testOpenRouterConnection(apiKey = '', modelId = 'google/gemini-2.5-flash') {
  const key = (apiKey || getStoredOpenRouterKey()).trim();
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
        'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : 'https://edusync.app',
        'X-Title': 'EduSync Diagnostics'
      },
      body: JSON.stringify({
        model: modelId,
        messages: [{ role: 'user', content: 'Say "EduSync AI is active and ready!" in 1 quick sentence.' }],
        max_tokens: 50
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errData?.error?.message || `HTTP ${response.status}: Failed to authenticate`
      };
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim();
    return {
      success: true,
      reply: reply || 'Connected successfully!',
      model: modelId
    };
  } catch (err) {
    return {
      success: false,
      error: err.message || 'Network error'
    };
  }
}
