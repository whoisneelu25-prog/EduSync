// Adaptive Quiz Engine with 60 Multi-Thematic Questions (10 per theme)

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
  // ==========================================
  // 1. NUTRITION & HEALTHY HABITS (10 Questions)
  // ==========================================
  {
    id: 'nut-01',
    theme: 'nutrition',
    topic: 'Citrus & Vitamins',
    tag: '🍊 Vitamin C',
    difficulty: 'Level 1: Foundation',
    question: 'Which of these is packed with natural Vitamin C to protect your immune system?',
    options: [
      {
        id: 'opt-orange',
        value: 'Fresh Orange 🍊',
        sublabel: 'Grows on citrus trees in sunny groves',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="28" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/><circle cx="40" cy="40" r="20" fill="#F4C95D" opacity="0.9"/><path d="M 40 14 Q 46 10 50 14" stroke="#4FA6A0" stroke-width="3" fill="none"/></svg>`
      },
      {
        id: 'opt-cookie',
        value: 'Chocolate Cookie 🍪',
        sublabel: 'A baked sweet snack with processed sugars',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><circle cx="32" cy="34" r="3" fill="#D46F55"/><circle cx="46" cy="38" r="3" fill="#D46F55"/><circle cx="38" cy="48" r="3" fill="#D46F55"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Super Job! Oranges are Citrus Superstars! 🍊',
      explanation: 'Oranges are bursting with natural Vitamin C, which helps white blood cells guard your body against colds!'
    },
    feedbackIncorrect: {
      title: 'Cookies are sweet treats, but lack essential vitamins!',
      explanation: 'Fruits grow on plants and flowers in nature. Oranges give your body natural energy and fiber!'
    },
    nextConcept: 'Spotting Berries vs Citrus Fruits'
  },
  {
    id: 'nut-02',
    theme: 'nutrition',
    topic: 'Hydration',
    tag: '🍉 Hydration Power',
    difficulty: 'Level 1: Foundation',
    question: 'Which fruit is over 90% water and has a crisp green rind with red juicy flesh?',
    options: [
      {
        id: 'opt-watermelon',
        value: 'Watermelon 🍉',
        sublabel: '92% pure hydrating water and electrolytes',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 15 50 A 25 25 0 0 0 65 50 Z" fill="#E98B73" stroke="#4FA6A0" stroke-width="3.5"/><circle cx="30" cy="45" r="2" fill="#17212B"/><circle cx="40" cy="42" r="2" fill="#17212B"/><circle cx="50" cy="45" r="2" fill="#17212B"/></svg>`
      },
      {
        id: 'opt-banana',
        value: 'Banana 🍌',
        sublabel: 'Rich in potassium and gentle starch',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 25 25 Q 55 35 45 65" stroke="#F4C95D" stroke-width="7" stroke-linecap="round" fill="none"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Spot on! Watermelon is nature’s water bottle! 🍉',
      explanation: 'Watermelon is 92% pure water packed with lycopene, making it the perfect hydrating snack after outdoor play!'
    },
    feedbackIncorrect: {
      title: 'Good guess, but bananas are denser!',
      explanation: 'Watermelon has the highest water content of almost any fruit, which is how it got its name!'
    },
    nextConcept: 'How Plants Store Water in Fruits'
  },
  {
    id: 'nut-03',
    theme: 'nutrition',
    topic: 'Antioxidants',
    tag: '🫐 Brain Berries',
    difficulty: 'Level 2: Reasoning',
    question: 'Why are blueberries celebrated as a "brain superfood"?',
    options: [
      {
        id: 'opt-antho',
        value: 'Anthocyanin Antioxidants 🫐',
        sublabel: 'Natural pigments that protect memory and focus',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="32" cy="45" r="14" fill="#23486C" stroke="#4FA6A0" stroke-width="2"/><circle cx="48" cy="38" r="16" fill="#17324D" stroke="#F4C95D" stroke-width="2"/></svg>`
      },
      {
        id: 'opt-caffeine',
        value: 'High Caffeine Levels ☕',
        sublabel: 'Chemical stimulant found in coffee beans',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="30" width="30" height="25" rx="4" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/><path d="M 55 35 Q 65 42 55 50" stroke="#E98B73" stroke-width="2" fill="none"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Brilliant! Deep blue pigments protect brain cells! 🌟',
      explanation: 'Blueberries produce anthocyanins to guard themselves against harsh sun rays, which sharpen memory and brain cells in kids!'
    },
    feedbackIncorrect: {
      title: 'Berries have ZERO caffeine!',
      explanation: 'Fresh blueberries give clean, natural brainpower through vitamins and antioxidants, not stimulants.'
    },
    nextConcept: 'Rainbow Plate Nutrition'
  },
  {
    id: 'nut-04',
    theme: 'nutrition',
    topic: 'Apple Facts',
    tag: '🍎 Fruit Anatomy',
    difficulty: 'Level 1: Foundation',
    question: 'Why do fresh apples float when placed in a bucket of water?',
    options: [
      {
        id: 'opt-air',
        value: '25% of their Volume is Air 💨',
        sublabel: 'Pockets of air inside make them less dense than water',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><path d="M 40 16 L 40 10" stroke="#4FA6A0" stroke-width="3"/><path d="M 40 12 Q 48 10 46 16" fill="#4FA6A0"/></svg>`
      },
      {
        id: 'opt-plastic',
        value: 'They have Plastic Coating 🧪',
        sublabel: 'Artificial lightweight shell',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="25" width="30" height="30" rx="6" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Float Master! Apples are 25% air! 🍎',
      explanation: 'Apples have tiny air pockets between their cells that make them buoyant, which is why apple-bobbing games work!'
    },
    feedbackIncorrect: {
      title: 'Real apples grow purely from apple tree blossoms!',
      explanation: 'Natural density and trapped air pockets inside the apple flesh keep it floating effortlessly on water.'
    },
    nextConcept: 'Density and Buoyancy in Nature'
  },
  {
    id: 'nut-05',
    theme: 'nutrition',
    topic: 'Potassium & Muscles',
    tag: '🍌 Muscle Fuel',
    difficulty: 'Level 2: Reasoning',
    question: 'Why do young athletes and runners eat bananas before a race?',
    options: [
      {
        id: 'opt-potassium',
        value: 'Potassium & Quick Energy ⚡',
        sublabel: 'Prevents muscle cramps and fuels stamina',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 22 28 Q 58 38 46 68" stroke="#F4C95D" stroke-width="8" stroke-linecap="round" fill="none"/><circle cx="56" cy="28" r="4" fill="#E98B73"/></svg>`
      },
      {
        id: 'opt-salt',
        value: 'High Table Salt Content 🧂',
        sublabel: 'Excessive sodium minerals',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="28" y="28" width="24" height="32" rx="4" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Champion Choice! Potassium keeps muscles cramp-free! 🏃',
      explanation: 'Bananas deliver easily digestible natural fruit sugars for instant speed, plus potassium to keep legs running smoothly!'
    },
    feedbackIncorrect: {
      title: 'Bananas are naturally very low in sodium!',
      explanation: 'It is potassium and healthy natural carbohydrates that give athletes reliable athletic fuel.'
    },
    nextConcept: 'Electrolytes and Muscle Health'
  },
  {
    id: 'nut-06',
    theme: 'nutrition',
    topic: 'Eye Health',
    tag: '🥕 Beta-Carotene',
    difficulty: 'Level 1: Foundation',
    question: 'Which crunchy orange root vegetable is famous for boosting night vision health?',
    options: [
      {
        id: 'opt-carrot',
        value: 'Carrots 🥕',
        sublabel: 'Packed with Beta-Carotene & Vitamin A',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><polygon points="40,65 30,25 50,25" fill="#E98B73"/><path d="M 40 25 L 35 15 M 40 25 L 45 15" stroke="#4FA6A0" stroke-width="2"/></svg>`
      },
      {
        id: 'opt-marshmallow',
        value: 'Marshmallow 🍬',
        sublabel: 'Puffy sugar and corn syrup',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="30" width="30" height="24" rx="8" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Eagle Eyes! Carrots convert into Vitamin A! 🥕',
      explanation: 'Beta-carotene in carrots is transformed by your liver into Vitamin A, which helps eyes see clearly in dim light!'
    },
    feedbackIncorrect: {
      title: 'Marshmallows don’t have eye vitamins!',
      explanation: 'Bright orange veggies like carrots and sweet potatoes carry the essential carotenoids for eyesight.'
    },
    nextConcept: 'How the Retina Uses Vitamin A'
  },
  {
    id: 'nut-07',
    theme: 'nutrition',
    topic: 'Bone Strength',
    tag: '🥛 Calcium & D',
    difficulty: 'Level 2: Reasoning',
    question: 'Which duo of nutrients works as a team to build strong teeth and bones?',
    options: [
      {
        id: 'opt-calc-vitd',
        value: 'Calcium + Vitamin D ☀️',
        sublabel: 'Vitamin D helps your bones absorb the calcium',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 30 30 Q 40 20 50 30 Q 50 50 40 60 Q 30 50 30 30 Z" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/></svg>`
      },
      {
        id: 'opt-sugar-fizz',
        value: 'Soda Fizz + White Sugar 🥤',
        sublabel: 'Acidic carbonation and syrup',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="30" y="25" width="20" height="35" rx="4" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Strong Bones Champion! Team Calcium + Vitamin D! 🦴',
      explanation: 'Calcium is the building block for hard bones, and Vitamin D (from sunshine & milk) acts as the key to absorb it!'
    },
    feedbackIncorrect: {
      title: 'Soda acids actually leach minerals from teeth!',
      explanation: 'Bones need mineral-dense foods like leafy greens, yogurt, and sunshine to stay unbreakable.'
    },
    nextConcept: 'How Sun Exposure Makes Vitamin D'
  },
  {
    id: 'nut-08',
    theme: 'nutrition',
    topic: 'Botanical Mysteries',
    tag: '🥑 Fruit or Veggie?',
    difficulty: 'Level 2: Reasoning',
    question: 'Botanically speaking, why is an AVOCADO classified as a single-seeded FRUIT?',
    options: [
      {
        id: 'opt-berry',
        value: 'It Grows from a Flower & Has a Seed 🥑',
        sublabel: 'It is scientifically a giant single-seed berry',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><ellipse cx="40" cy="42" rx="20" ry="26" fill="#4FA6A0" opacity="0.8"/><circle cx="40" cy="46" r="10" fill="#17324D"/></svg>`
      },
      {
        id: 'opt-root',
        value: 'It Grows Underground like a Potato 🥔',
        sublabel: 'A starchy underground tuber root',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><ellipse cx="40" cy="40" rx="22" ry="16" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Botanist Discovery! Avocados are giant berries! 🥑',
      explanation: 'Any plant part that develops from a flower and encloses a seed is scientifically a fruit — even savory avocados and tomatoes!'
    },
    feedbackIncorrect: {
      title: 'Avocados grow high up on warm tropical trees!',
      explanation: 'Because it contains a central seed and originates from blossoms, science classifies avocado as a fruit.'
    },
    nextConcept: 'Botanical Fruits vs Culinary Vegetables'
  },
  {
    id: 'nut-09',
    theme: 'nutrition',
    topic: 'Healthy Digestion',
    tag: '🌾 Fiber Power',
    difficulty: 'Level 2: Reasoning',
    question: 'What is the superpower of DIETARY FIBER found in whole grains and apples?',
    options: [
      {
        id: 'opt-fiber',
        value: 'Keeps Tummy Healthy & Digestion Smooth 🌾',
        sublabel: 'Feeds friendly gut microbes and prevents sluggishness',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 25 55 Q 40 25 55 55" stroke="#4FA6A0" stroke-width="4" fill="none"/><circle cx="40" cy="38" r="4" fill="#F4C95D"/></svg>`
      },
      {
        id: 'opt-sleep',
        value: 'Puts You Directly to Sleep Instantly 😴',
        sublabel: 'Acts as a nighttime sedative',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="22" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Gut Health Hero! Fiber keeps energy steady! 🌾',
      explanation: 'Fiber works like a gentle brush inside your digestive tract, keeping tummies happy and energy released evenly without crashes!'
    },
    feedbackIncorrect: {
      title: 'Fiber fuels daytime play and digestion!',
      explanation: 'Fiber acts as food for healthy gut bacteria and regulates how your body absorbs sugars.'
    },
    nextConcept: 'Whole Grains vs Refined Carbohydrates'
  },
  {
    id: 'nut-10',
    theme: 'nutrition',
    topic: 'Daily Hydration Habit',
    tag: '💧 Pure Water',
    difficulty: 'Level 1: Foundation',
    question: 'What is the very best drink to refuel your body when you feel thirsty after playing?',
    options: [
      {
        id: 'opt-water',
        value: 'Crisp, Pure Water 💧',
        sublabel: 'Zero sugar, 100% cellular hydration',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 40 18 C 30 35 22 45 22 55 C 22 65 30 70 40 70 C 50 70 58 65 58 55 C 58 45 50 35 40 18 Z" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/></svg>`
      },
      {
        id: 'opt-energy-drink',
        value: 'Sugary Energy Can 🥫',
        sublabel: 'Artificial chemicals that cause energy crashes',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="30" y="24" width="20" height="36" rx="4" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Hydration Gold! Pure water powers all 37 trillion cells! 💧',
      explanation: 'Your brain and muscles are mostly water. Drinking fresh water keeps your brain sharp and muscles energized without sugar crashes!'
    },
    feedbackIncorrect: {
      title: 'Energy cans contain harmful stimulants for kids!',
      explanation: 'Pure water is nature’s perfect fuel for healthy, growing children.'
    },
    nextConcept: 'Listening to Your Body’s Thirst Signals'
  },

  // ==========================================
  // 2. MATH, FRACTIONS & GEOMETRY (10 Questions)
  // ==========================================
  {
    id: 'math-01',
    theme: 'math',
    topic: 'Fractions Basics',
    tag: '🍕 Half vs Quarter',
    difficulty: 'Level 1: Foundation',
    question: 'Which fraction represents a larger piece of the same pizza?',
    options: [
      {
        id: 'opt-half',
        value: '1/2 (One Half) 🍕',
        sublabel: 'Divided into 2 big equal pieces',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="32" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/><path d="M 40 40 L 40 8 A 32 32 0 0 1 40 72 Z" fill="#4FA6A0"/></svg>`
      },
      {
        id: 'opt-quarter',
        value: '1/4 (One Quarter) 🍕',
        sublabel: 'Divided into 4 smaller equal pieces',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="32" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><path d="M 40 40 L 40 8 A 32 32 0 0 1 72 40 Z" fill="#E98B73"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Math Insight! 1/2 is twice as big as 1/4! 🍕',
      explanation: 'When you divide into fewer pieces (2), each slice is much larger than dividing into more pieces (4)!'
    },
    feedbackIncorrect: {
      title: 'Remember: More slices = smaller pieces!',
      explanation: 'Even though 4 is a bigger number than 2, the fraction 1/4 means sharing between 4 friends, so each gets a smaller slice.'
    },
    nextConcept: 'Equivalent Fractions (2/4 = 1/2)'
  },
  {
    id: 'math-02',
    theme: 'math',
    topic: 'Equivalent Fractions',
    tag: '🥧 Twin Fractions',
    difficulty: 'Level 2: Reasoning',
    question: 'If you eat 2 slices of a 4-slice pie (2/4), what fraction have you eaten?',
    options: [
      {
        id: 'opt-m-half',
        value: '1/2 of the Pie 🥧',
        sublabel: 'Two quarters make exactly one whole half',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="30" fill="#FEF8E7" stroke="#4FA6A0" stroke-width="2.5"/><path d="M 40 40 L 40 10 A 30 30 0 0 1 40 70 Z" fill="#F4C95D"/></svg>`
      },
      {
        id: 'opt-m-three',
        value: '3/4 of the Pie 🥧',
        sublabel: 'Three quarters of the whole pie',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="30" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><path d="M 40 40 L 40 10 A 30 30 0 1 1 10 40 Z" fill="#E98B73"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Fraction Master! 2/4 and 1/2 are identical twins! 🌟',
      explanation: 'When you simplify 2/4 by dividing both numbers by 2, you get 1/2. They cover the exact same amount!'
    },
    feedbackIncorrect: {
      title: '3/4 would leave only 1 piece!',
      explanation: '2 out of 4 pieces takes up exactly half the circle.'
    },
    nextConcept: 'Simplifying Common Fractions'
  },
  {
    id: 'math-03',
    theme: 'math',
    topic: 'Angles Classification',
    tag: '📐 Acute vs Obtuse',
    difficulty: 'Level 2: Reasoning',
    question: 'An angle that opens SHARPER than a 90° square corner (like 45°) is called:',
    options: [
      {
        id: 'opt-acute',
        value: 'Acute Angle (<90°) 📐',
        sublabel: 'Sharp, narrow, and acute',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 15 65 L 65 65 M 15 65 L 50 30" stroke="#4FA6A0" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M 35 65 A 20 20 0 0 0 30 50" fill="none" stroke="#F4C95D" stroke-width="2"/></svg>`
      },
      {
        id: 'opt-obtuse',
        value: 'Obtuse Angle (>90°) 📐',
        sublabel: 'Wide, open wider than a door corner',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 35 65 L 75 65 M 35 65 L 10 30" stroke="#E98B73" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M 50 65 A 15 15 0 0 0 25 50" fill="none" stroke="#F4C95D" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Spot on! Acute angles are sharp and narrow! 📐',
      explanation: 'Any angle between 0° and 89° is acute. A right angle is exactly 90°, and anything wider is obtuse!'
    },
    feedbackIncorrect: {
      title: 'Obtuse angles are wide and open past 90°!',
      explanation: 'Think of "a cute" small puppy — acute angles are narrow and smaller than a square corner.'
    },
    nextConcept: 'Measuring with a Virtual Protractor'
  },
  {
    id: 'math-04',
    theme: 'math',
    topic: 'Perimeter vs Area',
    tag: '📏 Geometry Boundary',
    difficulty: 'Level 2: Reasoning',
    question: 'To find the total fence length around a rectangular garden, what do you calculate?',
    options: [
      {
        id: 'opt-perimeter',
        value: 'Perimeter (Distance Around) 🏡',
        sublabel: 'Add the lengths of all 4 outer border sides',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="18" y="24" width="44" height="32" fill="none" stroke="#4FA6A0" stroke-width="3.5" stroke-dasharray="4,2"/></svg>`
      },
      {
        id: 'opt-area',
        value: 'Area (Inside Surface) 🌱',
        sublabel: 'Multiply length by width for tile count',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="18" y="24" width="44" height="32" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Fence Master! Perimeter is the boundary walk! 🏡',
      explanation: 'Perimeter is the rim distance around the outside (Side + Side + Side + Side). Area is the grass inside!'
    },
    feedbackIncorrect: {
      title: 'Area measures the inside space, not the fence!',
      explanation: 'When building fences or borders, you need the perimeter (sum of outer edges).'
    },
    nextConcept: 'Calculating Area with Square Units'
  },
  {
    id: 'math-05',
    theme: 'math',
    topic: 'Multiplication Patterns',
    tag: '⚡ Multiplication',
    difficulty: 'Level 1: Foundation',
    question: 'What is 7 × 8?',
    options: [
      {
        id: 'opt-56',
        value: '56 🌟',
        sublabel: '5, 6, 7, 8 pattern (56 = 7 × 8)',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="28" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/><text x="40" y="47" font-size="18" font-weight="bold" fill="#17324D" text-anchor="middle">56</text></svg>`
      },
      {
        id: 'opt-54',
        value: '54 🔢',
        sublabel: 'Result of 6 × 9',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="28" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><text x="40" y="47" font-size="18" font-weight="bold" fill="#D46F55" text-anchor="middle">54</text></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Math Whiz! 56 = 7 × 8! 🌟',
      explanation: 'A fun memory trick: "5, 6, 7, 8" ➔ 56 = 7 × 8!'
    },
    feedbackIncorrect: {
      title: '54 is 6 × 9 or 9 × 6!',
      explanation: '7 groups of 8 equals 56. Keep practicing the 7s and 8s tables!'
    },
    nextConcept: 'Mental Math Shortcuts for 9s'
  },
  {
    id: 'math-06',
    theme: 'math',
    topic: '3D Geometry',
    tag: '🧊 Faces & Vertices',
    difficulty: 'Level 2: Reasoning',
    question: 'How many flat square faces does a standard cube have?',
    options: [
      {
        id: 'opt-6faces',
        value: '6 Square Faces 🎲',
        sublabel: 'Top, bottom, front, back, left, right',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="22" y="26" width="30" height="30" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2"/><polygon points="22,26 34,16 64,16 52,26" fill="#4FA6A0" opacity="0.3"/><polygon points="52,26 64,16 64,46 52,56" fill="#4FA6A0" opacity="0.5"/></svg>`
      },
      {
        id: 'opt-8faces',
        value: '8 Faces 🎲',
        sublabel: 'Confusing faces with the 8 corner vertices',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="25" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Cube Explorer! Exactly 6 flat faces! 🎲',
      explanation: 'Think of a playing die numbered 1 through 6 — each number sits on one of the 6 flat square faces!'
    },
    feedbackIncorrect: {
      title: '8 is the count of corner points (vertices)!',
      explanation: 'A cube has 6 flat faces, 8 corners (vertices), and 12 straight edges.'
    },
    nextConcept: 'Euler’s Formula: Faces + Vertices - Edges'
  },
  {
    id: 'math-07',
    theme: 'math',
    topic: 'Prime Numbers',
    tag: '🔍 Prime Discovery',
    difficulty: 'Level 3: Mastery',
    question: 'Which of these numbers is a PRIME NUMBER (only divisible by 1 and itself)?',
    options: [
      {
        id: 'opt-13',
        value: '13 🛡️',
        sublabel: 'Cannot be broken into equal smaller factor groups',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FEF8E7" stroke="#4FA6A0" stroke-width="2.5"/><text x="40" y="47" font-size="18" font-weight="bold" fill="#17324D" text-anchor="middle">13</text></svg>`
      },
      {
        id: 'opt-15',
        value: '15 🧩',
        sublabel: 'Composite number: 3 × 5 = 15',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><text x="40" y="47" font-size="18" font-weight="bold" fill="#D46F55" text-anchor="middle">15</text></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Prime Detective! 13 is strictly indivisible! 🛡️',
      explanation: '13 cannot be split evenly by 2, 3, 4, 5, or anything except 1 and 13. That makes it a pure Prime Number!'
    },
    feedbackIncorrect: {
      title: '15 can be factored into 3 × 5!',
      explanation: 'Composite numbers have multiple factors. Prime numbers only have factors of 1 and themselves.'
    },
    nextConcept: 'Sieve of Eratosthenes'
  },
  {
    id: 'math-08',
    theme: 'math',
    topic: 'Percentages',
    tag: '📊 100-Grid Math',
    difficulty: 'Level 2: Reasoning',
    question: 'What is 50% written as a simplified fraction?',
    options: [
      {
        id: 'opt-p-half',
        value: '1/2 📊',
        sublabel: '50 out of 100 parts = One half',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="28" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/><text x="40" y="46" font-size="16" font-weight="bold" fill="#17324D" text-anchor="middle">1/2</text></svg>`
      },
      {
        id: 'opt-p-five',
        value: '1/5 📊',
        sublabel: 'That equals 20%, not 50%',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="28" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><text x="40" y="46" font-size="16" font-weight="bold" fill="#D46F55" text-anchor="middle">1/5</text></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Percent Pro! 50% means exactly half of 100%! 📊',
      explanation: 'Percent means "per hundred". 50/100 simplifies directly to 1/2.'
    },
    feedbackIncorrect: {
      title: '1/5 is 20 out of 100 (20%)!',
      explanation: '50% cuts anything straight down the middle in half (1/2).'
    },
    nextConcept: 'Converting Fractions to Decimals & Percents'
  },
  {
    id: 'math-09',
    theme: 'math',
    topic: 'Negative Numbers',
    tag: '❄️ Number Line',
    difficulty: 'Level 2: Reasoning',
    question: 'On a freezing winter thermometer, which temperature is COLDER?',
    options: [
      {
        id: 'opt-minus-10',
        value: '-10°C ❄️',
        sublabel: 'Ten degrees below freezing point zero',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="34" y="16" width="12" height="48" rx="6" fill="#23486C"/><circle cx="40" cy="58" r="10" fill="#4FA6A0"/></svg>`
      },
      {
        id: 'opt-minus-2',
        value: '-2°C 🧊',
        sublabel: 'Only two degrees below zero',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="34" y="16" width="12" height="48" rx="6" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Frost Master! -10°C is further down the scale! ❄️',
      explanation: 'On the negative number line, the further left you go from zero (-10 < -2), the smaller (and colder!) the temperature!'
    },
    feedbackIncorrect: {
      title: '-2°C is warmer than -10°C!',
      explanation: 'With negative numbers, bigger numbers with a minus sign mean deeper cold below zero.'
    },
    nextConcept: 'Adding & Subtracting on the Number Line'
  },
  {
    id: 'math-10',
    theme: 'math',
    topic: 'Order of Operations',
    tag: '🧠 PEMDAS Rule',
    difficulty: 'Level 3: Mastery',
    question: 'What is the answer to: 3 + 4 × 2?',
    options: [
      {
        id: 'opt-11',
        value: '11 (Multiply First) 🎯',
        sublabel: '4 × 2 = 8, then 3 + 8 = 11',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/><text x="40" y="47" font-size="18" font-weight="bold" fill="#17324D" text-anchor="middle">11</text></svg>`
      },
      {
        id: 'opt-14',
        value: '14 (Added First) ⚠️',
        sublabel: 'Common trap: 3 + 4 = 7, 7 × 2 = 14',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><text x="40" y="47" font-size="18" font-weight="bold" fill="#D46F55" text-anchor="middle">14</text></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Operation Master! Multiplication takes priority! 🎯',
      explanation: 'According to math hierarchy (PEMDAS), you multiply 4 × 2 = 8 first, then add 3 to reach 11!'
    },
    feedbackIncorrect: {
      title: 'Watch out for order of operations!',
      explanation: 'Always do multiplication and division before addition and subtraction unless parentheses dictate otherwise.'
    },
    nextConcept: 'Using Parentheses to Change Equations'
  },

  // ==========================================
  // 3. GRAMMAR, VOCABULARY & LANGUAGE (10 Questions)
  // ==========================================
  {
    id: 'lang-01',
    theme: 'language',
    topic: 'Comparatives & Superlatives',
    tag: '📏 -ER vs -EST',
    difficulty: 'Level 1: Foundation',
    question: 'When comparing THREE pencils on a desk, the smallest one is the:',
    options: [
      {
        id: 'opt-shortest',
        value: 'Shortest 📏',
        sublabel: 'Superlative (-est) for 3 or more items',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="32" width="30" height="16" rx="4" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/><text x="40" y="44" fill="#3D8883" font-size="12" font-weight="bold" text-anchor="middle">-EST</text></svg>`
      },
      {
        id: 'opt-shorter',
        value: 'Shorter ✏️',
        sublabel: 'Comparative (-er) for only TWO items',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="18" y="32" width="44" height="16" rx="4" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><text x="40" y="44" fill="#D46F55" font-size="12" font-weight="bold" text-anchor="middle">-ER</text></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Bingo! -EST crowns the champion of 3+ items! 🌟',
      explanation: 'Comparing 2 items? Use -ER (shorter). Comparing 3 or more? Use -EST (shortest)!'
    },
    feedbackIncorrect: {
      title: '-ER is strictly for comparing two items!',
      explanation: 'Short (1) ➔ Shorter (2) ➔ Shortest (3 or more).'
    },
    nextConcept: 'Irregular Comparisons: Good ➔ Better ➔ Best'
  },
  {
    id: 'lang-02',
    theme: 'language',
    topic: 'Antonyms',
    tag: '🔄 Opposites',
    difficulty: 'Level 1: Foundation',
    question: 'What is the exact opposite (antonym) of the word "ANCIENT"?',
    options: [
      {
        id: 'opt-modern',
        value: 'Modern / Futuristic 🚀',
        sublabel: 'Belonging to the present or new era',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/><path d="M 30 40 L 50 40 M 40 30 L 50 40 L 40 50" stroke="#17324D" stroke-width="3" stroke-linecap="round"/></svg>`
      },
      {
        id: 'opt-antique',
        value: 'Antique / Vintage 🏺',
        sublabel: 'A synonym (similar meaning), not an opposite',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Antonym Ace! Ancient means old, Modern means now! 🏛️',
      explanation: 'Antonyms are direct opposites like hot/cold, bright/dark, and ancient/modern!'
    },
    feedbackIncorrect: {
      title: 'Antique means ancient (a synonym)!',
      explanation: 'Opposites reverse the meaning completely.'
    },
    nextConcept: 'Prefixes that Create Antonyms (Un-, Dis-, In-)'
  },
  {
    id: 'lang-03',
    theme: 'language',
    topic: 'Action Verbs',
    tag: '⚡ Parts of Speech',
    difficulty: 'Level 1: Foundation',
    question: 'In the sentence: "The dolphin leaped high into the air", which word is the VERB?',
    options: [
      {
        id: 'opt-leaped',
        value: 'Leaped 🐬',
        sublabel: 'The physical action movement taking place',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 18 50 Q 40 18 62 50" stroke="#4FA6A0" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="62" cy="50" r="4" fill="#4FA6A0"/></svg>`
      },
      {
        id: 'opt-dolphin',
        value: 'Dolphin 🌊',
        sublabel: 'The noun (the creature performing the action)',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="24" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/><text x="40" y="45" font-size="10" font-weight="bold" fill="#17324D" text-anchor="middle">NOUN</text></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Action Detected! Leaped is the energetic verb! ⚡',
      explanation: 'Dolphin is the naming noun, and Leaped is the action verb showing what happened!'
    },
    feedbackIncorrect: {
      title: 'Dolphin is a Noun (the animal)!',
      explanation: 'Verbs describe actions like running, jumping, leaping, and swimming.'
    },
    nextConcept: 'Linking Verbs vs Action Verbs'
  },
  {
    id: 'lang-04',
    theme: 'language',
    topic: 'Homophones',
    tag: '🎧 Sound-Alike Words',
    difficulty: 'Level 2: Reasoning',
    question: 'Which word correctly completes: "The bird flew over ______ nest"?',
    options: [
      {
        id: 'opt-their',
        value: 'Their (Possessive) 🪺',
        sublabel: 'Belonging to them / the birds',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/><text x="40" y="45" font-size="12" font-weight="bold" fill="#17324D" text-anchor="middle">THEIR</text></svg>`
      },
      {
        id: 'opt-there',
        value: 'There (Location) 📍',
        sublabel: 'Pointing to a place or direction',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><text x="40" y="45" font-size="12" font-weight="bold" fill="#D46F55" text-anchor="middle">THERE</text></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Homophone Hero! Their shows ownership! 🪺',
      explanation: 'Their = belonging to them. There = a place. They’re = they are!'
    },
    feedbackIncorrect: {
      title: 'There refers to a place (like over there)!',
      explanation: 'Because the nest belongs to the birds, we use the possessive "their".'
    },
    nextConcept: 'To, Too, and Two Mastery'
  },
  {
    id: 'lang-05',
    theme: 'language',
    topic: 'Compound Words',
    tag: '🧩 Word Puzzles',
    difficulty: 'Level 1: Foundation',
    question: 'Which of these is a true COMPOUND WORD made of two standalone words?',
    options: [
      {
        id: 'opt-sunflower',
        value: 'Sunflower 🌻',
        sublabel: 'Sun + Flower joined into one new word',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="14" fill="#17324D"/><circle cx="40" cy="40" r="22" stroke="#F4C95D" stroke-width="6" fill="none"/></svg>`
      },
      {
        id: 'opt-happily',
        value: 'Happily 😊',
        sublabel: 'A base root word with suffix -ly',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Compound Crafter! Sun + Flower = Sunflower! 🌻',
      explanation: 'Compound words merge two complete words (Butter + Fly = Butterfly, Rain + Bow = Rainbow) into one!'
    },
    feedbackIncorrect: {
      title: '-ly is just a grammatical suffix!',
      explanation: 'Both pieces must be full words on their own to form a compound word.'
    },
    nextConcept: 'Closed, Hyphenated, and Open Compounds'
  },
  {
    id: 'lang-06',
    theme: 'language',
    topic: 'Figurative Language',
    tag: '🎭 Metaphors & Similes',
    difficulty: 'Level 2: Reasoning',
    question: 'In the sentence: "Her smile was AS BRIGHT AS the sun", what poetic device is used?',
    options: [
      {
        id: 'opt-simile',
        value: 'A Simile (uses "like" or "as") ☀️',
        sublabel: 'Explicitly comparing two things using "as"',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="18" fill="#F4C95D"/><path d="M 28 40 Q 40 52 52 40" stroke="#17324D" stroke-width="3" fill="none"/></svg>`
      },
      {
        id: 'opt-alliteration',
        value: 'An Alliteration 🅰️',
        sublabel: 'Repeating the same first letter sounds',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="24" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Poetry Pro! Similes compare using "like" or "as"! 🌟',
      explanation: 'Whenever you see "as busy as a bee" or "bright as the sun", you have spotted a simile!'
    },
    feedbackIncorrect: {
      title: 'Alliteration is tongue-twister sounds (Peter Piper)!',
      explanation: 'Direct comparisons using "like" or "as" are similes.'
    },
    nextConcept: 'Metaphors (Saying one thing IS another)'
  },
  {
    id: 'lang-07',
    theme: 'language',
    topic: 'Punctuation Marks',
    tag: '❓ Question Marks',
    difficulty: 'Level 1: Foundation',
    question: 'Which punctuation mark belongs at the end of: "Where did you hide the treasure map"',
    options: [
      {
        id: 'opt-qmark',
        value: 'Question Mark (?) 🗺️',
        sublabel: 'Because the sentence asks for information',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="28" fill="#FEF8E7" stroke="#4FA6A0" stroke-width="2.5"/><text x="40" y="50" font-size="28" font-weight="bold" fill="#17324D" text-anchor="middle">?</text></svg>`
      },
      {
        id: 'opt-period',
        value: 'Period (.) 🛑',
        sublabel: 'Used for declarative statements only',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="28" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><circle cx="40" cy="48" r="4" fill="#E98B73"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Punctuation Perfect! Questions need question marks! ❓',
      explanation: 'Sentences starting with Who, What, Where, When, Why, and How require a question mark at the end.'
    },
    feedbackIncorrect: {
      title: 'Periods end statements, not questions!',
      explanation: 'This sentence is an inquiry looking for an answer.'
    },
    nextConcept: 'Exclamation Marks for Strong Emotion'
  },
  {
    id: 'lang-08',
    theme: 'language',
    topic: 'Plural Nouns',
    tag: '🐺 Irregular Plurals',
    difficulty: 'Level 2: Reasoning',
    question: 'What is the correct plural form of the word "WOLF"?',
    options: [
      {
        id: 'opt-wolves',
        value: 'Wolves 🐺',
        sublabel: 'Nouns ending in -f change to -ves',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/><text x="40" y="45" font-size="12" font-weight="bold" fill="#17324D" text-anchor="middle">-VES</text></svg>`
      },
      {
        id: 'opt-wolfs',
        value: 'Wolfs 🚫',
        sublabel: 'An incorrect regular plural spelling',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><text x="40" y="45" font-size="12" font-weight="bold" fill="#D46F55" text-anchor="middle">-FS</text></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Spelling Scout! Leaf ➔ Leaves, Wolf ➔ Wolves! 🐺',
      explanation: 'Words ending in -f or -fe (like calf, leaf, knife, wolf) transform their ending into -ves in the plural!'
    },
    feedbackIncorrect: {
      title: 'Wolfs is a common spelling mistake!',
      explanation: 'The letter "f" softens into "v" before adding -es.'
    },
    nextConcept: 'Irregular Plurals (Child ➔ Children, Foot ➔ Feet)'
  },
  {
    id: 'lang-09',
    theme: 'language',
    topic: 'Prefixes',
    tag: '🔤 Re-, Pre-, Un-',
    difficulty: 'Level 2: Reasoning',
    question: 'What does the prefix "RE-" mean in words like REWRITE, REPLAY, and REBUILD?',
    options: [
      {
        id: 'opt-again',
        value: 'To Do Again / Once More 🔄',
        sublabel: 'Repeating an action back from the start',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/><path d="M 28 40 A 12 12 0 1 1 40 52" stroke="#17324D" stroke-width="3" fill="none"/></svg>`
      },
      {
        id: 'opt-never',
        value: 'To Never Do It ❌',
        sublabel: 'A negative prefix meaning not or opposite',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><line x1="28" y1="28" x2="52" y2="52" stroke="#E98B73" stroke-width="3"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Prefix Master! "Re-" means do it again! 🔄',
      explanation: 'Replay = play again. Rebuild = build again. Rewrite = write again!'
    },
    feedbackIncorrect: {
      title: 'Un- or Non- mean "not", but Re- means "again"!',
      explanation: 'Prefixes attach to the front of root words to modify their meaning.'
    },
    nextConcept: 'Suffixes that Change Parts of Speech (-ful, -less)'
  },
  {
    id: 'lang-10',
    theme: 'language',
    topic: 'Story Structure',
    tag: '📖 Narrative Arc',
    difficulty: 'Level 2: Reasoning',
    question: 'In an exciting story, the highest peak of suspense and drama is called the:',
    options: [
      {
        id: 'opt-climax',
        value: 'Climax (The Turning Point) ⚡',
        sublabel: 'The most thrilling confrontation before resolution',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 15 60 L 40 20 L 65 60" stroke="#4FA6A0" stroke-width="4" fill="none"/><circle cx="40" cy="20" r="5" fill="#F4C95D"/></svg>`
      },
      {
        id: 'opt-cover',
        value: 'Front Book Cover 📕',
        sublabel: 'The outside title page wrapper',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="20" width="30" height="40" rx="4" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Author Instincts! The Climax is the big peak! ⚡',
      explanation: 'Stories build up rising tension until they hit the Climax peak, after which problems get resolved!'
    },
    feedbackIncorrect: {
      title: 'The cover is just the outer wrapper!',
      explanation: 'In narrative architecture, the Climax is the ultimate showdown or dramatic breakthrough.'
    },
    nextConcept: 'Story Resolution and Character Arcs'
  },

  // ==========================================
  // 4. PHYSICS, SPACE & EARTH (10 Questions)
  // ==========================================
  {
    id: 'phys-01',
    theme: 'physics',
    topic: 'Gravity on the Moon',
    tag: '🌕 Moon Physics',
    difficulty: 'Level 1: Foundation',
    question: 'Why can astronauts jump 6 times higher on the Moon than on Earth?',
    options: [
      {
        id: 'opt-moon-mass',
        value: 'The Moon has Less Mass & Gravity 🌕',
        sublabel: 'Only 1/6th of Earth’s gravitational force pull',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#17324D" stroke="#F4C95D" stroke-width="2"/><circle cx="40" cy="24" r="6" fill="#4FA6A0"/><path d="M 40 30 L 40 45 M 34 38 L 46 38" stroke="#4FA6A0" stroke-width="2"/></svg>`
      },
      {
        id: 'opt-springs',
        value: 'They Wear Mechanical Spring Boots 🥾',
        sublabel: 'Built-in motorized jumping coils',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="30" width="30" height="20" rx="4" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Gravity Master! Less mass = gentle gravitational pull! 🚀',
      explanation: 'Because the Moon has only 1.2% of Earth’s mass, its gravity is much weaker, letting you leap high into the black sky!'
    },
    feedbackIncorrect: {
      title: 'Astronaut boots are actually very heavy lead-weighted boots!',
      explanation: 'It is the Moon’s celestial mass that dictates gravitational pull.'
    },
    nextConcept: 'How Orbits and Satellites Stay in Space'
  },
  {
    id: 'phys-02',
    theme: 'physics',
    topic: 'Optics & Shadows',
    tag: '☀️ Sun & Shadows',
    difficulty: 'Level 1: Foundation',
    question: 'At what time of day is your outdoor shadow the SHORTEST?',
    options: [
      {
        id: 'opt-noon',
        value: 'At Solar Noon (Midday) ☀️',
        sublabel: 'When the sun is shining directly overhead',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="20" r="10" fill="#F4C95D"/><line x1="40" y1="40" x2="40" y2="60" stroke="#17324D" stroke-width="3"/><ellipse cx="40" cy="62" rx="8" ry="3" fill="#64748B"/></svg>`
      },
      {
        id: 'opt-sunset',
        value: 'At Sunrise or Sunset 🌅',
        sublabel: 'When the sun is low along the horizon',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="15" cy="40" r="8" fill="#E98B73"/><line x1="40" y1="40" x2="40" y2="60" stroke="#17324D" stroke-width="3"/><ellipse cx="60" cy="62" rx="20" ry="3" fill="#64748B"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Sunlight Scientist! Overhead angles cast tiny shadows! ☀️',
      explanation: 'At midday when the Sun is at its highest celestial peak, rays come straight down, casting your shadow right under your shoes!'
    },
    feedbackIncorrect: {
      title: 'Sunsets cast the LONGEST stretched shadows!',
      explanation: 'Low-angle light rays stretch silhouettes far across the ground.'
    },
    nextConcept: 'How Ancient Sundials Told Time'
  },
  {
    id: 'phys-03',
    theme: 'physics',
    topic: 'Sound Waves',
    tag: '🔊 Sound Vibration',
    difficulty: 'Level 2: Reasoning',
    question: 'Why can sound NOT travel through the vacuum of outer space?',
    options: [
      {
        id: 'opt-no-air',
        value: 'There are No Air Particles to Vibrate 🚀',
        sublabel: 'Sound requires a medium (gas, liquid, or solid) to travel',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#17324D" stroke="#4FA6A0" stroke-width="2"/><circle cx="28" cy="34" r="2" fill="#FFFFFF"/><circle cx="52" cy="46" r="2" fill="#FFFFFF"/></svg>`
      },
      {
        id: 'opt-dark',
        value: 'Space is Too Dark for Sound 🌌',
        sublabel: 'Lack of visible light stops sound waves',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="25" width="30" height="30" rx="6" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Acoustics Ace! In space, no air means silent space! 🌌',
      explanation: 'Sound is kinetic mechanical vibration. Without atoms of air or water to bump against each other, sound waves cannot propagate!'
    },
    feedbackIncorrect: {
      title: 'Light travels without air, but sound MUST have particles!',
      explanation: 'Sound waves are physical air bumps. In a vacuum with no air molecules, silence is absolute.'
    },
    nextConcept: 'How Radio Waves Let Astronauts Talk in Space'
  },
  {
    id: 'phys-04',
    theme: 'physics',
    topic: 'Magnetism',
    tag: '🧲 Magnetic Poles',
    difficulty: 'Level 1: Foundation',
    question: 'What happens when you push TWO North Poles of magnets together?',
    options: [
      {
        id: 'opt-repel',
        value: 'They Repel (Push Away) 🧲',
        sublabel: 'Like magnetic poles always repel each other',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="15" y="32" width="22" height="16" fill="#E98B73"/><rect x="43" y="32" width="22" height="16" fill="#E98B73"/><text x="26" y="44" fill="#FFF" font-size="10" font-weight="bold">N</text><text x="54" y="44" fill="#FFF" font-size="10" font-weight="bold">N</text></svg>`
      },
      {
        id: 'opt-stick',
        value: 'They Snap & Stick Together 🧲',
        sublabel: 'Opposite poles attract, but not likes',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Magnet Magic! Like poles repel, opposites attract! 🧲',
      explanation: 'North pushes North away, South pushes South away. But North and South snap together in tight magnetic attraction!'
    },
    feedbackIncorrect: {
      title: 'Opposite poles stick (North + South), but like poles push away!',
      explanation: 'You can feel an invisible cushion of magnetic force pushing your hands apart.'
    },
    nextConcept: 'Earth’s Liquid Core and Magnetic Compass'
  },
  {
    id: 'phys-05',
    theme: 'physics',
    topic: 'Solar System',
    tag: '🪐 Giant Planets',
    difficulty: 'Level 1: Foundation',
    question: 'Which is the largest planet in our solar system, famous for its Great Red Spot?',
    options: [
      {
        id: 'opt-jupiter',
        value: 'Jupiter 🪐',
        sublabel: 'Gas giant over 1,300 times bigger than Earth',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="28" fill="#F4C95D" stroke="#17324D" stroke-width="2"/><ellipse cx="50" cy="46" rx="6" ry="4" fill="#E98B73"/></svg>`
      },
      {
        id: 'opt-mars',
        value: 'Mars (The Red Planet) 🔴',
        sublabel: 'A rocky desert planet half the size of Earth',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="16" fill="#E98B73" stroke="#D46F55" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Cosmic Giant! Jupiter is the king of planets! 🪐',
      explanation: 'Jupiter is so enormous that all other 7 planets in our solar system could easily fit inside it!'
    },
    feedbackIncorrect: {
      title: 'Mars is actually much smaller than Earth!',
      explanation: 'Mars is rusty red, but giant Jupiter hosts the massive centuries-old storm known as the Great Red Spot.'
    },
    nextConcept: 'The Asteroid Belt between Mars and Jupiter'
  },
  {
    id: 'phys-06',
    theme: 'physics',
    topic: 'States of Matter',
    tag: '💧 Ice, Water, Steam',
    difficulty: 'Level 1: Foundation',
    question: 'When liquid water boils in a kettle and turns into invisible steam gas, what is this called?',
    options: [
      {
        id: 'opt-evap',
        value: 'Evaporation / Boiling ♨️',
        sublabel: 'Liquid heating up into expanding gas molecules',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 28 55 Q 32 35 28 20 M 40 55 Q 44 35 40 20 M 52 55 Q 56 35 52 20" stroke="#4FA6A0" stroke-width="3" fill="none"/></svg>`
      },
      {
        id: 'opt-freeze',
        value: 'Freezing 🧊',
        sublabel: 'Liquid cooling into rigid solid ice',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="25" width="30" height="30" rx="4" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Matter Master! Heat turns liquid into gas steam! ♨️',
      explanation: 'Water molecules gain thermal energy, bounce rapidly apart, and float away into vapor gas!'
    },
    feedbackIncorrect: {
      title: 'Freezing occurs when temperatures drop below 0°C!',
      explanation: 'Boiling happens at 100°C when water evaporates into steam.'
    },
    nextConcept: 'Condensation (How Clouds Form from Steam)'
  },
  {
    id: 'phys-07',
    theme: 'physics',
    topic: 'Speed of Light vs Sound',
    tag: '⚡ Lightning & Thunder',
    difficulty: 'Level 2: Reasoning',
    question: 'During a thunderstorm, why do you see the lightning flash BEFORE hearing the thunder rumble?',
    options: [
      {
        id: 'opt-light-speed',
        value: 'Light Travels ~1,000,000× Faster than Sound ⚡',
        sublabel: 'Light travels at 300,000 km/s, sound at 0.34 km/s',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><polygon points="40,12 28,38 42,38 36,68 54,32 40,32" fill="#F4C95D"/></svg>`
      },
      {
        id: 'opt-thunder-wait',
        value: 'Thunder Waits for Lightning to Finish 🌩️',
        sublabel: 'A delay created inside cloud charges',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Relativity Whiz! Light reaches your eyes almost instantly! ⚡',
      explanation: 'Light covers a mile in 0.000005 seconds, but sound takes 5 whole seconds to travel just one single mile!'
    },
    feedbackIncorrect: {
      title: 'Both lightning and thunder happen at the exact same millisecond!',
      explanation: 'Because sound travels much slower through air, its sound waves arrive several seconds later.'
    },
    nextConcept: 'Counting Seconds to Estimate Storm Distance'
  },
  {
    id: 'phys-08',
    theme: 'physics',
    topic: 'Simple Machines',
    tag: '⚙️ Levers & Wheels',
    difficulty: 'Level 2: Reasoning',
    question: 'What simple machine does a playground seesaw represent?',
    options: [
      {
        id: 'opt-lever',
        value: 'A Lever with a Central Fulcrum ⚖️',
        sublabel: 'A rigid plank pivoting on a central pivot point',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><polygon points="40,45 32,65 48,65" fill="#17324D"/><line x1="16" y1="40" x2="64" y2="50" stroke="#F4C95D" stroke-width="4"/></svg>`
      },
      {
        id: 'opt-pulley',
        value: 'A Pulley Rope 🪢',
        sublabel: 'A grooved wheel holding a lifting cord',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="35" r="14" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Mechanical Genius! A seesaw is a classic Class-1 Lever! ⚖️',
      explanation: 'The balance point in the middle is the fulcrum, allowing two kids to lift each other with minimal effort!'
    },
    feedbackIncorrect: {
      title: 'Pulleys use ropes on spinning wheels (like flagpoles)!',
      explanation: 'A seesaw is a lever that pivots on a central fulcrum.'
    },
    nextConcept: 'Incline Planes (Ramps) and Mechanical Advantage'
  },
  {
    id: 'phys-09',
    theme: 'physics',
    topic: 'Electromagnetism & Rainbows',
    tag: '🌈 Prisms & Light',
    difficulty: 'Level 2: Reasoning',
    question: 'What happens when sunlight passes through a glass prism or a raindrop?',
    options: [
      {
        id: 'opt-refract',
        value: 'Bends & Splits into 7 Visible Rainbow Colors 🌈',
        sublabel: 'White light refracts into red, orange, yellow, green, blue, indigo, violet',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><polygon points="40,16 18,62 62,62" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2"/><path d="M 40 38 L 68 32 M 40 40 L 68 40 M 40 42 L 68 48" stroke="#F4C95D" stroke-width="2"/></svg>`
      },
      {
        id: 'opt-black',
        value: 'Turns Pitch Black and Disappears ⬛',
        sublabel: 'Absorbed into dark matter',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="25" width="30" height="30" rx="4" fill="#17212B"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Rainbow Architect! White light holds all 7 colors! 🌈',
      explanation: 'Raindrops act as millions of tiny optical prisms, bending different light wavelengths at different angles to paint the sky!'
    },
    feedbackIncorrect: {
      title: 'Prisms do not destroy light!',
      explanation: 'They refract and spread white light into its component ROYGBIV spectrum colors.'
    },
    nextConcept: 'Wavelengths and Infrared vs Ultraviolet'
  },
  {
    id: 'phys-10',
    theme: 'physics',
    topic: 'Renewable Energy',
    tag: '🌬️ Wind & Solar',
    difficulty: 'Level 1: Foundation',
    question: 'Which of these is a clean, infinite RENEWABLE energy source that never runs out?',
    options: [
      {
        id: 'opt-solar',
        value: 'Solar Sun Rays & Wind Power ☀️🌬️',
        sublabel: 'Natural energy replenished every single day',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="16" fill="#F4C95D"/><line x1="40" y1="12" x2="40" y2="20" stroke="#F4C95D" stroke-width="3"/><line x1="40" y1="60" x2="40" y2="68" stroke="#F4C95D" stroke-width="3"/><line x1="12" y1="40" x2="20" y2="40" stroke="#F4C95D" stroke-width="3"/><line x1="60" y1="40" x2="68" y2="40" stroke="#F4C95D" stroke-width="3"/></svg>`
      },
      {
        id: 'opt-coal',
        value: 'Burning Underground Coal Rocks 🪨',
        sublabel: 'Finite fossil fuel that releases smoke pollution',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="24" fill="#64748B"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Planet Protector! Solar and Wind power our green future! 🌿',
      explanation: 'The Sun shines billions of kilowatts of clean photon energy every second, keeping our Earth green without smoke pollution!'
    },
    feedbackIncorrect: {
      title: 'Coal takes millions of years to form and will run out!',
      explanation: 'Renewable energy comes from inexhaustible sources like wind, sun, and moving water.'
    },
    nextConcept: 'Photovoltaic Solar Cells'
  },

  // ==========================================
  // 5. NATURE, BIOLOGY & ECOLOGY (10 Questions)
  // ==========================================
  {
    id: 'nat-01',
    theme: 'nature',
    topic: 'Photosynthesis',
    tag: '🌿 Plant Power',
    difficulty: 'Level 1: Foundation',
    question: 'What gas do green plants absorb from the air to make their food during photosynthesis?',
    options: [
      {
        id: 'opt-co2',
        value: 'Carbon Dioxide (CO₂) 🍃',
        sublabel: 'Absorbed through microscopic leaf pores',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 40 60 C 20 40, 20 20, 40 10 C 60 20, 60 40, 40 60" fill="#4FA6A0" opacity="0.9"/><text x="40" y="42" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">CO₂</text></svg>`
      },
      {
        id: 'opt-helium',
        value: 'Helium Gas 🎈',
        sublabel: 'The light gas used to float party balloons',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="35" r="18" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/><line x1="40" y1="53" x2="40" y2="70" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Eco-Champion! Plants breathe in CO₂ and give us Oxygen! 🌿',
      explanation: 'Plants use green chlorophyll to trap photons, drink water, and absorb CO₂ to create glucose sugar food, releasing clean oxygen for us!'
    },
    feedbackIncorrect: {
      title: 'Helium is for party balloons!',
      explanation: 'Plants take in carbon dioxide (CO₂) that humans and animals breathe out, cleaning the air for our planet.'
    },
    nextConcept: 'The Oxygen-Carbon Dioxide Balance Cycle'
  },
  {
    id: 'nat-02',
    theme: 'nature',
    topic: 'Pollination',
    tag: '🐝 Honeybee Workers',
    difficulty: 'Level 1: Foundation',
    question: 'Why are honeybees and butterflies so crucial for growing apples, berries, and flowers?',
    options: [
      {
        id: 'opt-pollination',
        value: 'They Pollinate Flowers (Transfer Pollen) 🌸',
        sublabel: 'Allows blossoms to fertilize and grow into fruit',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="10" fill="#F4C95D"/><ellipse cx="40" cy="24" rx="6" ry="10" fill="#E98B73"/><ellipse cx="40" cy="56" rx="6" ry="10" fill="#E98B73"/><ellipse cx="24" cy="40" rx="10" ry="6" fill="#E98B73"/><ellipse cx="56" cy="40" rx="10" ry="6" fill="#E98B73"/></svg>`
      },
      {
        id: 'opt-paint',
        value: 'They Paint Petals with Paintbrushes 🎨',
        sublabel: 'Artificial coloration',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Pollinator Protector! 1 out of every 3 bites of food relies on bees! 🐝',
      explanation: 'As bees sip nectar, yellow pollen grains stick to their fuzzy legs and get carried to the next flower, allowing delicious fruit to form!'
    },
    feedbackIncorrect: {
      title: 'Petals get their vibrant colors naturally from plant pigments!',
      explanation: 'Bees are key agricultural pollinators that enable flowers to turn into fruits.'
    },
    nextConcept: 'How Honey is Made Inside the Hive'
  },
  {
    id: 'nat-03',
    theme: 'nature',
    topic: 'Camouflage',
    tag: '🦎 Animal Adaptation',
    difficulty: 'Level 2: Reasoning',
    question: 'Why do chameleons and arctic foxes change their skin or fur colors?',
    options: [
      {
        id: 'opt-camo',
        value: 'Camouflage to Blend into Surroundings 🌿',
        sublabel: 'Hides from predators and sneaks up on prey',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><ellipse cx="40" cy="40" rx="26" ry="16" fill="#4FA6A0" opacity="0.8"/><circle cx="56" cy="36" r="4" fill="#17324D"/></svg>`
      },
      {
        id: 'opt-fashion',
        value: 'To Win Forest Beauty Contests 🪞',
        sublabel: 'Decorative social competition',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Stealth Master! Camouflage is an evolutionary survival shield! 🦎',
      explanation: 'Arctic foxes turn snow-white in winter and earthy brown in summer so they blend seamlessly into the tundra terrain!'
    },
    feedbackIncorrect: {
      title: 'Animals adapt purely for survival and concealment!',
      explanation: 'Camouflage protects creatures from predators in their natural habitats.'
    },
    nextConcept: 'Mimicry: Harmless Animals Copying Toxic Ones'
  },
  {
    id: 'nat-04',
    theme: 'nature',
    topic: 'Ocean Habitats',
    tag: '🐠 Coral Reefs',
    difficulty: 'Level 2: Reasoning',
    question: 'What is a coral reef built by in warm shallow ocean waters?',
    options: [
      {
        id: 'opt-polyps',
        value: 'Millions of Tiny Living Coral Polyps 🪸',
        sublabel: 'Tiny sea animals that build limestone skeletons',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 25 60 Q 20 30 35 35 Q 40 15 50 30 Q 65 25 55 60 Z" fill="#E98B73" stroke="#D46F55" stroke-width="2"/></svg>`
      },
      {
        id: 'opt-plastic-sea',
        value: 'Submerged Concrete Blocks 🧱',
        sublabel: 'Man-made construction foundations',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="30" width="30" height="24" fill="#64748B"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Marine Biologist! Coral reefs are alive with billions of animals! 🪸',
      explanation: 'Corals are not rocks or plants — they are tiny marine animals called polyps that shelter 25% of all ocean life!'
    },
    feedbackIncorrect: {
      title: 'Natural coral reefs are 100% biological living colonies!',
      explanation: 'Polyps extract calcium from seawater to construct magnificent undersea kingdoms.'
    },
    nextConcept: 'Symbiosis Between Clownfish and Sea Anemones'
  },
  {
    id: 'nat-05',
    theme: 'nature',
    topic: 'Metamorphosis',
    tag: '🐛 Butterfly Life Cycle',
    difficulty: 'Level 1: Foundation',
    question: 'What is the protective shell called where a caterpillar transforms into a winged butterfly?',
    options: [
      {
        id: 'opt-chrysalis',
        value: 'Chrysalis / Cocoon 🦋',
        sublabel: 'The pupa stage of complete metamorphosis',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><ellipse cx="40" cy="40" rx="14" ry="24" fill="#4FA6A0" stroke="#17324D" stroke-width="2"/><line x1="40" y1="16" x2="40" y2="8" stroke="#17324D" stroke-width="3"/></svg>`
      },
      {
        id: 'opt-bird-egg',
        value: 'Bird Eggshell 🪺',
        sublabel: 'Hard calcium shell laid by avians',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="24" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Metamorphosis Magic! The Chrysalis transforms the pupa! 🦋',
      explanation: 'Inside the silky chrysalis, caterpillar cells rearrange into colorful fluttering butterfly wings!'
    },
    feedbackIncorrect: {
      title: 'Insects form their own silk chrysalis or pupa!',
      explanation: 'The 4 stages are: Egg ➔ Caterpillar (Larva) ➔ Chrysalis (Pupa) ➔ Adult Butterfly.'
    },
    nextConcept: 'Incomplete Metamorphosis (Grasshoppers & Crickets)'
  },
  {
    id: 'nat-06',
    theme: 'nature',
    topic: 'Tree Rings',
    tag: '🌲 Dendrochronology',
    difficulty: 'Level 2: Reasoning',
    question: 'What can scientists discover by counting the growth rings inside a fallen tree trunk?',
    options: [
      {
        id: 'opt-rings-age',
        value: 'The Exact Age & Past Climate Rainfall 🌲',
        sublabel: 'Each ring equals one year of seasonal growth',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="28" fill="#FEF8E7" stroke="#17324D" stroke-width="3"/><circle cx="40" cy="40" r="20" stroke="#17324D" stroke-width="2" fill="none"/><circle cx="40" cy="40" r="10" stroke="#17324D" stroke-width="2" fill="none"/></svg>`
      },
      {
        id: 'opt-how-tall',
        value: 'The Color of the Leaves in Spring 🍃',
        sublabel: 'Leaf pigment records',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Tree Time-Traveler! Wide rings mean rainy growth years! 🌲',
      explanation: 'Every year a tree adds a new light ring (spring) and dark ring (autumn). Wide rings show wet, healthy years, and narrow rings show droughts!'
    },
    feedbackIncorrect: {
      title: 'Rings record years and weather history, not leaf color!',
      explanation: 'Dendrochronology uses tree rings to study ancient climate records.'
    },
    nextConcept: 'Ancient Bristlecone Pines Over 4,000 Years Old'
  },
  {
    id: 'nat-07',
    theme: 'nature',
    topic: 'Mushroom Fungi',
    tag: '🍄 Nature’s Recyclers',
    difficulty: 'Level 2: Reasoning',
    question: 'Why are mushrooms classified as FUNGI and not as green plants?',
    options: [
      {
        id: 'opt-fungi',
        value: 'They Don’t Use Sunlight (No Chlorophyll) 🍄',
        sublabel: 'They absorb nutrients by breaking down forest matter',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 20 42 Q 40 18 60 42 Z" fill="#E98B73"/><rect x="36" y="42" width="8" height="20" fill="#FEF8E7"/></svg>`
      },
      {
        id: 'opt-plants-flower',
        value: 'They Have Animal Bones Inside 🦴',
        sublabel: 'Skeletal vertebrate structure',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Forest Recycler! Fungi clean up the forest floor! 🍄',
      explanation: 'Unlike green plants that make food with sunlight, fungi are nature’s decomposers, breaking down fallen wood and enriching the soil!'
    },
    feedbackIncorrect: {
      title: 'Mushrooms have no bones — they are soft fungal organisms!',
      explanation: 'They form their own biological kingdom because they do not perform photosynthesis.'
    },
    nextConcept: 'Mycelium Underground Forest Networks'
  },
  {
    id: 'nat-08',
    theme: 'nature',
    topic: 'Bird Migration',
    tag: '🦅 Seasonal Journeys',
    difficulty: 'Level 1: Foundation',
    question: 'Why do geese and swallows fly thousands of miles south every autumn?',
    options: [
      {
        id: 'opt-food-warmth',
        value: 'To Find Abundant Food & Warmth 🍂',
        sublabel: 'Escaping frozen lakes and insect shortages',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><path d="M 20 40 Q 30 25 40 40 Q 50 25 60 40" stroke="#17324D" stroke-width="3" fill="none"/></svg>`
      },
      {
        id: 'opt-vacation',
        value: 'To Go on Holiday Sightseeing 🏖️',
        sublabel: 'Casual travel for fun',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Migration Navigator! Birds follow seasonal food supplies! 🦅',
      explanation: 'When winter freezes ponds and hides insects, migratory birds navigate by stars and Earth’s magnetic field to reach warmer feeding grounds!'
    },
    feedbackIncorrect: {
      title: 'Migration is an exhausting biological survival journey!',
      explanation: 'Birds must migrate to survive harsh winter food shortages.'
    },
    nextConcept: 'V-Formation Aerodynamics in Flying Geese'
  },
  {
    id: 'nat-09',
    theme: 'nature',
    topic: 'Water Cycle',
    tag: '🌧️ Clouds & Rain',
    difficulty: 'Level 1: Foundation',
    question: 'When tiny floating water droplets in cold clouds gather and become too heavy, they fall as:',
    options: [
      {
        id: 'opt-rain',
        value: 'Precipitation (Rain or Snow) 🌧️',
        sublabel: 'Gravity pulls the heavy droplets down to Earth',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><ellipse cx="40" cy="30" rx="24" ry="14" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2"/><line x1="30" y1="48" x2="26" y2="60" stroke="#4FA6A0" stroke-width="2.5"/><line x1="42" y1="48" x2="38" y2="60" stroke="#4FA6A0" stroke-width="2.5"/><line x1="54" y1="48" x2="50" y2="60" stroke="#4FA6A0" stroke-width="2.5"/></svg>`
      },
      {
        id: 'opt-smoke',
        value: 'Volcanic Smoke Dust 🌋',
        sublabel: 'Ash from underground magma',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Water Cycle Wizard! Evaporation ➔ Condensation ➔ Precipitation! 🌧️',
      explanation: 'Water evaporates from oceans, condenses into fluffy clouds, and precipitates back down as life-giving rain and snow!'
    },
    feedbackIncorrect: {
      title: 'Clouds are made of pure water droplets, not smoke!',
      explanation: 'When droplets collide and grow heavy, gravity pulls them down as rain.'
    },
    nextConcept: 'Groundwater Rivers and Aquifers'
  },
  {
    id: 'nat-10',
    theme: 'nature',
    topic: 'Bioluminescence',
    tag: '✨ Fireflies & Deep Sea',
    difficulty: 'Level 2: Reasoning',
    question: 'How do fireflies and deep-sea anglerfish produce magical glowing light in the dark?',
    options: [
      {
        id: 'opt-luciferin',
        value: 'Natural Chemical Bioluminescence ✨',
        sublabel: 'Luciferin enzyme reactions produce cold light',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="14" fill="#F4C95D"/><circle cx="40" cy="40" r="24" stroke="#F4C95D" stroke-width="2" stroke-dasharray="3,3" fill="none"/></svg>`
      },
      {
        id: 'opt-batteries',
        value: 'They Swallow AA Batteries 🔋',
        sublabel: 'Electrical hardware power',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="32" y="25" width="16" height="30" fill="#64748B"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Glow Master! Bioluminescence produces 100% efficient cold light! ✨',
      explanation: 'Fireflies mix oxygen with a special enzyme called luciferase to flash bright secret mating codes in warm summer evenings!'
    },
    feedbackIncorrect: {
      title: 'Living creatures produce their own natural bio-chemicals!',
      explanation: 'Bioluminescence is a chemical reaction that releases light without wasting energy as heat.'
    },
    nextConcept: 'Deep-Ocean Glowing Jellyfish and Squid'
  },

  // ==========================================
  // 6. LIFE SKILLS, CYBER SAFETY & WELLBEING (10 Questions)
  // ==========================================
  {
    id: 'safe-01',
    theme: 'lifeskills',
    topic: 'Password Security',
    tag: '🛡️ Safe Logins',
    difficulty: 'Level 1: Foundation',
    question: 'Who is the ONLY person you should ever share your private account passwords with?',
    options: [
      {
        id: 'opt-parents',
        value: 'Trusted Parents or Guardians 🔐',
        sublabel: 'Never friends, gaming buddies, or online strangers',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="35" width="30" height="24" rx="4" fill="#FEF8E7" stroke="#4FA6A0" stroke-width="2.5"/><path d="M 32 35 L 32 25 A 8 8 0 0 1 48 25 L 48 35" stroke="#4FA6A0" stroke-width="3" fill="none"/></svg>`
      },
      {
        id: 'opt-gamechat',
        value: 'Anyone in Game Chat for Free Coins 🎮',
        sublabel: 'A dangerous online phishing scam',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/><line x1="28" y1="28" x2="52" y2="52" stroke="#E98B73" stroke-width="3"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Cyber Shield Activated! Keep your master keys private! 🛡️',
      explanation: 'Legitimate games will never ask for your password in chat. Only trusted parents or guardians should help manage your logins!'
    },
    feedbackIncorrect: {
      title: 'Danger: That is a classic phishing trick!',
      explanation: 'Never give passwords or personal names to strangers online in exchange for virtual coins or prizes.'
    },
    nextConcept: 'Creating Passphrases with Words + Emojis'
  },
  {
    id: 'safe-02',
    theme: 'lifeskills',
    topic: 'Digital Kindness',
    tag: '🤝 Anti-Bullying',
    difficulty: 'Level 1: Foundation',
    question: 'What should you do if you see an unkind or mean comment in a group chat or game?',
    options: [
      {
        id: 'opt-block-report',
        value: 'Don’t Reply, Block, & Tell an Adult 🛑',
        sublabel: 'Take a screenshot, block the user, and report to a parent',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/><path d="M 30 40 L 36 46 L 50 32" stroke="#4FA6A0" stroke-width="3" fill="none"/></svg>`
      },
      {
        id: 'opt-fight-back',
        value: 'Type Mean Insults Back 😡',
        sublabel: 'Fueling the argument and breaking rules',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Digital Upstander! Starve the drama and report! 🤝',
      explanation: 'Replying with anger gives cyberbullies attention. Blocking and alerting a trusted adult stops the negativity immediately!'
    },
    feedbackIncorrect: {
      title: 'Fighting back only spreads negativity!',
      explanation: 'The smartest move is always: Screenshot ➔ Block ➔ Report ➔ Tell a trusted parent or teacher.'
    },
    nextConcept: 'Being an Online Upstander vs Bystander'
  },
  {
    id: 'safe-03',
    theme: 'lifeskills',
    topic: 'Screen Time Balance',
    tag: '📱 20-20-20 Rule',
    difficulty: 'Level 2: Reasoning',
    question: 'What is the optometrist-recommended "20-20-20 Rule" for healthy screen eyes?',
    options: [
      {
        id: 'opt-202020',
        value: 'Every 20 mins, Look 20 ft Away for 20 secs 👀',
        sublabel: 'Relaxes eye lens muscles and prevents fatigue',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/><text x="40" y="46" font-size="12" font-weight="bold" fill="#17324D" text-anchor="middle">20-20-20</text></svg>`
      },
      {
        id: 'opt-20hours',
        value: 'Stare at Screens for 20 Hours Non-Stop 🎮',
        sublabel: 'Extreme screen marathon',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Eye Care Champion! The 20-20-20 rule protects eyesight! 👀',
      explanation: 'Looking out a window at distant trees every 20 minutes allows the focusing muscles in your eyes to relax completely!'
    },
    feedbackIncorrect: {
      title: '20 hours of screens strains eyes and causes headaches!',
      explanation: 'Take frequent 20-second distant vision breaks to keep eyes refreshed.'
    },
    nextConcept: 'Blue Light and Healthy Sleep Habits'
  },
  {
    id: 'safe-04',
    theme: 'lifeskills',
    topic: 'Growth Mindset',
    tag: '🌱 Power of YET',
    difficulty: 'Level 1: Foundation',
    question: 'When you encounter a difficult challenge, what magical word turns frustration into growth?',
    options: [
      {
        id: 'opt-yet',
        value: '"I Don’t Know How to Do This... YET!" 🌱',
        sublabel: 'A growth mindset acknowledging learning takes practice',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/><text x="40" y="47" font-size="14" font-weight="bold" fill="#3D8883" text-anchor="middle">YET!</text></svg>`
      },
      {
        id: 'opt-quit',
        value: '"I Am Bad At This Forever, I Quit!" 🛑',
        sublabel: 'A fixed mindset that blocks learning',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Brain Grower! Adding "YET" unlocks neuroplasticity! 🌱',
      explanation: 'Every time you struggle and practice, your brain builds brand new neural highways. You haven’t mastered it YET, but you will!'
    },
    feedbackIncorrect: {
      title: 'Nobody is born an expert at anything!',
      explanation: 'Mistakes are simply proof that your brain is actively stretching and growing.'
    },
    nextConcept: 'Neuroplasticity: How Brains Build Neural Pathways'
  },
  {
    id: 'safe-05',
    theme: 'lifeskills',
    topic: 'Financial Literacy',
    tag: '🪙 Save, Spend, Give',
    difficulty: 'Level 1: Foundation',
    question: 'What is the smartest habit when you receive birthday money or an allowance?',
    options: [
      {
        id: 'opt-save-spend',
        value: 'Save Some, Spend Some, Share Some 🪙',
        sublabel: 'The 3-jar system builds lifelong financial confidence',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/><text x="40" y="48" font-size="20" font-weight="bold" fill="#17324D" text-anchor="middle">$</text></svg>`
      },
      {
        id: 'opt-spend-all',
        value: 'Spend Every Penny in 5 Minutes on Candy 🍬',
        sublabel: 'Leaves zero savings for future goals',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Money Master! The 3-Jar System builds big dreams! 🪙',
      explanation: 'Saving part of your money lets interest compound over time, giving you power to achieve big goals and help others!'
    },
    feedbackIncorrect: {
      title: 'Spending everything immediately leaves zero savings for big dreams!',
      explanation: 'Learning to save a percentage of every dollar is a superpower of successful people.'
    },
    nextConcept: 'Compound Interest Explained with Snowballs'
  },
  {
    id: 'safe-06',
    theme: 'lifeskills',
    topic: 'Emotional Regulation',
    tag: '🌬️ Box Breathing',
    difficulty: 'Level 1: Foundation',
    question: 'When feeling overwhelmed or frustrated, how does taking 4 slow deep belly breaths help your body?',
    options: [
      {
        id: 'opt-calm-brain',
        value: 'Activates the Calming Vagus Nerve System 🧘',
        sublabel: 'Lowers heart rate and returns rational thinking to the prefrontal cortex',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/><path d="M 28 40 Q 40 28 52 40 Q 40 52 28 40" fill="#4FA6A0" opacity="0.6"/></svg>`
      },
      {
        id: 'opt-superhuman',
        value: 'Turns You into an Invisible Ghost 👻',
        sublabel: 'Magical physical transformation',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Zen Master! Deep belly breaths reset your nervous system! 🧘',
      explanation: 'Deep breathing sends oxygen to your brain, turning off the alarm system (amygdala) and letting your wise thinking brain take charge!'
    },
    feedbackIncorrect: {
      title: 'Breathing regulates heart rate and brain chemistry!',
      explanation: 'Box breathing (4s in, 4s hold, 4s out, 4s hold) is used by athletes and pilots to stay calm under pressure.'
    },
    nextConcept: 'The Amygdala vs Prefrontal Cortex'
  },
  {
    id: 'safe-07',
    theme: 'lifeskills',
    topic: 'Digital Footprint',
    tag: '🐾 Permanent Posts',
    difficulty: 'Level 2: Reasoning',
    question: 'Why is your "Digital Footprint" called permanent?',
    options: [
      {
        id: 'opt-footprint',
        value: 'Photos & Posts can be Copied & Saved Forever 🐾',
        sublabel: 'Even deleted messages can exist on server logs or screenshots',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><ellipse cx="40" cy="45" rx="14" ry="20" fill="#17324D"/><circle cx="30" cy="22" r="4" fill="#4FA6A0"/><circle cx="40" cy="18" r="4" fill="#4FA6A0"/><circle cx="50" cy="22" r="4" fill="#4FA6A0"/></svg>`
      },
      {
        id: 'opt-vanish',
        value: 'Everything Automatically Vanishes into Thin Air 💨',
        sublabel: 'No data is ever stored on the internet',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Digital Detective! Think before you post online! 🐾',
      explanation: 'Always follow the Billboard Rule: If you wouldn’t want your grandmother or school principal to see it on a highway billboard, don’t post it!'
    },
    feedbackIncorrect: {
      title: 'The internet never truly forgets screenshots!',
      explanation: 'Always post with kindness and respect because digital records can last a lifetime.'
    },
    nextConcept: 'Curating a Positive Digital Portfolio'
  },
  {
    id: 'safe-08',
    theme: 'lifeskills',
    topic: 'Time Management',
    tag: '⏰ The Pomodoro Trick',
    difficulty: 'Level 1: Foundation',
    question: 'How does the "Pomodoro Technique" help children finish homework without stress?',
    options: [
      {
        id: 'opt-pomo',
        value: '25 Mins of Laser Focus + 5 Min Fun Break ⏰',
        sublabel: 'Short sprints prevent daydreaming and brain fatigue',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FEF8E7" stroke="#F4C95D" stroke-width="2.5"/><path d="M 40 40 L 40 20 M 40 40 L 54 40" stroke="#17324D" stroke-width="3" stroke-linecap="round"/></svg>`
      },
      {
        id: 'opt-cram',
        value: 'Do Homework for 6 Hours Without Stopping 💤',
        sublabel: 'Exhausting marathon study',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Focus Champion! Short sprints beat long marathons! ⏰',
      explanation: 'Working with a 25-minute timer gives your brain a clear finish line, and 5-minute movement breaks keep your energy high!'
    },
    feedbackIncorrect: {
      title: '6 hours of uninterrupted sitting causes brain fatigue!',
      explanation: 'Short focused intervals followed by quick rest breaks dramatically increase retention.'
    },
    nextConcept: 'Tackling the Hardest Task First (Eat the Frog)'
  },
  {
    id: 'safe-09',
    theme: 'lifeskills',
    topic: 'Emergency Safety',
    tag: '🚨 Personal Safety',
    difficulty: 'Level 1: Foundation',
    question: 'If you ever get separated from your family in a crowded mall or amusement park, who should you look for?',
    options: [
      {
        id: 'opt-worker-mom',
        value: 'A Store Worker in Uniform or a Parent with Kids 👮',
        sublabel: 'Stay in the open, do not leave the store, and ask staff for help',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><rect x="25" y="25" width="30" height="30" rx="6" fill="#EBF6F5" stroke="#4FA6A0" stroke-width="2.5"/><circle cx="40" cy="36" r="6" fill="#4FA6A0"/></svg>`
      },
      {
        id: 'opt-parking-lot',
        value: 'Walk Alone into the Dark Parking Lot 🚗',
        sublabel: 'Dangerous wandering outside',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Safety Star! Stay in the store and find a uniformed worker! 🛡️',
      explanation: 'Never walk outside into parking lots. Go inside the nearest cash register desk or approach a mother with children for immediate help!'
    },
    feedbackIncorrect: {
      title: 'Never wander outside into parking lots or isolated areas!',
      explanation: 'Stay inside the brightly lit store and ask a cashier or security officer to page your parents.'
    },
    nextConcept: 'Memorizing Parents’ Phone Numbers with Rhythm Songs'
  },
  {
    id: 'safe-10',
    theme: 'lifeskills',
    topic: 'Sleep Hygiene',
    tag: '🌙 Brain Recovery',
    difficulty: 'Level 1: Foundation',
    question: 'Why do growing children need 9 to 11 hours of restful sleep every night?',
    options: [
      {
        id: 'opt-sleep-growth',
        value: 'Brain Organizes Memories & Body Releases Growth Hormones 🌙',
        sublabel: 'Deep sleep repairs cells and cements what you learned that day',
        isCorrect: true,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#17324D" stroke="#F4C95D" stroke-width="2"/><path d="M 46 26 A 16 16 0 1 1 34 50 A 18 18 0 0 0 46 26 Z" fill="#F4C95D"/></svg>`
      },
      {
        id: 'opt-sleep-waste',
        value: 'Sleep is Just a Waste of Playtime 😴',
        sublabel: 'No biological benefits',
        isCorrect: false,
        graphic: `<svg viewBox="0 0 80 80" width="60" height="60"><circle cx="40" cy="40" r="26" fill="#FDF1EE" stroke="#E98B73" stroke-width="2.5"/></svg>`
      }
    ],
    feedbackCorrect: {
      title: 'Sleep Master! Nighttime is when your brain files memories! 🌙',
      explanation: 'During deep REM sleep, your brain replays the day’s lessons, locking them into permanent memory while releasing growth hormones to help you grow taller!'
    },
    feedbackIncorrect: {
      title: 'Sleep is vital for brain growth and immune health!',
      explanation: 'Children who get 9-11 hours of sleep have stronger focus, better moods, and sharper memory.'
    },
    nextConcept: 'Bedtime Routines and Dim Light Preparation'
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
      const count = theme.id === 'all' 
        ? quizQuestions.length 
        : quizQuestions.filter(q => q.theme === theme.id).length;

      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = `quiz-theme-pill ${theme.id === currentFilter ? 'active' : ''}`;
      pill.innerHTML = `<span>${theme.icon}</span> ${theme.name.replace(/^..\s/, '')} (${count})`;
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

  // Audio synthesis helper for tactile learning feedback
  function playAudioChime(isCorrect) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      if (isCorrect) {
        // Joyful 3-note harmonic chime (C5 -> E5 -> G5)
        const notes = [523.25, 659.25, 783.99];
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.12, ctx.currentTime + i * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + i * 0.1);
          osc.stop(ctx.currentTime + i * 0.1 + 0.3);
        });
      } else {
        // Soft, gentle tone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch {}
  }

  function handleOptionClick(selectedBtn, isCorrect, question) {
    const allBtns = optionsContainer?.querySelectorAll('.quiz-interactive-opt');
    allBtns?.forEach(b => {
      b.classList.remove('state-correct', 'state-incorrect');
      b.style.pointerEvents = 'none';
    });

    playAudioChime(isCorrect);

    if (isCorrect) {
      currentStreak++;
      totalScore += 100;
      selectedBtn.classList.add('state-correct');
      if (streakText) streakText.textContent = `${currentStreak}🔥`;

      // Sync progress to Google Cloud
      window.dispatchEvent(new CustomEvent('edusync_update_progress', {
        detail: {
          streak: currentStreak,
          addStars: 1,
          addPoints: 50,
          completedQuestionId: question.id
        }
      }));

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

      // Sync reset streak to Google Cloud
      window.dispatchEvent(new CustomEvent('edusync_update_progress', {
        detail: { streak: 0 }
      }));

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
