// Main App Entry


import { initNavbar } from './navbar.js';
import { initQuicksPlayer } from './quicksPlayer.js';
import { initQuizEngine } from './quizEngine.js';
import { initCompanionChat } from './companionChat.js';
import { initStoryToggle } from './storyToggle.js';
import { initAuth } from './auth.js';
import { initTopicsExplorer } from './topicsExplorer.js';
import { initKidCircleSocial } from './kidCircleSocial.js';
import { initFloatingEffects } from './floatingEffects.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initNavbar();
  initQuicksPlayer();
  initQuizEngine();
  initCompanionChat();
  initStoryToggle();
  initAuth();
  initTopicsExplorer();
  initKidCircleSocial();
  initFloatingEffects();

  // Scroll reveal observer for subtle entrance animations
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
