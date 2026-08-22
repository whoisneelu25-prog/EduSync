// Adaptive Quiz Engine


export const quizQuestions = [
  {
    id: 'fruits',
    topic: 'Fruits & Healthy Nutrition',
    tag: '🍎 Fruit Discovery',
    question: 'Which of these is packed with Vitamin C and grows on trees in sunny groves?',
    options: [
      {
        id: 'opt-orange',
        value: 'Orange 🍊',
        sublabel: 'Juicy, sweet & full of Vitamin C',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="40" r="30" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/>
            <circle cx="40" cy="40" r="22" fill="#F4C95D" opacity="0.85"/>
            <path d="M 40 12 Q 46 8 50 12" stroke="#4FA6A0" stroke-width="3" fill="none"/>
          </svg>
        `
      },
      {
        id: 'opt-cookie',
        value: 'Cookie 🍪',
        sublabel: 'A baked sweet snack (not a fruit)',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="40" r="28" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/>
            <circle cx="32" cy="34" r="3" fill="#D46F55"/>
            <circle cx="46" cy="38" r="3" fill="#D46F55"/>
            <circle cx="38" cy="48" r="3" fill="#D46F55"/>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Super Job! Oranges are Citrus Superstars! 🍊',
      explanation: 'Oranges are full of Vitamin C to keep your immune system strong, and they grow on sweet orange trees!'
    },
    feedbackIncorrect: {
      title: 'Almost! Cookies are tasty treats, but not fruits!',
      explanation: 'Fruits grow on plants and trees from flowers! Oranges are the citrus fruit packed with natural vitamins.'
    },
    nextConcept: 'Identifying Berries vs Citrus'
  },
  {
    id: 'adjectives',
    topic: 'Grammar & Comparisons',
    tag: '📏 Degrees of Comparison',
    question: 'When comparing THREE pencils of different lengths, the smallest one is the:',
    options: [
      {
        id: 'opt-shortest',
        value: 'Shortest 📏',
        sublabel: 'Superlative (-est) for 3 or more items',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <rect x="25" y="32" width="30" height="16" rx="4" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/>
            <text x="40" y="44" fill="#3D8883" font-size="12" font-weight="bold" text-anchor="middle">-EST</text>
          </svg>
        `
      },
      {
        id: 'opt-shorter',
        value: 'Shorter ✏️',
        sublabel: 'Comparative (-er) for only TWO items',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <rect x="18" y="32" width="44" height="16" rx="4" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/>
            <text x="40" y="44" fill="#D46F55" font-size="12" font-weight="bold" text-anchor="middle">-ER</text>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Bingo! -EST is for the most extreme of 3+ items! 🌟',
      explanation: 'When comparing 2 items we use -ER (shorter), but when comparing 3 or more, we crown the winner with -EST (shortest)!'
    },
    feedbackIncorrect: {
      title: 'Close! -ER is only for comparing 2 items.',
      explanation: 'Remember the rule: Short (1 item) ➔ Shorter (2 items) ➔ Shortest (3 or more items)!'
    },
    nextConcept: 'Irregular Adjectives (Good ➔ Better ➔ Best)'
  },
  {
    id: 'fractions',
    topic: 'Fractions & Proportions',
    tag: '📐 Math Logic',
    question: 'Which fraction represents the larger amount of a whole pizza?',
    options: [
      {
        id: 'opt-half',
        value: '1/2',
        sublabel: 'One of two equal parts (Half)',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="40" r="34" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/>
            <path d="M 40 40 L 40 6 A 34 34 0 0 1 40 74 Z" fill="#4FA6A0"/>
          </svg>
        `
      },
      {
        id: 'opt-quarter',
        value: '1/4',
        sublabel: 'One of four equal parts (Quarter)',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="40" r="34" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/>
            <path d="M 40 40 L 40 6 A 34 34 0 0 1 74 40 Z" fill="#E98B73"/>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Nice! You understood the idea. 🍕',
      explanation: 'When you divide a whole into 2 parts (1/2), each piece is twice as large as when you divide it into 4 parts (1/4).'
    },
    feedbackIncorrect: {
      title: "Almost! Let's look at it another way.",
      explanation: 'Even though 4 is bigger than 2, dividing a pizza among 4 friends means everyone gets a smaller slice than dividing between 2!'
    },
    nextConcept: 'Equivalent Fractions (2/4 = 1/2)'
  },
  {
    id: 'angles',
    topic: 'Geometry & Angles',
    tag: '📐 Shape Geometry',
    question: 'An angle measuring 45° is known as:',
    options: [
      {
        id: 'opt-acute',
        value: 'Acute Angle',
        sublabel: 'Less than 90° (Sharp & compact)',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <path d="M 15 65 L 65 65 M 15 65 L 50 30" stroke="#4FA6A0" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M 35 65 A 20 20 0 0 0 30 50" fill="none" stroke="#F4C95D" stroke-width="2"/>
          </svg>
        `
      },
      {
        id: 'opt-obtuse',
        value: 'Obtuse Angle',
        sublabel: 'Greater than 90° (Wide opening)',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <path d="M 35 65 L 75 65 M 35 65 L 10 30" stroke="#E98B73" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M 50 65 A 15 15 0 0 0 25 50" fill="none" stroke="#F4C95D" stroke-width="2"/>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Spot on! Acute angles are sharp. 📐',
      explanation: 'Any angle between 0° and 90° is an acute angle. A right angle is exactly 90°.'
    },
    feedbackIncorrect: {
      title: 'Good try! Remember the angle ruler.',
      explanation: 'Obtuse angles open wider than a square corner (over 90°). 45° is smaller and sharper.'
    },
    nextConcept: 'Measuring Angles with a Protractor'
  }
];

export function initQuizEngine() {
  let currentQuestionIndex = 0;

  const topicBadge = document.querySelector('.quiz-topic-badge');
  const questionTitle = document.querySelector('.quiz-question-title');
  const optionsContainer = document.querySelector('.quiz-options-container');
  const feedbackBox = document.querySelector('.quiz-feedback-box');
  const feedbackIcon = document.querySelector('.feedback-icon');
  const feedbackTitle = document.querySelector('.feedback-title-text');
  const feedbackDesc = document.querySelector('.feedback-desc-text');
  const resetBtn = document.querySelector('.quiz-reset-btn');

  function renderQuestion(index) {
    currentQuestionIndex = index;
    const q = quizQuestions[index];
    if (!q) return;

    if (topicBadge) topicBadge.innerHTML = `<span>📐</span> ${q.topic}`;
    if (questionTitle) questionTitle.textContent = q.question;

    // Reset feedback
    if (feedbackBox) {
      feedbackBox.classList.remove('show', 'feedback-correct', 'feedback-incorrect');
    }

    // Render options
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      q.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'quiz-interactive-opt';
        btn.dataset.id = opt.id;
        btn.dataset.correct = opt.isCorrect ? 'true' : 'false';

        btn.innerHTML = `
          <div class="opt-fraction-graphic">${opt.graphic}</div>
          <div class="opt-value">${opt.value}</div>
          <div class="opt-sublabel">${opt.sublabel}</div>
        `;

        btn.addEventListener('click', () => handleOptionClick(btn, opt.isCorrect, q));
        optionsContainer.appendChild(btn);
      });
    }
  }

  function handleOptionClick(selectedBtn, isCorrect, question) {
    const allBtns = optionsContainer?.querySelectorAll('.quiz-interactive-opt');
    allBtns?.forEach(b => {
      b.classList.remove('state-correct', 'state-incorrect');
      b.style.pointerEvents = 'none'; // prevent re-clicking until reset
    });

    if (isCorrect) {
      selectedBtn.classList.add('state-correct');
      if (feedbackBox) {
        feedbackBox.className = 'quiz-feedback-box show feedback-correct';
        if (feedbackIcon) feedbackIcon.textContent = '✓';
        if (feedbackTitle) feedbackTitle.textContent = question.feedbackCorrect.title;
        if (feedbackDesc) feedbackDesc.textContent = question.feedbackCorrect.explanation;
      }
    } else {
      selectedBtn.classList.add('state-incorrect');
      if (feedbackBox) {
        feedbackBox.className = 'quiz-feedback-box show feedback-incorrect';
        if (feedbackIcon) feedbackIcon.textContent = '✦';
        if (feedbackTitle) feedbackTitle.textContent = question.feedbackIncorrect.title;
        if (feedbackDesc) feedbackDesc.textContent = question.feedbackIncorrect.explanation;
      }
    }
  }

  // Topic tabs switcher
  const topicTabs = document.querySelectorAll('.quiz-topic-tab');
  topicTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.dataset.qIdx || '0', 10);
      renderQuestion(idx);
    });
  });

  function updateActiveTab(index) {
    topicTabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
    });
  }

  // Update renderQuestion to sync tabs
  const originalRender = renderQuestion;
  renderQuestion = function(index) {
    originalRender(index);
    updateActiveTab(index);
  };

  // Next / Reset button
  resetBtn?.addEventListener('click', () => {
    const nextIdx = (currentQuestionIndex + 1) % quizQuestions.length;
    renderQuestion(nextIdx);
  });

  // Hero section quiz options handler
  const heroOpts = document.querySelectorAll('.quiz-hero-opt');
  heroOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      heroOpts.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // Initial render
  renderQuestion(0);
}
