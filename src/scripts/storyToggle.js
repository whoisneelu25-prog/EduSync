// Adaptive Pathway Interactive Switcher & Concept Simulator

export function initStoryToggle() {
  const toggleBtns = document.querySelectorAll('.story-toggle-btn');
  const pathCards = document.querySelectorAll('.pathway-card');
  const sliceElements = document.querySelectorAll('.interactive-pizza-slice');
  const fractionReadout = document.querySelector('#pizzaFractionReadout');

  function playChime(isChallenge) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const startFreq = isChallenge ? 587.33 : 440; // D5 vs A4
      const endFreq = isChallenge ? 880 : 659.25; // A5 vs E5
      osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch {}
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const isChallenge = target === 'student-b';

      playChime(isChallenge);

      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      pathCards.forEach(card => {
        if (card.classList.contains(target)) {
          card.classList.add('active-pathway');
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.classList.remove('active-pathway');
        }
      });
    });
  });

  // Interactive Pizza Fraction Simulation for Arjun's Pathway
  let selectedSlices = 1;
  sliceElements.forEach((slice, idx) => {
    slice.addEventListener('click', () => {
      selectedSlices = idx + 1;
      sliceElements.forEach((s, sIdx) => {
        s.classList.toggle('selected', sIdx < selectedSlices);
      });
      if (fractionReadout) {
        fractionReadout.innerHTML = `<strong>${selectedSlices}/4 Slices</strong> (${selectedSlices * 25}% of the Pizza)`;
      }
      playChime(false);
    });
  });

  // Interactive Story Bridges to Chat & Quiz
  const storyChatBtns = document.querySelectorAll('.story-chat-bridge-btn');
  storyChatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prompt = btn.dataset.prompt;
      const chatSection = document.getElementById('chat');
      if (chatSection) {
        chatSection.scrollIntoView({ behavior: 'smooth' });
        const input = document.getElementById('chatInput');
        const sendBtn = document.getElementById('sendChatBtn');
        if (input) {
          input.value = prompt;
          setTimeout(() => sendBtn?.click(), 600);
        }
      }
    });
  });
}
