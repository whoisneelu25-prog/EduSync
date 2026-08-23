// SyncBuddy & AI Teacher Companion Chat Controller
import { 
  askGeminiTeacher, 
  getStoredGeminiKey, 
  saveStoredGeminiKey, 
  getActiveModel, 
  setActiveModel,
  AI_MODELS 
} from './geminiAI.js';

export const teacherPersonas = {
  'priya': {
    name: 'Teacher Priya',
    title: 'Primary Educator & Storyteller',
    avatar: '🧑‍🏫',
    tag: 'Visual & Socratic Guide',
    greeting: 'Namaste, curious learner! 🌟 I’m Teacher Priya. What wondrous concept would you like to explore today?'
  },
  'rohan': {
    name: 'Coach Rohan',
    title: 'STEM & Science Explorer',
    avatar: '🚀',
    tag: 'Hands-on Experiments',
    greeting: 'Hey champion! ⚡ Coach Rohan here! Ready to run experiments, test gravity, and unlock science secrets?'
  },
  'syncbuddy': {
    name: 'SyncBuddy AI',
    title: 'Adaptive Learning Companion',
    avatar: '✨',
    tag: 'Friendly Peer Tutor',
    greeting: 'Hi dost! ✨ I’m SyncBuddy. Stuck on a tricky question or want a fun analogy? Ask me anything!'
  },
  // Backward compatible aliases
  'maya': {
    name: 'Teacher Priya',
    title: 'Primary Educator & Storyteller',
    avatar: '🧑‍🏫',
    tag: 'Visual & Socratic Guide',
    greeting: 'Namaste, curious learner! 🌟 I’m Teacher Priya. What wondrous concept would you like to explore today?'
  },
  'leo': {
    name: 'Coach Rohan',
    title: 'STEM & Science Explorer',
    avatar: '🚀',
    tag: 'Hands-on Experiments',
    greeting: 'Hey champion! ⚡ Coach Rohan here! Ready to run experiments, test gravity, and unlock science secrets?'
  }
};

export const subjectPrompts = {
  'nutrition': [
    { id: 'nut-water', text: '💧 Why do we need so much water?' },
    { id: 'nut-avocado', text: '🥑 Is an avocado a fruit or vegetable?' },
    { id: 'nut-rainbow', text: '🌈 What is the "Eat the Rainbow" rule?' }
  ],
  'math': [
    { id: 'math-pizza', text: '🍕 Explain 1/2 vs 1/4 with pizza' },
    { id: 'math-angles', text: '📐 What is the difference between acute and obtuse?' },
    { id: 'math-multiply', text: '⚡ How does multiplication work visually?' }
  ],
  'language': [
    { id: 'lang-er-est', text: '📏 When do I use -er vs -est?' },
    { id: 'lang-verbs', text: '⚡ How can I spot action verbs in stories?' },
    { id: 'lang-simile', text: '🎭 What is the difference between a simile and a metaphor?' }
  ],
  'physics': [
    { id: 'phys-gravity', text: '🌍 Why do things fall down instead of floating?' },
    { id: 'phys-moon', text: '🌕 Why can we jump higher on the Moon?' },
    { id: 'phys-light', text: '⚡ Why does lightning strike before thunder sounds?' }
  ],
  'nature': [
    { id: 'nat-sunlight', text: '🌿 How do green plants eat sunlight?' },
    { id: 'nat-bees', text: '🐝 Why are honeybees so important to flowers?' },
    { id: 'nat-caterpillar', text: '🦋 How does a caterpillar turn into a butterfly?' }
  ],
  'lifeskills': [
    { id: 'safe-password', text: '🔐 How do I create a super strong password?' },
    { id: 'safe-breathe', text: '🧘 How does deep breathing calm my brain?' },
    { id: 'safe-screentime', text: '📱 What is the 20-20-20 screen rule?' }
  ]
};

export const knowledgeResponses = {
  'nut-water': {
    reply: 'Our bodies are like super-powered water machines! 💧 About 60% of your body and 75% of your brain is made of pure water. When you drink water, it carries vitamins to your muscles and keeps your brain sharp and energetic without any sugar crashes!',
    visual: {
      icon: '💧',
      desc: '<strong>Hydration Power:</strong> 60% of your body is water — water fuels every brain thought & muscle leap!'
    }
  },
  'nut-avocado': {
    reply: 'Here is a fun botanical secret: An avocado is scientifically a giant, single-seeded FRUIT (a berry!) 🥑. Because it grows from a flower on a tree and encloses a seed in its center, scientists classify it as a fruit, even though we eat it in savory guacamole!',
    visual: {
      icon: '🥑',
      desc: '<strong>Botanical Rule:</strong> Has a seed + comes from a flower = FRUIT!'
    }
  },
  'nut-rainbow': {
    reply: 'Eating the rainbow means loading your plate with different natural colors! 🌈 Red tomatoes protect your heart, orange carrots give you eagle eyesight, green broccoli builds iron stamina, and purple blueberries protect memory cells!',
    visual: {
      icon: '🥗',
      desc: '<strong>Rainbow Plate:</strong> Red (Heart) • Orange (Eyes) • Green (Stamina) • Blue/Purple (Brain).'
    }
  },
  'math-pizza': {
    reply: 'Imagine a warm cheesy pizza fresh out of the oven! 🍕 If you share with 1 best friend, you cut it down the middle into 2 equal halves. You get <strong>1/2</strong>! But if 4 friends share, you cut it into 4 pieces. You get <strong>1/4</strong>. 1/2 gives you twice as much pizza as 1/4!',
    visual: {
      icon: '🍕',
      desc: '<strong>Fraction Rule:</strong> 1/2 gives a huge half-pizza slice; 1/4 gives a smaller quarter piece.'
    }
  },
  'math-angles': {
    reply: 'Look at a door corner or a book page: that perfect square corner is a <strong>90° Right Angle</strong> 📐. If an angle is narrower and sharper than a square corner, it’s an <strong>Acute Angle</strong> (think "a cute little puppy"). If it opens wide like a reclining chair, it’s an <strong>Obtuse Angle</strong>!',
    visual: {
      icon: '📐',
      desc: '<strong>Angle Guide:</strong> Acute (<90° sharp) | Right (=90° corner) | Obtuse (>90° wide open).'
    }
  },
  'math-multiply': {
    reply: 'Multiplication is just super-speed addition! ⚡ Instead of counting 3 + 3 + 3 + 3 + 3 one by one, <strong>3 × 5</strong> means you have <strong>5 groups of 3</strong>. Imagine 5 egg cartons with 3 eggs in each — you instantly have 15 eggs!',
    visual: {
      icon: '🥚',
      desc: '<strong>Multiplication Magic:</strong> 3 × 5 = 5 groups of 3 = 15 total items!'
    }
  },
  'lang-er-est': {
    reply: 'Here is the golden rule! 📏 When comparing <strong>only 2 items</strong>, use <strong>-ER</strong>: <em>"A cheetah is fast<strong>er</strong> than a turtle."</em> But when comparing <strong>3 or more items</strong> (the whole group), crown the winner with <strong>-EST</strong>: <em>"The cheetah is the fast<strong>est</strong> land animal on Earth!"</em>',
    visual: {
      icon: '🐆',
      desc: '<strong>Comparison Formula:</strong> 2 items = -ER (Faster) | 3+ items = -EST (Fastest).'
    }
  },
  'lang-verbs': {
    reply: 'Verbs are the engine of every sentence! ⚡ Ask yourself: <em>"Can a person or creature DO this physical action?"</em> Words like <strong>sprinted, leaped, roared, whispered, painted, and solved</strong> are all dynamic action verbs!',
    visual: {
      icon: '🏃',
      desc: '<strong>Verb Detective:</strong> If you can act it out or draw motion lines, it’s an action verb!'
    }
  },
  'lang-simile': {
    reply: 'Both make writing sparkle with imagination! 🎭 A <strong>Simile</strong> uses "LIKE" or "AS": <em>"He ran as fast AS lightning."</em> A <strong>Metaphor</strong> makes a direct bold identity: <em>"His heart IS pure gold."</em>',
    visual: {
      icon: '🌟',
      desc: '<strong>Figurative Guide:</strong> Simile uses "like/as" | Metaphor says one thing IS another.'
    }
  },
  'phys-gravity': {
    reply: 'Planet Earth is so gigantic (6 sextillion kilograms!) that its invisible gravitational pull reaches out and pulls all matter — including you, oceans, and basketballs — straight toward its center core! 🌍 Without gravity, we would float away into space!',
    visual: {
      icon: '🌍',
      desc: '<strong>Earth Gravity:</strong> Giant mass pulls everything down at 9.8 meters per second squared.'
    }
  },
  'phys-moon': {
    reply: 'Because the Moon is much smaller than Earth (only 1% of Earth’s mass), its gravitational pull is only <strong>1/6th as strong</strong>! 🌕 That means if you can jump 1 foot on Earth, on the Moon you will float up 6 whole feet into the black starry sky!',
    visual: {
      icon: '🚀',
      desc: '<strong>Moon Leap:</strong> 1/6th gravity = 6 times higher jumps!'
    }
  },
  'phys-light': {
    reply: 'Light travels at the universal speed limit — 300,000 kilometers every single second! ⚡ Sound waves through air only travel at 0.34 km/s. So the lightning flash reaches your eyes instantly, while the acoustic thunder rumble takes 5 seconds for every mile to reach your ears!',
    visual: {
      icon: '🌩️',
      desc: '<strong>Speed Race:</strong> Light (Instantaneous) vs Sound (Takes 5 seconds per mile).'
    }
  },
  'nat-sunlight': {
    reply: 'Plants possess a magical green solar panel called <strong>chlorophyll</strong>! 🌿 Leaves absorb carbon dioxide from the air and water from soil. When sunlight hits chlorophyll, it cooks up sweet glucose food and releases clean oxygen for us to breathe!',
    visual: {
      icon: '🌿',
      desc: '<strong>Photosynthesis:</strong> Sun + Water + CO₂ ➔ Glucose Food + Fresh Oxygen (O₂)!'
    }
  },
  'nat-bees': {
    reply: 'Bees are nature’s master agricultural workers! 🐝 As bees sip sweet flower nectar, yellow pollen dust sticks to their fuzzy jackets. When they visit the next blossom, that pollen fertilizes the flower so it can grow into juicy apples, cherries, and berries!',
    visual: {
      icon: '🐝',
      desc: '<strong>Pollination Power:</strong> 1 out of every 3 bites of human food relies directly on bees!'
    }
  },
  'nat-caterpillar': {
    reply: 'Inside the silky chrysalis cocoon, something incredible happens: the caterpillar releases natural enzymes that transform its crawling body into brand new wings, delicate antennae, and nectar-sipping eyes! 🦋 It emerges as an adult flying butterfly.',
    visual: {
      icon: '🦋',
      desc: '<strong>Metamorphosis:</strong> Egg ➔ Caterpillar (Larva) ➔ Chrysalis (Pupa) ➔ Butterfly!'
    }
  },
  'safe-password': {
    reply: 'Think of passwords like unbreakable secret passphrases! 🔐 Pick 3 random favorite words + a lucky number + an emoji: like <code>BlueDolphin99!</code>. Never share it with gaming chats or friends — only trusted parents or guardians should know your login!',
    visual: {
      icon: '🛡️',
      desc: '<strong>Cyber Shield:</strong> 3 Words + Number + Symbol = Unhackable passphrase.'
    }
  },
  'safe-breathe': {
    reply: 'When you take slow, deep belly breaths (4 seconds in, 4 seconds out), it sends a direct signal to the <strong>vagus nerve</strong> in your brain 🧘. This turns off your stress alarm (the amygdala) and brings control back to your prefrontal thinking brain!',
    visual: {
      icon: '🌬️',
      desc: '<strong>Box Breathing:</strong> 4s Inhale ➔ 4s Hold ➔ 4s Exhale ➔ 4s Hold.'
    }
  },
  'safe-screentime': {
    reply: 'To keep eyes sparkling and prevent headaches, optometrists recommend the <strong>20-20-20 Rule</strong>! 👀 Every 20 minutes of screen time, look up at an object at least 20 feet away for 20 seconds. It lets your eye focus muscles relax completely!',
    visual: {
      icon: '👀',
      desc: '<strong>20-20-20 Eye Care:</strong> Every 20 mins, look 20 ft away for 20 seconds.'
    }
  }
};

export function initCompanionChat() {
  let activePersona = 'maya';
  let activeSubject = 'nutrition';
  let isTyping = false;

  // DOM Elements
  const personaBtns = document.querySelectorAll('.teacher-persona-btn');
  const personaAvatarEl = document.querySelector('.companion-pulse-avatar');
  const personaNameEl = document.querySelector('.companion-name-title');
  const personaStatusEl = document.querySelector('.companion-status-text');
  const subjectPills = document.querySelectorAll('.chat-subject-tab');
  const chipsContainer = document.querySelector('.companion-prompt-chips');
  const chatBody = document.querySelector('.companion-chat-body');
  const chatInput = document.querySelector('.companion-input');
  const sendBtn = document.querySelector('.companion-send-btn');

  function scrollToBottom() {
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  // Persona Switcher
  personaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      personaBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePersona = btn.dataset.persona || 'maya';

      const persona = teacherPersonas[activePersona];
      if (personaAvatarEl) personaAvatarEl.textContent = persona.avatar;
      if (personaNameEl) personaNameEl.innerHTML = `${persona.name} <span class="companion-mode-tag">${persona.tag}</span>`;
      if (personaStatusEl) personaStatusEl.textContent = persona.title;

      addTeacherMessage(persona.greeting);
    });
  });

  // Render Prompt Chips for Active Subject
  function renderPromptChips() {
    if (!chipsContainer) return;
    chipsContainer.innerHTML = '';

    const prompts = subjectPrompts[activeSubject] || subjectPrompts['nutrition'];
    prompts.forEach(p => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'prompt-chip';
      chip.textContent = p.text;
      chip.dataset.prompt = p.id;
      chip.addEventListener('click', () => handlePromptClick(p.id, p.text));
      chipsContainer.appendChild(chip);
    });
  }

  // Subject Tab Switcher
  subjectPills.forEach(tab => {
    tab.addEventListener('click', () => {
      subjectPills.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeSubject = tab.dataset.subject || 'nutrition';
      renderPromptChips();
    });
  });

  function addStudentMessage(text) {
    if (!chatBody) return;
    const row = document.createElement('div');
    row.className = 'chat-bubble-row student-row';
    row.innerHTML = `
      <div class="chat-avatar-mini">🎒</div>
      <div class="chat-message-bubble">${text}</div>
    `;
    chatBody.appendChild(row);
    scrollToBottom();
  }

  function addTeacherMessage(text, visual = null) {
    if (!chatBody) return;
    const persona = teacherPersonas[activePersona] || teacherPersonas['maya'];
    const row = document.createElement('div');
    row.className = 'chat-bubble-row companion-row';

    let visualHtml = '';
    if (visual) {
      visualHtml = `
        <div class="chat-visual-card">
          <div class="pizza-icon">${visual.icon}</div>
          <div class="chat-visual-card-text">${visual.desc}</div>
        </div>
      `;
    }

    row.innerHTML = `
      <div class="chat-avatar-mini">${persona.avatar}</div>
      <div class="chat-message-bubble">
        <p>${text}</p>
        ${visualHtml}
        <div class="chat-msg-actions">
          <button class="chat-action-btn read-aloud-btn" type="button" title="Read Aloud">🔊 Read Aloud</button>
          <button class="chat-action-btn simpler-btn" type="button">🌱 Simpler</button>
          <button class="chat-action-btn example-btn" type="button">💡 Another Example</button>
        </div>
      </div>
    `;

    // Attach Read Aloud event
    const readBtn = row.querySelector('.read-aloud-btn');
    readBtn?.addEventListener('click', () => {
      readTextAloud(text.replace(/<[^>]*>?/gm, ''));
      readBtn.classList.add('speaking');
      setTimeout(() => readBtn.classList.remove('speaking'), 3000);
    });

    const simplerBtn = row.querySelector('.simpler-btn');
    simplerBtn?.addEventListener('click', () => {
      addTeacherMessage(`Here is the simplest way to picture it: Imagine explaining this to a 5-year-old friend with cartoon drawings! Focus on the core shape and everyday objects you see in your kitchen or playground! ✨`);
    });

    const exampleBtn = row.querySelector('.example-btn');
    exampleBtn?.addEventListener('click', () => {
      addTeacherMessage(`Here is another fun real-world example! 🌟 Think of building with colorful LEGO bricks: when you stack blocks together, you are visualizing volume, ratios, and fractions all at once! 🧱`);
    });

    chatBody.appendChild(row);
    scrollToBottom();
  }

  function readTextAloud(rawText) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(rawText);
      utterance.rate = 0.95;
      utterance.pitch = 1.1; // Child-friendly warm pitch
      window.speechSynthesis.speak(utterance);
    }
  }

  function handlePromptClick(promptId, userText) {
    if (isTyping) return;
    addStudentMessage(userText);

    isTyping = true;
    showTypingIndicator(true);

    setTimeout(() => {
      showTypingIndicator(false);
      isTyping = false;

      const resp = knowledgeResponses[promptId];
      if (resp) {
        addTeacherMessage(resp.reply, resp.visual);
      } else {
        addTeacherMessage(`That is a fantastic question! 🌟 Let's explore how this concept connects to the world around us. What part would you like to dive into first?`);
      }

      // Sync chat curiosity point to Google Cloud
      window.dispatchEvent(new CustomEvent('edusync_update_progress', {
        detail: { addPoints: 15, preferredTeacher: activePersona }
      }));
    }, 700);
  }

  async function handleUserSubmit() {
    if (!chatInput || isTyping) return;
    const text = chatInput.value.trim();
    if (!text) return;

    addStudentMessage(text);
    chatInput.value = '';
    isTyping = true;
    showTypingIndicator(true);

    try {
      // 1. Try Google Gemini Flash AI
      const geminiReply = await askGeminiTeacher(text, activePersona);
      showTypingIndicator(false);
      isTyping = false;

      if (geminiReply) {
        addTeacherMessage(geminiReply, {
          icon: '⚡',
          desc: `<strong>Google Gemini 1.5 Flash AI:</strong> Real-time child-friendly pedagogical response.`
        });
      } else {
        // 2. Fallback to rich built-in pedagogical knowledge engine
        generateAIResponse(text);
      }

      // Sync user question points to Google Cloud
      window.dispatchEvent(new CustomEvent('edusync_update_progress', {
        detail: { addPoints: 20, preferredTeacher: activePersona }
      }));
    } catch (err) {
      showTypingIndicator(false);
      isTyping = false;
      generateAIResponse(text);
    }
  }

  function generateAIResponse(query) {
    const lower = query.toLowerCase().trim();

    // 1. Interactive Math Arithmetic Solver (e.g. 3+2, 5*4, 10-3, 12/4)
    const mathClean = lower.replace(/\s+/g, '').replace(/plus/g, '+').replace(/minus/g, '-').replace(/times|multipliedby|x/g, '*').replace(/dividedby|over/g, '/');
    const mathMatch = mathClean.match(/^(-?\d+(\.\d+)?)([\+\-\*\/])(-?\d+(\.\d+)?)$/);

    if (mathMatch) {
      const num1 = parseFloat(mathMatch[1]);
      const op = mathMatch[3];
      const num2 = parseFloat(mathMatch[4]);
      let result = 0;
      let opName = 'added to';
      let icon = '🔢';
      let analogy = '';

      if (op === '+') {
        result = num1 + num2;
        opName = '+';
        icon = '🍎';
        analogy = `If you start with ${num1} items and add ${num2} more, you get a grand total of ${result}!`;
      } else if (op === '-') {
        result = num1 - num2;
        opName = '-';
        icon = '🎯';
        analogy = `If you have ${num1} items and take away ${num2}, you have ${result} remaining!`;
      } else if (op === '*') {
        result = num1 * num2;
        opName = '×';
        icon = '⚡';
        analogy = `That is ${num1} equal groups of ${num2}, which multiply together to make ${result}!`;
      } else if (op === '/') {
        if (num2 === 0) {
          addTeacherMessage(`Whoa! You cannot divide by zero! 🌀 Dividing by zero is like trying to share cookies among zero friends — the math universe gets dizzy!`);
          return;
        }
        result = Math.round((num1 / num2) * 100) / 100;
        opName = '÷';
        icon = '🍕';
        analogy = `Splitting ${num1} equally into ${num2} portions gives ${result} in each piece!`;
      }

      addTeacherMessage(`**${num1} ${opName} ${num2} = ${result}!** 🌟 ${analogy} What other numbers would you like to calculate? ✨`, {
        icon: icon,
        desc: `<strong>Math Solution:</strong> ${num1} ${opName} ${num2} = ${result}`
      });
      return;
    }

    // 2. Conceptual Science, Math, Nature, and Language Questions
    if (lower.includes('sky') && lower.includes('blue')) {
      addTeacherMessage('The sky is blue because of sunlight scattering! ☀️ Sunlight looks white, but it holds every color of the rainbow. Blue light travels in short, tiny waves that bounce and scatter across our atmosphere more than any other color!', {
        icon: '🌤️',
        desc: '<strong>Rayleigh Scattering:</strong> Blue waves scatter 10x more across nitrogen & oxygen air particles.'
      });
    } else if (lower.includes('rainbow')) {
      addTeacherMessage('Rainbows are water prisms! 🌈 When sunlight shines into raindrops, the water bends (refracts) the light, splitting it into Red, Orange, Yellow, Green, Blue, Indigo, and Violet!', {
        icon: '🌈',
        desc: '<strong>Light Refraction:</strong> Raindrops act as mini glass prisms bending white sunlight.'
      });
    } else if (lower.includes('fraction') || lower.includes('half') || lower.includes('quarter') || lower.includes('pizza')) {
      addTeacherMessage('Fractions are just equal sharing! 🍕 When you break a whole into 2 parts, you get 1/2. When you break it into 4 parts, you get 1/4. 1/2 is twice as big as 1/4!', {
        icon: '🍕',
        desc: '<strong>Fraction Rule:</strong> Fewer pieces = Bigger slices (1/2 > 1/4)!'
      });
    } else if (lower.includes('fruit') || lower.includes('apple') || lower.includes('orange') || lower.includes('vitamin')) {
      addTeacherMessage('Fruits are nature’s energy candy! 🍎 They grow from flowers and carry seeds inside. Their sweet natural fructose sugars give your brain steady focus without artificial chemicals!', {
        icon: '🍊',
        desc: '<strong>Fruit Power:</strong> Clean energy, vitamins, and hydrating water.'
      });
    } else if (lower.includes('gravity') || lower.includes('space') || lower.includes('moon') || lower.includes('planet')) {
      addTeacherMessage('Gravity is the invisible cosmic magnet of giant planets! 🚀 Giant Earth pulls everything down, while the smaller Moon only has 1/6th gravity, letting you jump super high!', {
        icon: '🌕',
        desc: '<strong>Gravity Fact:</strong> The heavier the planet, the stronger the pull.'
      });
    } else if (lower.includes('plant') || lower.includes('sun') || lower.includes('leaf') || lower.includes('photo')) {
      addTeacherMessage('Plants are solar-powered chefs! 🌿 They catch photons with green chlorophyll, drink water, and absorb CO₂ to cook up glucose food, gifting us pure oxygen!', {
        icon: '🌿',
        desc: '<strong>Photosynthesis:</strong> Sun + Water + CO₂ ➔ Food + Oxygen.'
      });
    } else if (lower.includes('password') || lower.includes('safe') || lower.includes('cyber')) {
      addTeacherMessage('Online safety is all about private shields! 🛡️ Always create passphrases with 3 words and numbers, and share them ONLY with your parents or guardians!', {
        icon: '🔐',
        desc: '<strong>Safe Rule:</strong> Keep passwords private from game chats and friends.'
      });
    } else if (lower.includes('angle') || lower.includes('acute') || lower.includes('obtuse') || lower.includes('triangle')) {
      addTeacherMessage('Angles measure corners! 📐 An **Acute angle** is sharp and cute (less than 90°). A **Right angle** is a perfect square corner (exactly 90°), and an **Obtuse angle** opens wide (greater than 90°)!', {
        icon: '📐',
        desc: '<strong>Angle Guide:</strong> Acute (<90°) • Right (90°) • Obtuse (>90°)'
      });
    } else if (lower.includes('adjective') || lower.includes('short') || lower.includes('tall') || lower.includes('big')) {
      addTeacherMessage('Adjectives describe things! 📏 When comparing 2 things, add **-er** (e.g. *taller, faster*). When comparing 3 or more things across a group, add **-est** (e.g. *tallest, fastest*)!', {
        icon: '📏',
        desc: '<strong>Comparison Rule:</strong> Base ➔ -er (2 items) ➔ -est (3+ items)'
      });
    } else {
      addTeacherMessage(`That is an awesome, curious question about "${query}"! 💡 In learning and discovery, everything connects back to simple everyday patterns. Would you like to explore a fun visual example or test a quick quiz on this topic? ✨`, {
        icon: '💡',
        desc: `<strong>Exploration Topic:</strong> ${query}`
      });
    }
  }

  function showTypingIndicator(show) {
    let indicator = chatBody?.querySelector('.typing-indicator');
    if (!indicator && chatBody) {
      indicator = document.createElement('div');
      indicator.className = 'typing-indicator';
      indicator.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
      chatBody.appendChild(indicator);
    }
    if (indicator) {
      indicator.style.display = show ? 'inline-flex' : 'none';
      if (show) scrollToBottom();
    }
  }

  sendBtn?.addEventListener('click', handleUserSubmit);
  chatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUserSubmit();
  });

  // Model Selection (Gemini 1.5 Flash vs Gemma 2 Open Source)
  const modelBtns = document.querySelectorAll('.ai-model-select-btn');
  const currentModel = getActiveModel();
  modelBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.model === currentModel);
    btn.addEventListener('click', () => {
      modelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selectedModel = btn.dataset.model || 'gemini-1.5-flash';
      setActiveModel(selectedModel);
      const modelMeta = AI_MODELS[selectedModel];
      addTeacherMessage(`Switched AI Model to **${modelMeta.name}**! 🚀 Ready for your questions.`);
    });
  });

  // Gemini AI Key Config Trigger
  const geminiBtn = document.querySelector('#geminiConfigTriggerBtn');
  geminiBtn?.addEventListener('click', () => {
    const current = getStoredGeminiKey();
    const input = prompt('⚡ Google Gemini & Gemma AI Model Manager\n\nEnter your Google AI Studio API Key below:', current ? '••••••••' + current.slice(-4) : '');
    if (input !== null && input !== '' && !input.startsWith('••••')) {
      saveStoredGeminiKey(input);
      alert('Google AI Key saved! 🚀 Both Gemini 1.5 and Gemma 2 Open-Source are ready.');
    }
  });

  // Initialize
  renderPromptChips();
}
