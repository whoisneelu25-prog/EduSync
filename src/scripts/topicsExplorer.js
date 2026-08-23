// Holistic Topics Interactive Spotlight Controller

export const TOPIC_DATA = {
  'academics': {
    id: 'academics',
    title: 'Academics & Conceptual STEM',
    icon: '📐',
    themeClass: 'navy',
    tagline: 'Math, Science, and Language built on intuition, not memorization.',
    skills: ['🔢 Fast Mental Math', '🔬 Hands-on Science Experiments', '📖 Story Comprehension'],
    activityTitle: '⚡ 10-Second Mental Challenge',
    activityText: 'Look around your room: Can you find 3 right angles (90° square corners) in 10 seconds?',
    promptQuestion: 'Explain 1/2 vs 1/4 with pizza',
    quizTheme: 'math'
  },
  'lifeskills': {
    id: 'lifeskills',
    title: 'Life Skills & Emotional Growth',
    icon: '🧭',
    themeClass: 'yellow',
    tagline: 'Problem-solving, patience, self-regulation, and curious discovery.',
    skills: ['🧘 Mindful Deep Breathing', '⏰ Smart Time-Boxing', '💡 Creative Solutions'],
    activityTitle: '🧘 4-4-4 Box Breathing Trick',
    activityText: 'Inhale for 4 seconds, hold for 4 seconds, and exhale slowly for 4 seconds to calm your brain!',
    promptQuestion: 'How does deep breathing calm my brain?',
    quizTheme: 'lifeskills'
  },
  'fitness': {
    id: 'fitness',
    title: 'Health, Nutrition & Body Power',
    icon: '🍎',
    themeClass: 'teal',
    tagline: 'Nutritious foods, playful movement, and natural energy cycles.',
    skills: ['🌈 Eat the Rainbow', '💧 8-Glass Daily Hydration', '🏃 Daily Movement Fun'],
    activityTitle: '💧 Hydration Power-Up',
    activityText: 'Your brain is 75% water! Drinking 1 glass of fresh water gives you an instant focus boost!',
    promptQuestion: 'Why do we need so much water?',
    quizTheme: 'nutrition'
  },
  'cyber': {
    id: 'cyber',
    title: 'Cyber Safety & Digital Shields',
    icon: '🛡️',
    themeClass: 'coral',
    tagline: 'Safe online habits, private shields, and identifying digital scams.',
    skills: ['🔑 3-Word Passphrase Vault', '🎣 Spotting Fake Links', '🔒 Safe Game Chats'],
    activityTitle: '🛡️ Cyber Guardian Rule',
    activityText: 'Never share your real name, school, or home address with strangers in gaming chat rooms!',
    promptQuestion: 'How do I create a super strong password?',
    quizTheme: 'lifeskills'
  },
  'digital': {
    id: 'digital',
    title: 'Digital Responsibility & Kindness',
    icon: '📱',
    themeClass: 'yellow',
    tagline: 'Healthy screen time habits, digital kindness, and positive footprints.',
    skills: ['👁️ 20-20-20 Eye Protection', '💖 Digital Empathy & Kindness', '⏳ Screen Balance'],
    activityTitle: '👁️ The 20-20-20 Eye Rule',
    activityText: 'Every 20 minutes of screen time, look at something 20 feet away for 20 seconds to keep your eyes sharp!',
    promptQuestion: 'What is the 20-20-20 screen rule?',
    quizTheme: 'lifeskills'
  },
  'child-safety': {
    id: 'child-safety',
    title: 'Child Safety & Self-Advocacy',
    icon: '🤝',
    themeClass: 'teal',
    tagline: 'Personal boundaries, trusted mentors, emergency awareness, and confidence.',
    skills: ['🛡️ Personal Safe Boundaries', '🗣️ Speaking to Trusted Adults', '🚨 Emergency Awareness'],
    activityTitle: '🤝 The 5-Finger Trusted Adults Hand',
    activityText: 'Name 5 trusted adults (parents, teachers, doctors) you can always speak to whenever you need help!',
    promptQuestion: 'How do I create a super strong password?',
    quizTheme: 'lifeskills'
  }
};

export function initTopicsExplorer() {
  const cards = document.querySelectorAll('.topic-interactive-card');
  const spotlightContainer = document.querySelector('#topicSpotlightContainer');

  function playChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {}
  }

  function renderSpotlight(topicKey) {
    const data = TOPIC_DATA[topicKey] || TOPIC_DATA['academics'];
    if (!spotlightContainer) return;

    spotlightContainer.innerHTML = `
      <div class="topic-spotlight-card ${data.themeClass}">
        <div class="spotlight-header">
          <div class="spotlight-badge">
            <span class="spotlight-icon">${data.icon}</span>
            <div>
              <span class="spotlight-kicker">✦ Interactive Topic Deep-Dive ✦</span>
              <h3 class="spotlight-title">${data.title}</h3>
            </div>
          </div>
          <p class="spotlight-tagline">${data.tagline}</p>
        </div>

        <div class="spotlight-body-grid">
          <!-- Key Skills Pill List -->
          <div class="spotlight-skills-box">
            <h4>🎯 Core Skills Unlocked:</h4>
            <div class="spotlight-skills-pills">
              ${data.skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}
            </div>
          </div>

          <!-- Micro Activity / Tip -->
          <div class="spotlight-activity-box">
            <h4>${data.activityTitle}</h4>
            <p>${data.activityText}</p>
          </div>
        </div>

        <!-- Action Bridges -->
        <div class="spotlight-actions">
          <button class="btn btn-teal spotlight-chat-btn" data-question="${data.promptQuestion}" type="button">
            <span>💬</span> Ask Teacher Priya About This
          </button>
          <button class="btn btn-secondary spotlight-quiz-btn" data-theme="${data.quizTheme}" type="button" style="background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.25);">
            <span>🎯</span> Practice in Quiz
          </button>
        </div>
      </div>
    `;

    // Wire buttons
    const chatBtn = spotlightContainer.querySelector('.spotlight-chat-btn');
    chatBtn?.addEventListener('click', () => {
      const q = chatBtn.dataset.question;
      const chatSection = document.getElementById('chat');
      if (chatSection) {
        chatSection.scrollIntoView({ behavior: 'smooth' });
        const chatInput = document.querySelector('#chatInput');
        const sendBtn = document.querySelector('#sendChatBtn');
        if (chatInput) {
          chatInput.value = q;
          setTimeout(() => sendBtn?.click(), 600);
        }
      }
    });

    const quizBtn = spotlightContainer.querySelector('.spotlight-quiz-btn');
    quizBtn?.addEventListener('click', () => {
      const theme = quizBtn.dataset.theme;
      const quizSection = document.getElementById('quiz');
      if (quizSection) {
        quizSection.scrollIntoView({ behavior: 'smooth' });
        const themePill = document.querySelector(`.quiz-theme-pill[data-theme="${theme}"]`);
        if (themePill) themePill.click();
      }
    });
  }

  // Wire card clicks
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const topic = card.dataset.topic || 'academics';
      playChime();
      renderSpotlight(topic);

      // Award curious exploration point
      window.dispatchEvent(new CustomEvent('edusync_update_progress', {
        detail: { addPoints: 10 }
      }));
    });
  });

  // Initial render with first topic
  renderSpotlight('academics');
}
