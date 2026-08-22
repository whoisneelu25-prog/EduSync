# EduSync 🎓

> **Learning that adapts to every child.**  
> *“Learn Beyond Books. Grow Beyond Grades.”*

EduSync is a personalized learning frontend web application for children. It blends 30-second micro-learning video reels (**Quicks**), an adaptive concept-based **Quiz** engine, and a friendly educational companion chatbot (**SyncBuddy**) into a continuous, interactive learning loop.

🌐 **Live Demo:** [https://edu-sync-ruby.vercel.app/](https://edu-sync-ruby.vercel.app/)

---

## ✨ Features

- **📱 Quicks (Reels-style Micro-Learning):** Vertical swipeable micro-lesson player with custom video support, progress tracking, audio toggle, likes, bookmarks, and animated fallbacks.
- **🎯 Concept-Driven Adaptive Quiz:** Diagnoses reasoning gaps across multiple topics (Fruits & Nutrition, Grammar & Adjectives, Fractions, Geometry) with instant tactile feedback.
- **✨ SyncBuddy (Learning Companion):** A warm, child-friendly conversational UI with quick-prompt chips, real-time typing simulations, and visual analogy cards.
- **🛤️ Adaptive Learning Pathways:** Interactive demonstration of how learning adapts in real-time for students needing foundational help vs. students ready for advanced stretch challenges.
- **🌱 Holistic Topics (Beyond Academics):** Curated modules across STEM, Life Skills, Health, Cyber Safety, and Digital Responsibility.

---

## 🛠️ Tech Stack

- **Core:** HTML5, Modern Vanilla JavaScript (ES Modules)
- **Styling:** Modular Vanilla CSS with CSS Custom Properties
- **Build & Dev Tool:** [Vite](https://vitejs.dev/)
- **Typography:** *Plus Jakarta Sans* (Headings) & *Nunito Sans* (Body)
- **Hosting:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```
EduSync/
├── public/
│   ├── favicon.svg
│   └── videos/              # Video reels directory (1.mp4, 2.mp4, etc.)
│
├── src/
│   ├── scripts/
│   │   ├── main.js          # App initializer & IntersectionObservers
│   │   ├── navbar.js        # Sticky header & mobile drawer logic
│   │   ├── quicksPlayer.js  # Reels modal player & video handlers
│   │   ├── quizEngine.js    # Interactive quiz state & feedback
│   │   ├── companionChat.js # AI companion dialog & prompt chips
│   │   └── storyToggle.js   # Adaptive learning pathway switcher
│   │
│   └── styles/
│       ├── variables.css    # Design tokens & color system
│       ├── base.css         # Typography hierarchy & base resets
│       ├── animations.css   # Scroll reveals & micro-interactions
│       └── components/      # Component stylesheets
│
├── index.html               # Main landing page
├── package.json
├── vercel.json              # Vercel deployment configuration
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation & Local Setup

```bash
# Clone the repository
git clone https://github.com/whoisneelu25-prog/EduSync.git

# Navigate to project root
cd EduSync

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173/` in your browser.

### Production Build

```bash
npm run build
```

---

## 📹 Adding Custom Video Reels

You can add videos in two ways:
1. **Drop files into `/public/videos/`:** Name them `1.mp4`, `2.mp4`, `3.mp4`, etc.
2. **Direct File Picker:** Click the **"Choose Local Video"** button directly on the website to load any `.mp4` file into the reels player.

---

## 📄 License

MIT License © 2026 EduSync Team.
