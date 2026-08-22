/**
 * EduSync - Story Section Adaptive Pathway Switcher
 * Interactive demonstration of Student A vs Student B adaptive pathways
 */

export function initStoryToggle() {
  const toggleBtns = document.querySelectorAll('.story-toggle-btn');
  const pathCards = document.querySelectorAll('.pathway-card');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      pathCards.forEach(card => {
        if (card.classList.contains(target)) {
          card.classList.add('active-pathway');
        } else {
          card.classList.remove('active-pathway');
        }
      });
    });
  });
}
