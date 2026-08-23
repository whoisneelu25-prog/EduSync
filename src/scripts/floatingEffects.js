// EduSync Floating Micro-Interactions & Ambient Particle Engine

export function initFloatingEffects() {
  // 1. Create Floating Reaction Burst Helper
  window.createFloatingReaction = function(x, y, emoji = '🌟') {
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle-fx';
      particle.textContent = emoji;

      const angle = (Math.PI * 2 * i) / 6 + (Math.random() * 0.4 - 0.2);
      const distance = 40 + Math.random() * 35;
      const destX = Math.cos(angle) * distance;
      const destY = Math.sin(angle) * distance - 30;

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.setProperty('--dx', `${destX}px`);
      particle.style.setProperty('--dy', `${destY}px`);

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  };

  // Wire reaction button clicks to floating particle bursts
  document.addEventListener('click', (e) => {
    const rxBtn = e.target.closest('.kidcircle-rx-btn, .reel-like-btn, .quiz-interactive-opt, .interactive-pizza-slice');
    if (rxBtn) {
      const rect = rxBtn.getBoundingClientRect();
      const emoji = rxBtn.querySelector('.side-btn-icon, span')?.textContent?.trim() || '✨';
      window.createFloatingReaction(rect.left + rect.width / 2, rect.top + rect.height / 2, emoji.slice(0, 2) || '✨');
    }
  });

  // 2. Render Floating Sticky Learner Dock
  let dock = document.querySelector('#floatingLearnerDock');
  if (!dock) {
    dock = document.createElement('div');
    dock.id = 'floatingLearnerDock';
    dock.className = 'floating-learner-dock';

    dock.innerHTML = `
      <div class="dock-streak" title="Your Daily Learning Streak">
        <span class="dock-flame">🔥</span>
        <strong id="dockStreakCount">0</strong>
      </div>
      <div class="dock-divider"></div>
      <div class="dock-stars" title="Mastery Stars Earned">
        <span class="dock-star">⭐</span>
        <strong id="dockStarCount">150</strong>
      </div>
      <div class="dock-divider"></div>
      <a href="#chat" class="dock-chat-link" title="Chat with AI Mentor">
        <span class="dock-avatar">🧑‍🏫</span>
        <span>Ask Priya</span>
      </a>
      <a href="#hero" class="dock-top-btn" title="Back to Top">
        <span>↑</span>
      </a>
    `;

    document.body.appendChild(dock);

    // Update Dock on progress events
    window.addEventListener('edusync_update_progress', (e) => {
      const streakEl = document.querySelector('#dockStreakCount');
      const starEl = document.querySelector('#dockStarCount');
      if (streakEl && e.detail?.addStreak) {
        streakEl.textContent = parseInt(streakEl.textContent || '0') + 1;
      }
      if (starEl && e.detail?.addPoints) {
        starEl.textContent = parseInt(starEl.textContent || '150') + e.detail.addPoints;
      }
    });
  }
}
