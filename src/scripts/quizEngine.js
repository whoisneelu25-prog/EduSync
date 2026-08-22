// Adaptive Quiz Engine with Multi-Thematic Question Bank

export const quizThemes = [
  { id: 'all', name: '✨ All Themes', icon: '✨' },
  { id: 'nutrition', name: '🍎 Nutrition & Fruits', icon: '🍎' },
  { id: 'math', name: '📐 Math & Fractions', icon: '📐' },
  { id: 'language', name: '📏 Grammar & Words', icon: '📏' },
  { id: 'physics', name: '🚀 Physics & Space', icon: '🚀' },
  { id: 'nature', name: '🌿 Nature & Science', icon: '🌿' },
  { id: 'lifeskills', name: '🛡️ Safety & Life Skills', icon: '🛡️' }
];

export const quizQuestions = [
  // 1. NUTRITION & FRUITS
  {
    id: 'fruits-vitc',
    theme: 'nutrition',
    topic: 'Fruits & Healthy Nutrition',
    tag: '🍎 Fruit Discovery',
    difficulty: 'Level 1: Foundation',
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
        sublabel: 'A baked snack with processed sugars',
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
      explanation: 'Oranges are full of natural Vitamin C to keep your immune system strong and guard your body against sniffles!'
    },
    feedbackIncorrect: {
      title: 'Almost! Cookies are tasty treats, but not fruits!',
      explanation: 'Fruits grow on plants and trees from flowers. Oranges give your body natural energy and fiber!'
    },
    nextConcept: 'Spotting Berries vs Citrus Fruits'
  },
  {
    id: 'fruits-hydration',
    theme: 'nutrition',
    topic: 'Fruits & Hydration',
    tag: '🍉 Summer Nutrition',
    difficulty: 'Level 1: Foundation',
    question: 'Which giant fruit is over 90% water and has a crisp green striped rind?',
    options: [
      {
        id: 'opt-watermelon',
        value: 'Watermelon 🍉',
        sublabel: 'Super hydrating & refreshing',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <path d="M 15 50 A 25 25 0 0 0 65 50 Z" fill="#E98B73" stroke="#4FA6A0" stroke-width="4"/>
            <circle cx="30" cy="45" r="2" fill="#17212B"/>
            <circle cx="40" cy="42" r="2" fill="#17212B"/>
            <circle cx="50" cy="45" r="2" fill="#17212B"/>
          </svg>
        `
      },
      {
        id: 'opt-banana',
        value: 'Banana 🍌',
        sublabel: 'Rich in potassium and starch',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <path d="M 25 25 Q 55 35 45 65" stroke="#F4C95D" stroke-width="8" stroke-linecap="round" fill="none"/>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Spot on! Watermelon is nature’s water bottle! 🍉',
      explanation: 'Watermelon is 92% pure water packed with electrolytes, making it the perfect post-playtime healthy refresher!'
    },
    feedbackIncorrect: {
      title: 'Good guess! Bananas are energetic, but not 90% water.',
      explanation: 'Watermelon has the highest water content of almost any fruit, which is where it gets its name!'
    },
    nextConcept: 'How Plants Store Water in Fruits'
  },
  {
    id: 'fruits-berries',
    theme: 'nutrition',
    topic: 'Antioxidants & Superfoods',
    tag: '🫐 Brain Power',
    difficulty: 'Level 2: Reasoning',
    question: 'Why do blueberries have a deep blue-indigo color?',
    options: [
      {
        id: 'opt-anthocyanin',
        value: 'Natural Antioxidants 🫐',
        sublabel: 'Anthocyanins that protect brain cells',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="32" cy="45" r="14" fill="#23486C" stroke="#4FA6A0" stroke-width="2"/>
            <circle cx="48" cy="38" r="16" fill="#17324D" stroke="#F4C95D" stroke-width="2"/>
          </svg>
        `
      },
      {
        id: 'opt-fooddye',
        value: 'Artificial Food Dye 🎨',
        sublabel: 'Added colors in factory candy',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <rect x="25" y="25" width="30" height="30" rx="6" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/>
            <path d="M 35 25 L 45 45 L 35 55" stroke="#E98B73" stroke-width="2" fill="none"/>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Brilliant! Deep colors mean powerful antioxidants! 🌟',
      explanation: 'Blueberries produce natural pigments called anthocyanins to protect themselves from harsh sunlight, which boost memory and focus!'
    },
    feedbackIncorrect: {
      title: 'Nature does not use food dye!',
      explanation: 'Fresh berries produce their own deep rich pigments naturally through sun exposure and healthy soil nutrients.'
    },
    nextConcept: 'Plant Pigments and Photosynthesis'
  },

  // 2. GRAMMAR & WORDS
  {
    id: 'grammar-est',
    theme: 'language',
    topic: 'Grammar & Comparisons',
    tag: '📏 Degrees of Comparison',
    difficulty: 'Level 1: Foundation',
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
      title: 'Bingo! -EST crowns the winner of 3+ items! 🌟',
      explanation: 'When comparing 2 items we use -ER (shorter), but when comparing 3 or more, we use -EST (shortest)!'
    },
    feedbackIncorrect: {
      title: 'Close! -ER is only for comparing 2 items.',
      explanation: 'Remember the 3-step ladder: Short (1) ➔ Shorter (2) ➔ Shortest (3 or more)!'
    },
    nextConcept: 'Irregular Adjectives (Good ➔ Better ➔ Best)'
  },
  {
    id: 'grammar-opposites',
    theme: 'language',
    topic: 'Vocabulary & Antonyms',
    tag: '🔄 Antonyms',
    difficulty: 'Level 1: Foundation',
    question: 'What is the exact opposite (antonym) of the word "ANCIENT"?',
    options: [
      {
        id: 'opt-modern',
        value: 'Modern / New 🚀',
        sublabel: 'Belonging to current recent times',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="40" r="28" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/>
            <path d="M 30 40 L 50 40 M 40 30 L 50 40 L 40 50" stroke="#17324D" stroke-width="3" stroke-linecap="round"/>
          </svg>
        `
      },
      {
        id: 'opt-old',
        value: 'Old / Antique 🏺',
        sublabel: 'A synonym (same meaning), not opposite',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="40" r="28" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/>
            <path d="M 40 25 L 40 55 M 25 40 L 55 40" stroke="#E98B73" stroke-width="3"/>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Correct! Ancient means long ago, Modern means right now! 🏛️',
      explanation: 'Synonyms mean the same thing, but Antonyms are complete opposites like Ancient vs Modern!'
    },
    feedbackIncorrect: {
      title: 'Watch out: Old is a synonym, not an antonym!',
      explanation: 'Ancient and Old mean almost the same thing. The opposite of something very old is Modern or Brand New!'
    },
    nextConcept: 'Context Clues for Vocabulary'
  },
  {
    id: 'grammar-action',
    theme: 'language',
    topic: 'Parts of Speech',
    tag: '⚡ Action Verbs',
    difficulty: 'Level 2: Reasoning',
    question: 'In the sentence: "The cheetah sprinted across the savanna", which word is the ACTION VERB?',
    options: [
      {
        id: 'opt-sprinted',
        value: 'Sprinted 🐆',
        sublabel: 'The physical action being performed',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <path d="M 20 50 Q 40 20 60 50" stroke="#4FA6A0" stroke-width="4" fill="none" stroke-linecap="round"/>
            <circle cx="60" cy="50" r="4" fill="#4FA6A0"/>
          </svg>
        `
      },
      {
        id: 'opt-cheetah',
        value: 'Cheetah 🐾',
        sublabel: 'The noun (the subject doing the action)',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="40" r="24" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/>
            <text x="40" y="46" font-size="10" font-weight="bold" fill="#17324D" text-anchor="middle">NOUN</text>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Great grammatical eye! Sprinted is the action! ⚡',
      explanation: 'Cheetah is the noun (who is doing it), and Sprinted is the dynamic action verb showing rapid running!'
    },
    feedbackIncorrect: {
      title: 'Cheetah is a Noun (the animal)!',
      explanation: 'Verbs are doing words that show action or movement. "Sprinted" describes what the cheetah did.'
    },
    nextConcept: 'Vivid Action Verbs vs Adverbs'
  },

  // 3. MATH & FRACTIONS
  {
    id: 'math-half-quarter',
    theme: 'math',
    topic: 'Fractions & Proportions',
    tag: '📐 Math Logic',
    difficulty: 'Level 1: Foundation',
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
      explanation: 'When you divide a whole into 2 parts (1/2), each piece is twice as large as dividing into 4 parts (1/4).'
    },
    feedbackIncorrect: {
      title: "Almost! Let's look at it another way.",
      explanation: 'Even though 4 is a bigger number than 2, dividing a pizza among 4 friends means each slice is smaller than dividing between 2!'
    },
    nextConcept: 'Equivalent Fractions (2/4 = 1/2)'
  },
  {
    id: 'math-equivalent',
    theme: 'math',
    topic: 'Equivalent Fractions',
    tag: '🍕 Visual Math',
    difficulty: 'Level 2: Reasoning',
    question: 'If you have 2 out of 4 slices (2/4) of a pie, what is that equivalent to?',
    options: [
      {
        id: 'opt-eq-half',
        value: '1/2 (One Half) 🥧',
        sublabel: 'Exactly half of the entire pie',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="40" r="30" fill="#FEF8E7" stroke="#4FA6A0" stroke-width="2.5"/>
            <path d="M 40 40 L 40 10 A 30 30 0 0 1 40 70 Z" fill="#F4C95D"/>
          </svg>
        `
      },
      {
        id: 'opt-eq-three',
        value: '3/4 (Three Quarters) 🥧',
        sublabel: 'Three out of four slices',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="40" r="30" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/>
            <path d="M 40 40 L 40 10 A 30 30 0 1 1 10 40 Z" fill="#E98B73"/>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Math Wizardry! 2/4 and 1/2 are equal twins! 🌟',
      explanation: 'If you simplify 2/4 by dividing top and bottom by 2, you get 1/2. Two quarters make a whole half!'
    },
    feedbackIncorrect: {
      title: 'Not quite 3/4!',
      explanation: '2 out of 4 slices takes up exactly half the circle. 3/4 would mean having one extra slice!'
    },
    nextConcept: 'Adding Fractions with Like Denominators'
  },
  {
    id: 'math-geometry-angles',
    theme: 'math',
    topic: 'Geometry & Angles',
    tag: '📐 Shape Geometry',
    difficulty: 'Level 2: Reasoning',
    question: 'An angle measuring 45° is known as an:',
    options: [
      {
        id: 'opt-acute',
        value: 'Acute Angle 📐',
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
        value: 'Obtuse Angle 📐',
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
      title: 'Spot on! Acute angles are sharp and cute (<90°)! 📐',
      explanation: 'Any angle between 0° and 90° is an acute angle. A right corner square is exactly 90°.'
    },
    feedbackIncorrect: {
      title: 'Good try! Remember the corner rule.',
      explanation: 'Obtuse angles open wider than a square door corner (over 90°). 45° is sharp and narrow!'
    },
    nextConcept: 'Measuring Angles with a Protractor'
  },

  // 4. PHYSICS & SPACE
  {
    id: 'physics-gravity',
    theme: 'physics',
    topic: 'Gravity & Mass',
    tag: '🌍 Planetary Science',
    difficulty: 'Level 1: Foundation',
    question: 'Why do astronauts bounce higher on the Moon than on Earth?',
    options: [
      {
        id: 'opt-less-gravity',
        value: 'Moon has Less Mass & Gravity 🌕',
        sublabel: '1/6th of Earth’s gravitational pull',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="40" r="26" fill="#17324D" stroke="#F4C95D" stroke-width="2"/>
            <circle cx="40" cy="24" r="6" fill="#4FA6A0"/>
            <path d="M 40 30 L 40 45 M 34 38 L 46 38" stroke="#4FA6A0" stroke-width="2"/>
          </svg>
        `
      },
      {
        id: 'opt-moonboots',
        value: 'Special Spring Boots 🥾',
        sublabel: 'Heavy mechanical spring suits',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <rect x="25" y="30" width="30" height="20" rx="4" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Gravity Master! Smaller mass = gentler gravity! 🚀',
      explanation: 'The Moon is much smaller than Earth, so its gravitational pull is only 1/6th as strong. You can jump 6 times higher there!'
    },
    feedbackIncorrect: {
      title: 'Astronaut boots are actually very heavy!',
      explanation: 'It is the Moon itself that pulls with less gravitational force because it has less mass than planet Earth.'
    },
    nextConcept: 'Orbits and Gravitational Waves'
  },
  {
    id: 'physics-light',
    theme: 'physics',
    topic: 'Light & Shadows',
    tag: '💡 Optics & Sun',
    difficulty: 'Level 1: Foundation',
    question: 'When is your outdoor shadow the SHORTEST during the day?',
    options: [
      {
        id: 'opt-noon',
        value: 'At Solar Noon ☀️',
        sublabel: 'When the sun is directly overhead',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="20" r="10" fill="#F4C95D"/>
            <line x1="40" y1="40" x2="40" y2="60" stroke="#17324D" stroke-width="3"/>
            <ellipse cx="40" cy="62" rx="8" ry="3" fill="#64748B"/>
          </svg>
        `
      },
      {
        id: 'opt-sunset',
        value: 'At Sunset / Sunrise 🌅',
        sublabel: 'When the sun is low on the horizon',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="15" cy="40" r="8" fill="#E98B73"/>
            <line x1="40" y1="40" x2="40" y2="60" stroke="#17324D" stroke-width="3"/>
            <ellipse cx="60" cy="62" rx="20" ry="3" fill="#64748B"/>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Brilliant! Overhead light casts the shortest shadows! ☀️',
      explanation: 'At midday when the Sun is at its highest point, light beams strike you from straight above, casting a tiny shadow right beneath your feet!'
    },
    feedbackIncorrect: {
      title: 'Sunsets cast the LONGEST shadows!',
      explanation: 'When the sun is low near the horizon, light hits you from a sharp angle, stretching your shadow far across the ground.'
    },
    nextConcept: 'How Ancient Sundials Told Time'
  },

  // 5. NATURE & SCIENCE
  {
    id: 'nature-photosynthesis',
    theme: 'nature',
    topic: 'Plant Biology',
    tag: '🌿 Plant Power',
    difficulty: 'Level 1: Foundation',
    question: 'What gas do green plants absorb from the air to make their food during photosynthesis?',
    options: [
      {
        id: 'opt-co2',
        value: 'Carbon Dioxide (CO₂) 🍃',
        sublabel: 'Absorbed through microscopic leaf pores',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <path d="M 40 60 C 20 40, 20 20, 40 10 C 60 20, 60 40, 40 60" fill="#4FA6A0" opacity="0.9"/>
            <text x="40" y="42" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">CO₂</text>
          </svg>
        `
      },
      {
        id: 'opt-helium',
        value: 'Helium Gas 🎈',
        sublabel: 'The light gas used to float party balloons',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="35" r="18" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/>
            <line x1="40" y1="53" x2="40" y2="70" stroke="#E98B73" stroke-width="2"/>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Eco-Champion! Plants breathe in CO₂ and give us Oxygen! 🌿',
      explanation: 'Plants use green chlorophyll to trap photons, drink water, and absorb CO₂ to create glucose sugar food, releasing clean oxygen for us!'
    },
    feedbackIncorrect: {
      title: 'Helium is for party balloons!',
      explanation: 'Plants take in carbon dioxide (CO₂) that humans and animals breathe out, cleaning the air for our planet!'
    },
    nextConcept: 'The Oxygen-Carbon Dioxide Balance Cycle'
  },

  // 6. LIFE SKILLS & SAFETY
  {
    id: 'safety-passwords',
    theme: 'lifeskills',
    topic: 'Cyber Safety',
    tag: '🛡️ Online Security',
    difficulty: 'Level 1: Foundation',
    question: 'Which is the safest rule for your secret account passwords?',
    options: [
      {
        id: 'opt-private-pwd',
        value: 'Share ONLY with Parents/Guardians 🔐',
        sublabel: 'Never share with friends, games, or strangers',
        isCorrect: true,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <rect x="25" y="35" width="30" height="24" rx="4" fill="#FEF8E7" stroke="#4FA6A0" stroke-width="2.5"/>
            <path d="M 32 35 L 32 25 A 8 8 0 0 1 48 25 L 48 35" stroke="#4FA6A0" stroke-width="3" fill="none"/>
          </svg>
        `
      },
      {
        id: 'opt-share-pwd',
        value: 'Post it in Game Chat for Free Coins 🎮',
        sublabel: 'A common online phishing trap',
        isCorrect: false,
        graphic: `
          <svg viewBox="0 0 80 80" width="60" height="60">
            <circle cx="40" cy="40" r="24" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/>
            <line x1="28" y1="28" x2="52" y2="52" stroke="#E98B73" stroke-width="3"/>
          </svg>
        `
      }
    ],
    feedbackCorrect: {
      title: 'Cyber Shield Activated! Keep your keys private! 🛡️',
      explanation: 'Real games and trusted platforms will never ask for your password in chat. Only trusted parents or guardians should know your login keys!'
    },
    feedbackIncorrect: {
      title: 'Warning: That is an online phishing trap!',
      explanation: 'Never share passwords or personal info in chatrooms. Scammers use free coin tricks to access accounts.'
    },
    nextConcept: 'Creating Strong Passphrases with Emoji Mnemonics'
  }
];

export function initQuizEngine() {
  let currentFilter = 'all';
  let filteredQuestions = [...quizQuestions];
  let currentQuestionIndex = 0;
  let currentStreak = 0;
  let totalScore = 0;

  // DOM Elements
  const themePillsContainer = document.querySelector('.quiz-theme-pills');
  const topicBadge = document.querySelector('.quiz-topic-badge');
  const difficultyBadge = document.querySelector('.quiz-difficulty-badge');
  const questionNumText = document.querySelector('.quiz-question-num');
  const questionTitle = document.querySelector('.quiz-question-title');
  const optionsContainer = document.querySelector('.quiz-options-container');
  const feedbackBox = document.querySelector('.quiz-feedback-box');
  const feedbackIcon = document.querySelector('.feedback-icon');
  const feedbackTitle = document.querySelector('.feedback-title-text');
  const feedbackDesc = document.querySelector('.feedback-desc-text');
  const nextConceptBadge = document.querySelector('.feedback-next-concept');
  const streakText = document.querySelector('.quiz-streak-count');
  const prevBtn = document.querySelector('.quiz-prev-btn');
  const nextBtn = document.querySelector('.quiz-next-btn');
  const shuffleBtn = document.querySelector('.quiz-shuffle-btn');

  // Build Theme Filter Pills
  function renderThemePills() {
    if (!themePillsContainer) return;
    themePillsContainer.innerHTML = '';

    quizThemes.forEach(theme => {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = `quiz-theme-pill ${theme.id === currentFilter ? 'active' : ''}`;
      pill.innerHTML = `<span>${theme.icon}</span> ${theme.name.replace(/^..\s/, '')}`;
      pill.dataset.theme = theme.id;

      pill.addEventListener('click', () => {
        currentFilter = theme.id;
        document.querySelectorAll('.quiz-theme-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        if (currentFilter === 'all') {
          filteredQuestions = [...quizQuestions];
        } else {
          filteredQuestions = quizQuestions.filter(q => q.theme === currentFilter);
        }

        currentQuestionIndex = 0;
        renderQuestion(currentQuestionIndex);
      });

      themePillsContainer.appendChild(pill);
    });
  }

  function renderQuestion(index) {
    if (filteredQuestions.length === 0) return;
    currentQuestionIndex = Math.max(0, Math.min(index, filteredQuestions.length - 1));
    const q = filteredQuestions[currentQuestionIndex];
    if (!q) return;

    if (topicBadge) topicBadge.innerHTML = `<span>${q.tag.split(' ')[0]}</span> ${q.topic}`;
    if (difficultyBadge) difficultyBadge.textContent = q.difficulty || 'Level 1: Foundation';
    if (questionNumText) questionNumText.textContent = `Question ${currentQuestionIndex + 1} of ${filteredQuestions.length}`;
    if (questionTitle) questionTitle.textContent = q.question;

    // Reset feedback
    if (feedbackBox) {
      feedbackBox.classList.remove('show', 'feedback-correct', 'feedback-incorrect');
    }

    // Render interactive choices
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
      b.style.pointerEvents = 'none';
    });

    if (isCorrect) {
      currentStreak++;
      totalScore += 100;
      selectedBtn.classList.add('state-correct');
      if (streakText) streakText.textContent = `${currentStreak}🔥`;

      if (feedbackBox) {
        feedbackBox.className = 'quiz-feedback-box show feedback-correct';
        if (feedbackIcon) feedbackIcon.textContent = '🌟';
        if (feedbackTitle) feedbackTitle.textContent = question.feedbackCorrect.title;
        if (feedbackDesc) feedbackDesc.textContent = question.feedbackCorrect.explanation;
        if (nextConceptBadge) nextConceptBadge.innerHTML = `<strong>Next Adaptive Step:</strong> ${question.nextConcept}`;
      }
    } else {
      currentStreak = 0;
      selectedBtn.classList.add('state-incorrect');
      if (streakText) streakText.textContent = `0🔥`;

      if (feedbackBox) {
        feedbackBox.className = 'quiz-feedback-box show feedback-incorrect';
        if (feedbackIcon) feedbackIcon.textContent = '💡';
        if (feedbackTitle) feedbackTitle.textContent = question.feedbackIncorrect.title;
        if (feedbackDesc) feedbackDesc.textContent = question.feedbackIncorrect.explanation;
        if (nextConceptBadge) nextConceptBadge.innerHTML = `<strong>Guiding Concept:</strong> ${question.nextConcept}`;
      }
    }
  }

  // Navigation handlers
  nextBtn?.addEventListener('click', () => {
    const nextIdx = (currentQuestionIndex + 1) % filteredQuestions.length;
    renderQuestion(nextIdx);
  });

  prevBtn?.addEventListener('click', () => {
    const prevIdx = (currentQuestionIndex - 1 + filteredQuestions.length) % filteredQuestions.length;
    renderQuestion(prevIdx);
  });

  shuffleBtn?.addEventListener('click', () => {
    const randomIdx = Math.floor(Math.random() * filteredQuestions.length);
    renderQuestion(randomIdx);
  });

  // Hero section quiz options handler
  const heroOpts = document.querySelectorAll('.quiz-hero-opt');
  heroOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      heroOpts.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // Initialize
  renderThemePills();
  renderQuestion(0);
}
