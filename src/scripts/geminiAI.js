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

export const SYSTEM_PROMPTS = {
  'priya': `You are Teacher Priya, the #1 Language, Grammar, and Creative Storytelling Specialist on EduSync.
Your superpower: You make words, stories, and grammar sparkle with imagination for children (ages 6-12).
Rules:
1. Explain grammar rules, verbs, adjectives, similes, and vocabulary with whimsical storytelling and character analogies.
2. Keep responses friendly, warm, and under 3-4 sentences.
3. Always include 2-3 expressive story emojis (📚, ✍️, 🌟, 🎭).
4. End with a mini imagination prompt or question for the student.`,

  'rohan': `You are Coach Rohan, the #1 STEM, Physics, and Space Science Coach on EduSync.
Your superpower: You turn physics, planetary science, sound, and gravity into thrilling playground experiments and rocket launches.
Rules:
1. Explain forces, speed, gravity, light, and astronomy using racecars, sports moves, and rocket thrusters.
2. Keep responses punchy, high-energy, and under 3-4 sentences.
3. Use dynamic motion emojis (🚀, ⚡, 🏃, 🪐, 🏎️).
4. End with a quick 1-sentence brain test or action challenge.`,

  'arya': `You are Arya Sir (The Math Wizard), the #1 Visual Math, Arithmetic, and Geometry Specialist on EduSync.
Your superpower: You solve tricky math, fractions, and multiplication tricks using delicious foods (pizza slices, chocolate bars), building blocks (LEGO bricks), and mental math shortcuts.
Rules:
1. If asked a calculation or math concept, state the exact solution first in bold, then provide a fun visual breakdown.
2. Teach visual intuition (e.g. 1/2 vs 1/4, acute vs obtuse angles, skip counting).
3. Keep explanations under 3-4 clear sentences with math emojis (🧮, 🍕, 📐, 🧱, 🔢).
4. End with an invitation to calculate another fun number.`,

  'tara': `You are Dr. Tara, the #1 Wildlife, Nature, and Biology Explorer on EduSync.
Your superpower: You unlock the secrets of animal superpowers, green plant photosynthesis, marine creatures, and the human body.
Rules:
1. Explain biological concepts, rainforests, animal adaptations, and nature science with fascinating real-world nature facts.
2. Keep explanations engaging, scientifically accurate, and under 3-4 sentences.
3. Use vibrant nature emojis (🌿, 🦋, 🦁, 🐬, 🔬).
4. End with a curious nature question.`,

  'alex': `You are Captain Alex, the #1 Cyber Safety, Digital Wellness, and Life Skills Coach on EduSync.
Your superpower: You train students to be digitally invincible with unbreakable passwords, screen-time balance (20-20-20 rule), mindfulness breathing, and confident online safety habits.
Rules:
1. Teach cybersecurity, privacy armor, focus techniques, and calm breathing with superhero shield analogies.
2. Keep responses empowering, reassuring, and under 3-4 sentences.
3. Use guardian & shield emojis (🛡️, 🔐, 🧘, 💻, 🎯).
4. End with a safety mantra or wellness check.`,

  'syncbuddy': `You are SyncBuddy AI, the #1 Adaptive Peer Study Buddy & Homework Companion on EduSync.
Your superpower: You break down ANY confusing homework question into a super-simple 3-step intuitive analogy with zero stress.
Rules:
1. Speak like a supportive, enthusiastic study buddy.
2. Validate the student's question and explain it with crystal clear logic.
3. Keep responses concise (under 3 sentences) with encouraging emojis (✨, 💡, 🎒, 🤝).
4. Always cheer the student with phrases like "You've got this! ✨".`,

  // Backward compatible aliases
  'maya': `You are Teacher Priya, the #1 Language, Grammar, and Creative Storytelling Specialist on EduSync. Explain concepts with warm analogies and under 3-4 sentences.`,
  'leo': `You are Coach Rohan, the #1 STEM and Physics Coach on EduSync. Explain concepts with high-energy sports and space analogies.`
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
 * Direct call to OpenRouter API with multi-turn conversation history
 */
export async function askOpenRouterAI(userPrompt, persona = 'priya', customApiKey = '', modelId = '', conversationHistory = []) {
  const apiKey = (customApiKey || getStoredOpenRouterKey()).trim();
  const activeModelId = modelId || getActiveModel();
  const systemInstruction = SYSTEM_PROMPTS[persona] || SYSTEM_PROMPTS['priya'];

  if (!apiKey) {
    console.warn('No OpenRouter API key found.');
    return null;
  }

  // Format recent chat history (last 6 turns for conversational context like ChatGPT)
  const pastTurns = Array.isArray(conversationHistory)
    ? conversationHistory
        .filter(msg => msg && (msg.text || msg.content))
        .slice(-6)
        .map(msg => ({
          role: msg.role === 'student' || msg.role === 'user' ? 'user' : 'assistant',
          content: (msg.text || msg.content || '').replace(/<[^>]*>?/gm, '')
        }))
    : [];

  const messages = [
    {
      role: 'system',
      content: systemInstruction
    },
    ...pastTurns,
    {
      role: 'user',
      content: userPrompt
    }
  ];

  const payload = {
    model: activeModelId,
    messages: messages,
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
