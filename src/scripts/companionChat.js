// SyncBuddy & AI Teacher Companion Chat Controller with Per-Teacher Isolated Chat Threads (ChatGPT Style)
import { 
  askOpenRouterAI,
  getStoredOpenRouterKey, 
  saveStoredOpenRouterKey, 
  getActiveModel, 
  setActiveModel,
  testOpenRouterConnection,
  AI_MODELS 
} from './geminiAI.js';

const CHAT_THREADS_STORAGE_KEY = 'edusync_teacher_chat_threads';

export const teacherPersonas = {
  'priya': {
    id: 'priya',
    name: 'Teacher Priya',
    title: 'Language, Grammar & Storyteller',
    avatar: '🧑‍🏫',
    badge: '📖 English & Stories',
    superpower: '⭐ #1 in Grammar, Similes & Creative Writing',
    tag: 'Language & Story Mentor',
    defaultSubject: 'language',
    placeholder: 'Ask Teacher Priya about stories, words, or grammar (e.g. why use metaphors?)...',
    greeting: 'Namaste, curious learner! 🌟 I’m Teacher Priya. I turn tricky grammar and words into delightful stories. What wondrous concept shall we explore today?'
  },
  'rohan': {
    id: 'rohan',
    name: 'Coach Rohan',
    title: 'STEM & Rocket Physics Coach',
    avatar: '🚀',
    badge: '⚡ STEM & Space',
    superpower: '⭐ #1 in Rocket Physics, Gravity & Speed',
    tag: 'STEM & Space Coach',
    defaultSubject: 'physics',
    placeholder: 'Ask Coach Rohan about rockets, speed, or gravity (e.g. why do planets orbit?)...',
    greeting: 'Hey champion! ⚡ Coach Rohan here! Ready to launch experiments, test gravity, and unlock cosmic science secrets?'
  },
  'arya': {
    id: 'arya',
    name: 'Arya Sir',
    title: 'Visual Math & Geometry Wizard',
    avatar: '🧮',
    badge: '🍕 Visual Math',
    superpower: '⭐ #1 in Fractions, Arithmetic & Geometry',
    tag: 'Visual Math Wizard',
    defaultSubject: 'math',
    placeholder: 'Ask Arya Sir a calculation or math concept (e.g. 18 * 4 or 1/2 vs 1/4)...',
    greeting: 'Welcome to the Math Arena! 🍕 I’m Arya Sir. I turn fractions into pizza slices and numbers into LEGO magic! What calculation shall we crunch?'
  },
  'tara': {
    id: 'tara',
    name: 'Dr. Tara',
    title: 'Wildlife, Plants & Eco Explorer',
    avatar: '🌿',
    badge: '🦋 Nature & Biology',
    superpower: '⭐ #1 in Animals, Rainforests & Human Body',
    tag: 'Nature & Wildlife Explorer',
    defaultSubject: 'nature',
    placeholder: 'Ask Dr. Tara about animals, plants, or the human body (e.g. how do leaves eat sunlight?)...',
    greeting: 'Hello nature explorer! 🌿 I’m Dr. Tara. From deep ocean mysteries to how plants cook sunlight, what nature wonder shall we investigate?'
  },
  'alex': {
    id: 'alex',
    name: 'Captain Alex',
    title: 'Cyber Safety & Mindset Guardian',
    avatar: '🛡️',
    badge: '🔐 Cyber & Habits',
    superpower: '⭐ #1 in Passwords, Screen Balance & Focus',
    tag: 'Cyber Shield & Habits Coach',
    defaultSubject: 'lifeskills',
    placeholder: 'Ask Captain Alex about online safety or focus (e.g. how to build strong passwords?)...',
    greeting: 'Greetings, digital hero! 🛡️ Captain Alex here. Ready to build unbreakable password armor and master calm focus habits?'
  },
  'syncbuddy': {
    id: 'syncbuddy',
    name: 'SyncBuddy AI',
    title: 'Adaptive Peer Study Buddy',
    avatar: '✨',
    badge: '💡 Peer Homework Buddy',
    superpower: '⭐ #1 in 3-Step Intuitive Homework Tutoring',
    tag: 'All-Round Study Companion',
    defaultSubject: 'nutrition',
    placeholder: 'Ask SyncBuddy any confusing homework question for a simple 3-step explanation...',
    greeting: 'Hi dost! ✨ I’m SyncBuddy. Stuck on tricky homework or want a crystal-clear 3-step analogy? Ask me anything!'
  },
  // Backward compatibility aliases
  'maya': {
    id: 'priya',
    name: 'Teacher Priya',
    title: 'Language, Grammar & Storyteller',
    avatar: '🧑‍🏫',
    badge: '📖 English & Stories',
    superpower: '⭐ #1 in Grammar & Stories',
    tag: 'Language & Story Mentor',
    defaultSubject: 'language',
    placeholder: 'Ask Teacher Priya anything...',
    greeting: 'Namaste, curious learner! 🌟 I’m Teacher Priya. What wondrous concept would you like to explore today?'
  },
  'leo': {
    id: 'rohan',
    name: 'Coach Rohan',
    title: 'STEM & Rocket Physics Coach',
    avatar: '🚀',
    badge: '⚡ STEM & Space',
    superpower: '⭐ #1 in Speed & Physics',
    tag: 'STEM & Space Coach',
    defaultSubject: 'physics',
    placeholder: 'Ask Coach Rohan anything...',
    greeting: 'Hey champion! ⚡ Coach Rohan here! Ready to run experiments, test gravity, and unlock science secrets?'
  }
};

export const subjectPrompts = {
  'language': [
    { id: 'lang-er-est', text: '📏 When do I use -er vs -est in writing?' },
    { id: 'lang-verbs', text: '⚡ How can I spot dynamic action verbs?' },
    { id: 'lang-simile', text: '🎭 What is the difference between simile & metaphor?' },
    { id: 'lang-adjectives', text: '🌟 How do adjectives make my stories magical?' }
  ],
  'physics': [
    { id: 'phys-gravity', text: '🌍 Why do things fall down instead of floating?' },
    { id: 'phys-moon', text: '🌕 Why can we jump 6x higher on the Moon?' },
    { id: 'phys-light', text: '⚡ Why does lightning strike before thunder sounds?' },
    { id: 'phys-rocket', text: '🚀 How does rocket fuel push against gravity?' }
  ],
  'math': [
    { id: 'math-pizza', text: '🍕 Explain 1/2 vs 1/4 with pizza slices' },
    { id: 'math-angles', text: '📐 Acute vs Right vs Obtuse angles simply' },
    { id: 'math-multiply', text: '⚡ How does 6 × 7 work with visual grouping?' },
    { id: 'math-shortcuts', text: '🧮 What is a quick trick for multiplying by 9?' }
  ],
  'nature': [
    { id: 'nat-sunlight', text: '🌿 How do green plant leaves eat sunlight?' },
    { id: 'nat-bees', text: '🐝 Why are honeybees so important for fruits?' },
    { id: 'nat-caterpillar', text: '🦋 How does a caterpillar transform into a butterfly?' },
    { id: 'nat-dolphin', text: '🐬 How do dolphins breathe while swimming?' }
  ],
  'lifeskills': [
    { id: 'safe-password', text: '🔐 How do I create an unhackable password?' },
    { id: 'safe-breathe', text: '🧘 How does 4-4-4 box breathing calm my brain?' },
    { id: 'safe-screentime', text: '📱 What is the 20-20-20 screen rule for sharp eyes?' },
    { id: 'safe-bully', text: '🛡️ What should I do if someone is unkind online?' }
  ],
  'nutrition': [
    { id: 'nut-water', text: '💧 Why is 60% of our body pure water?' },
    { id: 'nut-avocado', text: '🥑 Is an avocado secretly a giant fruit?' },
    { id: 'nut-rainbow', text: '🌈 What is the "Eat the Rainbow" plate rule?' },
    { id: 'nut-energy', text: '🍎 How does natural fruit sugar power brain focus?' }
  ]
};

export const knowledgeResponses = {
  'lang-er-est': {
    reply: 'Here is Teacher Priya’s golden rule! 📏 When comparing **only 2 items**, crown them with **-ER**: *"A cheetah is fast**er** than a turtle."* But when comparing **3 or more items** (the whole kingdom!), crown the champion with **-EST**: *"The cheetah is the fast**est** land animal on Earth!"*',
    visual: {
      icon: '🐆',
      desc: '<strong>Comparison Formula:</strong> 2 items = -ER (Faster) • 3+ items = -EST (Fastest).'
    }
  },
  'lang-verbs': {
    reply: 'Verbs are the superhero engines of every sentence! ⚡ Ask yourself: *"Can a person, creature, or robot DO this physical action?"* Words like **sprinted, leaped, roared, whispered, painted, and solved** are all dynamic action verbs!',
    visual: {
      icon: '🏃',
      desc: '<strong>Verb Detective:</strong> If you can act it out or draw motion blur lines, it’s an action verb!'
    }
  },
  'lang-simile': {
    reply: 'Both make your writing sparkle like diamonds! 🎭 A **Simile** compares using "LIKE" or "AS": *"He ran as fast AS lightning."* A **Metaphor** makes a bold direct identity: *"His heart IS pure gold."*',
    visual: {
      icon: '🌟',
      desc: '<strong>Figurative Guide:</strong> Simile uses "like/as" • Metaphor says one thing IS another.'
    }
  },
  'lang-adjectives': {
    reply: 'Adjectives are the colorful paintbrushes of your imagination! 🎨 Without adjectives: *"The dog ate food."* With sparkling adjectives: *"The **fluffy, energetic** dog munched **crunchy, delicious** biscuits!"* They describe color, size, shape, and feeling!',
    visual: {
      icon: '🎨',
      desc: '<strong>Story Brush:</strong> Adjectives describe HOW things look, feel, taste, sound, and smell.'
    }
  },
  'phys-gravity': {
    reply: 'Planet Earth is so colossal (6 sextillion kilograms!) that its invisible gravitational pull reaches out and pulls all matter — including you, the oceans, and basketballs — straight toward its center core! 🌍 Without gravity, we’d float right into space!',
    visual: {
      icon: '🌍',
      desc: '<strong>Earth Gravity:</strong> Giant mass pulls everything down at 9.8 m/s².'
    }
  },
  'phys-moon': {
    reply: 'Because the Moon is much smaller than Earth (only 1% of Earth’s mass), its gravitational pull is only **1/6th as strong**! 🌕 That means if you can jump 1 foot on Earth, on the Moon you will float up **6 whole feet** into the starry sky!',
    visual: {
      icon: '🚀',
      desc: '<strong>Moon Leap:</strong> 1/6th gravity = 6 times higher jumps!'
    }
  },
  'phys-light': {
    reply: 'Light travels at the absolute cosmic speed limit — **300,000 kilometers every single second**! ⚡ Sound waves through air only travel at 0.34 km/s. So the lightning flash reaches your eyes instantly, while acoustic thunder takes 5 seconds per mile to reach your ears!',
    visual: {
      icon: '🌩️',
      desc: '<strong>Speed Race:</strong> Light (Instantaneous) vs Sound (Takes 5 seconds per mile).'
    }
  },
  'phys-rocket': {
    reply: 'Rocket propulsion works by **Newton’s Third Law of Motion**: For every action, there is an equal and opposite reaction! 🚀 When burning rocket fuel blasts downward at extreme speed, it pushes the rocket blasting upward straight into orbit!',
    visual: {
      icon: '🚀',
      desc: '<strong>Thrust Power:</strong> Blasting gas down ⬇️ shoots the rocket UP ⬆️!'
    }
  },
  'math-pizza': {
    reply: 'Imagine a piping hot cheese pizza fresh out of the oven! 🍕 If you share with 1 best friend, you cut it down the middle into 2 equal halves. You get **1/2**! But if 4 friends share, you cut it into 4 pieces: **1/4**. 1/2 gives you twice as much pizza as 1/4!',
    visual: {
      icon: '🍕',
      desc: '<strong>Fraction Rule:</strong> Fewer pieces = Bigger slices (1/2 > 1/4)!'
    }
  },
  'math-angles': {
    reply: 'Look at a door corner or a book edge: that sharp square corner is a **90° Right Angle** 📐. If an angle is narrower and sharper, it’s an **Acute Angle** (think "a cute little puppy"). If it opens wide like a comfy recliner chair, it’s an **Obtuse Angle**!',
    visual: {
      icon: '📐',
      desc: '<strong>Angle Guide:</strong> Acute (<90°) • Right (90° corner) • Obtuse (>90° wide open).'
    }
  },
  'math-multiply': {
    reply: 'Multiplication is super-speed grouping! ⚡ **6 × 7** means you have **6 baskets with 7 apples in each**. Count by sevens: 7, 14, 21, 28, 35, **42**! You instantly have 42 apples without adding one by one!',
    visual: {
      icon: '🧺',
      desc: '<strong>Grouping Power:</strong> 6 groups of 7 = 42 total items!'
    }
  },
  'math-shortcuts': {
    reply: 'Here is Arya Sir’s famous 9s Finger Trick! 🧮 To find **9 × 4**, hold out both hands with 10 fingers. Bend down your **4th finger** from the left. You have 3 fingers on the left and 6 on the right: **36**! Magic!',
    visual: {
      icon: '🖐️',
      desc: '<strong>Finger Magic:</strong> 9 × 4 ➔ 3 fingers left + 6 fingers right = 36!'
    }
  },
  'nat-sunlight': {
    reply: 'Plants have microscopic green solar factories called **chlorophyll**! 🌿 Leaves absorb carbon dioxide from the air and water from the soil. When sunlight hits chlorophyll, it cooks sweet glucose food and releases clean oxygen for us to breathe!',
    visual: {
      icon: '🌿',
      desc: '<strong>Photosynthesis:</strong> Sunlight + Water + CO₂ ➔ Sweet Food + Fresh Oxygen (O₂)!'
    }
  },
  'nat-bees': {
    reply: 'Bees are nature’s master pollination heroes! 🐝 When a bee sips sweet nectar, fuzzy yellow pollen dust sticks to its body. When it flies to the next flower, it pollinates the plant so it can grow into juicy apples, mangoes, and berries!',
    visual: {
      icon: '🐝',
      desc: '<strong>Pollination Hero:</strong> 1 out of every 3 bites of human food relies directly on bees!'
    }
  },
  'nat-caterpillar': {
    reply: 'Inside the silky chrysalis, something miraculous happens! 🦋 The caterpillar releases natural enzymes that rearrange its crawling cells into brand new wings, delicate antennae, and nectar-sipping eyes! It emerges as a flying butterfly.',
    visual: {
      icon: '🦋',
      desc: '<strong>Metamorphosis:</strong> Egg ➔ Caterpillar ➔ Chrysalis ➔ Butterfly!'
    }
  },
  'nat-dolphin': {
    reply: 'Dolphins are not fish — they are warm-blooded mammals just like us! 🐬 They have a blowhole on the top of their head. They come to the ocean surface every few minutes to exhale old air and inhale a fresh lungful of oxygen!',
    visual: {
      icon: '🐬',
      desc: '<strong>Mammal Wonder:</strong> Dolphins breathe air through a blowhole, not gills!'
    }
  },
  'safe-password': {
    reply: 'Think of passwords like impenetrable superhero shields! 🔐 Pick 3 random favorite words + a lucky number + a special symbol: like `GoldenEagle77!`. Never share it in gaming chats or with friends — only your parents or guardians should know your login!',
    visual: {
      icon: '🛡️',
      desc: '<strong>Cyber Shield:</strong> 3 Words + Number + Symbol = Unhackable passphrase.'
    }
  },
  'safe-breathe': {
    reply: 'When you take slow, deep 4-second belly breaths (Inhale 4s ➔ Hold 4s ➔ Exhale 4s ➔ Hold 4s), it sends a direct signal to the **vagus nerve** in your brain 🧘. This calms your stress amygdala and gives full superpower back to your prefrontal thinking brain!',
    visual: {
      icon: '🌬️',
      desc: '<strong>Box Breathing:</strong> 4s Inhale ➔ 4s Hold ➔ 4s Exhale ➔ 4s Hold.'
    }
  },
  'safe-screentime': {
    reply: 'To keep eyes sparkling and prevent digital strain, eye doctors recommend the **20-20-20 Rule**! 👀 Every 20 minutes of screen time, look up at an object at least 20 feet away for 20 seconds. It lets your eye focus muscles relax completely!',
    visual: {
      icon: '👀',
      desc: '<strong>20-20-20 Vision Care:</strong> Every 20 mins, look 20 ft away for 20 seconds.'
    }
  },
  'safe-bully': {
    reply: 'Always follow the 3-Step Hero Protocol: 1. **Do not retaliate.** 2. **Take a screenshot.** 3. **Tell a trusted adult immediately!** 🛡️ Never suffer in silence — great guardians always have your back!',
    visual: {
      icon: '🛡️',
      desc: '<strong>Shield Protocol:</strong> Stop ➔ Screenshot ➔ Tell a Trusted Adult.'
    }
  },
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
    reply: 'Eating the rainbow means loading your plate with natural vibrant colors! 🌈 Red tomatoes protect your heart, orange carrots give you eagle eyesight, green broccoli builds iron stamina, and purple blueberries protect brain memory!',
    visual: {
      icon: '🥗',
      desc: '<strong>Rainbow Plate:</strong> Red (Heart) • Orange (Eyes) • Green (Stamina) • Blue/Purple (Brain).'
    }
  },
  'nut-energy': {
    reply: 'Natural fruits contain fructose, vitamins, and dietary fiber that release energy slowly into your bloodstream! 🍎 Unlike candy which causes a spike and sleepy crash, whole fruits keep you energized all afternoon!',
    visual: {
      icon: '🍎',
      desc: '<strong>Clean Energy:</strong> Fiber + Natural Fructose = Steady All-Day Brain Focus.'
    }
  }
};

// Thread Storage Helper Functions
function loadSavedThreads() {
  try {
    const raw = localStorage.getItem(CHAT_THREADS_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Could not load chat threads:', e);
  }
  return {};
}

function persistThreads(threads) {
  try {
    localStorage.setItem(CHAT_THREADS_STORAGE_KEY, JSON.stringify(threads));
  } catch (e) {
    console.warn('Could not persist chat threads:', e);
  }
}

export function initCompanionChat() {
  let activePersona = 'priya';
  let activeSubject = 'language';
  let isTyping = false;

  // In-memory conversation store for each teacher
  const teacherThreads = loadSavedThreads();

  // Ensure every teacher persona has an initialized thread
  Object.keys(teacherPersonas).forEach(k => {
    const canonicalKey = teacherPersonas[k].id;
    if (!teacherThreads[canonicalKey] || teacherThreads[canonicalKey].length === 0) {
      teacherThreads[canonicalKey] = [
        {
          role: 'teacher',
          personaId: canonicalKey,
          text: teacherPersonas[canonicalKey].greeting,
          visual: null,
          timestamp: Date.now()
        }
      ];
    }
  });

  // DOM Elements
  const personaCards = document.querySelectorAll('.teacher-specialist-card, .teacher-persona-btn');
  const personaAvatarEl = document.querySelector('.companion-pulse-avatar');
  const personaNameEl = document.querySelector('.companion-name-title');
  const personaStatusEl = document.querySelector('.companion-status-text');
  const personaSuperpowerEl = document.querySelector('.companion-superpower-badge');
  const subjectPills = document.querySelectorAll('.chat-subject-tab');
  const chipsContainer = document.querySelector('.companion-prompt-chips');
  const chatBody = document.querySelector('.companion-chat-body');
  const chatInput = document.querySelector('.companion-input');
  const sendBtn = document.querySelector('.companion-send-btn');
  const newChatBtn = document.querySelector('#newTeacherChatBtn');

  function scrollToBottom() {
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  function getActiveThreadKey() {
    return teacherPersonas[activePersona]?.id || 'priya';
  }

  // Render all messages in the active teacher's thread
  function renderActiveThread() {
    if (!chatBody) return;
    const threadKey = getActiveThreadKey();
    const thread = teacherThreads[threadKey] || [];

    // Clear current DOM stream
    chatBody.innerHTML = '';

    thread.forEach(msg => {
      if (msg.role === 'student' || msg.role === 'user') {
        renderStudentBubble(msg.text, false);
      } else {
        renderTeacherBubble(msg.text, msg.visual, msg.personaId || threadKey, false);
      }
    });

    scrollToBottom();
  }

  function renderStudentBubble(text, shouldScroll = true) {
    if (!chatBody) return;
    const row = document.createElement('div');
    row.className = 'chat-bubble-row student-row';
    row.innerHTML = `
      <div class="chat-avatar-mini">🎒</div>
      <div class="chat-message-bubble">${escapeHtml(text)}</div>
    `;
    chatBody.appendChild(row);
    if (shouldScroll) scrollToBottom();
  }

  function renderTeacherBubble(text, visual = null, personaKey = null, shouldScroll = true) {
    if (!chatBody) return;
    const key = personaKey || getActiveThreadKey();
    const persona = teacherPersonas[key] || teacherPersonas['priya'];
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

    const formattedContent = formatAiMarkdown(text);

    row.innerHTML = `
      <div class="chat-avatar-mini">${persona.avatar}</div>
      <div class="chat-message-bubble">
        <div class="chat-teacher-identity-header">
          <span class="chat-teacher-badge-pill">${persona.badge}</span>
          <span class="chat-teacher-superpower-sub">${persona.superpower}</span>
        </div>
        <p>${formattedContent}</p>
        ${visualHtml}
        <div class="chat-msg-actions">
          <button class="chat-action-btn read-aloud-btn" type="button" title="Read Aloud">🔊 Read Aloud</button>
          <button class="chat-action-btn simpler-btn" type="button">🌱 Simpler Analogy</button>
          <button class="chat-action-btn example-btn" type="button">💡 Another Real Example</button>
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
      addTeacherMessage(`Here is the simplest way to picture it: Imagine explaining this with everyday cartoon drawings! Focus on the main shape or everyday objects like pizza slices, LEGO bricks, or toy racecars! ✨`);
    });

    const exampleBtn = row.querySelector('.example-btn');
    exampleBtn?.addEventListener('click', () => {
      addTeacherMessage(`Here is another fun real-world example! 🌟 Look around you: everything in our world connects back to shapes, patterns, and natural curiosity! 🧱🚀`);
    });

    chatBody.appendChild(row);
    if (shouldScroll) scrollToBottom();
  }

  function addStudentMessage(text) {
    const threadKey = getActiveThreadKey();
    if (!teacherThreads[threadKey]) teacherThreads[threadKey] = [];
    teacherThreads[threadKey].push({
      role: 'student',
      text: text,
      timestamp: Date.now()
    });
    persistThreads(teacherThreads);
    renderStudentBubble(text, true);
  }

  function addTeacherMessage(text, visual = null) {
    const threadKey = getActiveThreadKey();
    if (!teacherThreads[threadKey]) teacherThreads[threadKey] = [];
    teacherThreads[threadKey].push({
      role: 'teacher',
      personaId: threadKey,
      text: text,
      visual: visual,
      timestamp: Date.now()
    });
    persistThreads(teacherThreads);
    renderTeacherBubble(text, visual, threadKey, true);
  }

  function setActiveTeacher(personaKey) {
    activePersona = personaKey || 'priya';
    const persona = teacherPersonas[activePersona] || teacherPersonas['priya'];

    // Update active states on teacher cards
    personaCards.forEach(card => {
      card.classList.toggle('active', card.dataset.persona === activePersona);
    });

    // Update header identity
    if (personaAvatarEl) personaAvatarEl.textContent = persona.avatar;
    if (personaNameEl) {
      personaNameEl.innerHTML = `${persona.name} <span class="companion-mode-tag">${persona.tag}</span>`;
    }
    if (personaStatusEl) {
      personaStatusEl.textContent = persona.title;
    }
    if (personaSuperpowerEl) {
      personaSuperpowerEl.textContent = persona.superpower;
    }

    // Update input placeholder for that specific teacher
    if (chatInput && persona.placeholder) {
      chatInput.placeholder = persona.placeholder;
    }

    // Auto-align default subject tab
    if (persona.defaultSubject) {
      activeSubject = persona.defaultSubject;
      subjectPills.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.subject === activeSubject);
      });
      renderPromptChips();
    }

    // Load and render this teacher's dedicated conversation thread!
    renderActiveThread();
  }

  // Teacher Selection Listener
  personaCards.forEach(btn => {
    btn.addEventListener('click', () => {
      const personaKey = btn.dataset.persona || 'priya';
      setActiveTeacher(personaKey);
    });
  });

  // "New Chat" Button Handler
  newChatBtn?.addEventListener('click', () => {
    const threadKey = getActiveThreadKey();
    const persona = teacherPersonas[threadKey] || teacherPersonas['priya'];

    // Reset this teacher's thread to fresh greeting
    teacherThreads[threadKey] = [
      {
        role: 'teacher',
        personaId: threadKey,
        text: persona.greeting,
        visual: null,
        timestamp: Date.now()
      }
    ];
    persistThreads(teacherThreads);
    renderActiveThread();

    // Show temporary confirmation
    const origText = newChatBtn.innerHTML;
    newChatBtn.innerHTML = '<span>✨</span> Started!';
    newChatBtn.classList.add('flash-active');
    setTimeout(() => {
      newChatBtn.innerHTML = origText;
      newChatBtn.classList.remove('flash-active');
    }, 1200);
  });

  // Render Prompt Chips for Active Subject
  function renderPromptChips() {
    if (!chipsContainer) return;
    chipsContainer.innerHTML = '';

    const prompts = subjectPrompts[activeSubject] || subjectPrompts['language'];
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
      activeSubject = tab.dataset.subject || 'language';
      renderPromptChips();
    });
  });

  function formatAiMarkdown(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
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

  async function handlePromptClick(promptId, userText) {
    if (isTyping) return;
    addStudentMessage(userText);

    isTyping = true;
    showTypingIndicator(true);

    try {
      const threadKey = getActiveThreadKey();
      const historyContext = teacherThreads[threadKey] || [];

      // Try live OpenRouter AI with active persona and conversation history
      const aiReply = await askOpenRouterAI(userText, activePersona, '', '', historyContext);
      showTypingIndicator(false);
      isTyping = false;

      if (aiReply) {
        const activeMod = getActiveModel();
        const modMeta = AI_MODELS[activeMod] || { name: 'OpenRouter AI' };
        addTeacherMessage(aiReply, {
          icon: '⚡',
          desc: `<strong>${modMeta.name}:</strong> Live pedagogical answer calibrated for ${teacherPersonas[activePersona]?.name}.`
        });
      } else {
        const resp = knowledgeResponses[promptId];
        if (resp) {
          addTeacherMessage(resp.reply, resp.visual);
        } else {
          addTeacherMessage(`That is a fantastic question! 🌟 Let's explore how this concept connects to the world around us. What part would you like to dive into first?`);
        }
      }

      // Sync chat curiosity points
      window.dispatchEvent(new CustomEvent('edusync_update_progress', {
        detail: { addPoints: 15, preferredTeacher: activePersona }
      }));
    } catch {
      showTypingIndicator(false);
      isTyping = false;
      const resp = knowledgeResponses[promptId];
      if (resp) {
        addTeacherMessage(resp.reply, resp.visual);
      }
    }
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
      const threadKey = getActiveThreadKey();
      const historyContext = teacherThreads[threadKey] || [];

      // 1. Call OpenRouter AI with contextual history
      const aiReply = await askOpenRouterAI(text, activePersona, '', '', historyContext);
      showTypingIndicator(false);
      isTyping = false;

      if (aiReply) {
        const activeMod = getActiveModel();
        const modMeta = AI_MODELS[activeMod] || { name: 'OpenRouter AI' };
        addTeacherMessage(aiReply, {
          icon: '⚡',
          desc: `<strong>${modMeta.name}:</strong> Live response from ${teacherPersonas[activePersona]?.name}.`
        });
      } else {
        // 2. Fallback to rich built-in pedagogical knowledge engine
        generateAIResponse(text);
      }

      // Sync user question points
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

  // Model Selection Buttons
  const modelBtns = document.querySelectorAll('.ai-model-select-btn');
  const currentModel = getActiveModel();
  modelBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.model === currentModel);
    btn.addEventListener('click', () => {
      modelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selectedModel = btn.dataset.model || 'google/gemini-2.5-flash';
      setActiveModel(selectedModel);
      const modelMeta = AI_MODELS[selectedModel] || { name: selectedModel };
      addTeacherMessage(`Switched AI Model to **${modelMeta.name}**! 🚀 Ready for your questions.`);
    });
  });

  // Initialize Default State
  setActiveTeacher('priya');
  renderPromptChips();
}
