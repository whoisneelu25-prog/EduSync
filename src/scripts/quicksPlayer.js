// Quicks Reels Player Controller


export const quicksData = [
  {
    id: 'fruits',
    title: 'Fun Way to Learn Fruits!',
    category: 'Early Learning & Nutrition',
    duration: '30s',
    videoSources: [
      '/videos/YTDown.com_Shorts_Fun-Way-to-Learn-Fruits-Kids-Learning-fu_Media_tk3fCn3bG2E_002_720p.mp4',
      '/videos/1.mp4',
      '/videos/quick1.mp4',
      '/videos/quick-fruits.mp4'
    ],
    author: 'Ms. Lily & SyncBuddy',
    caption: 'Discover delicious, healthy fruits with fun rhymes and colorful shapes!',
    likes: 1890,
    isLiked: false,
    isSaved: false,
    quizTarget: 'fruits-vitc',
    visualType: 'fruits',
    customBlobUrl: null
  },
  {
    id: 'adjectives',
    title: 'Short, Shorter, Shortest!',
    category: 'Grammar & Comparisons',
    duration: '28s',
    videoSources: [
      '/videos/YTDown.com_Shorts_Short-Shorter-Shortest-ER-_-EST-Adjectiv_Media_r2PljdVPixo_002_720p.mp4',
      '/videos/2.mp4',
      '/videos/quick2.mp4',
      '/videos/quick-adjectives.mp4'
    ],
    author: 'Coach Leo & SyncBuddy',
    caption: 'Learn degrees of comparison with fun visuals: -er vs -est adjectives made simple!',
    likes: 2120,
    isLiked: false,
    isSaved: false,
    quizTarget: 'lang-01',
    visualType: 'adjectives',
    customBlobUrl: null
  },
  {
    id: 'angles',
    title: 'Acute vs Right Angles',
    category: 'Geometry & Math',
    duration: '25s',
    videoSources: [
      '/videos/3.mp4',
      '/videos/WhatsApp Video 2026-08-23 at 05.07.13.mp4',
      '/videos/quick3.mp4',
      '/videos/quick-angles.mp4'
    ],
    author: 'Teacher Maya & SyncBuddy',
    caption: 'Less than 90° is Acute (sharp & cute!). Exactly 90° makes a perfect corner square.',
    likes: 1340,
    isLiked: false,
    isSaved: false,
    quizTarget: 'math-03',
    visualType: 'angles',
    customBlobUrl: null
  },
  {
    id: 'photosynthesis',
    title: 'How Plants Eat Sunlight',
    category: 'Nature & Biology',
    duration: '32s',
    videoSources: [
      '/videos/4.mp4',
      '/videos/WhatsApp Video 2026-08-23 at 05.07.13 (1).mp4',
      '/videos/quick4.mp4',
      '/videos/quick-photosynthesis.mp4'
    ],
    author: 'Dr. Sarah & SyncBuddy',
    caption: 'Chlorophyll traps sunlight photons, mixes with water and CO₂ to bake glucose sugar!',
    likes: 1650,
    isLiked: false,
    isSaved: false,
    quizTarget: 'nat-01',
    visualType: 'photosynthesis',
    customBlobUrl: null
  },
  {
    id: 'space',
    title: 'Gravity & The Moon Leap',
    category: 'Physics & Space',
    duration: '29s',
    videoSources: [
      '/videos/5.mp4',
      '/videos/WhatsApp Video 2026-08-23 at 05.08.19.mp4',
      '/videos/quick5.mp4',
      '/videos/quick-gravity.mp4'
    ],
    author: 'Coach Leo & SyncBuddy',
    caption: '1/6th Moon gravity lets astronauts bounce 6 times higher than Earth!',
    likes: 2480,
    isLiked: false,
    isSaved: false,
    quizTarget: 'phys-01',
    visualType: 'gravity',
    customBlobUrl: null
  }
];

export function initQuicksPlayer() {
  const modal = document.querySelector('.reels-modal');
  const closeBtn = document.querySelector('.reels-close-btn');
  const prevBtn = document.querySelector('.reels-prev-btn');
  const nextBtn = document.querySelector('.reels-next-btn');
  const reelCards = document.querySelectorAll('.quick-reel-card');

  // Modal elements
  const authorAvatar = document.querySelector('.reels-author-avatar');
  const authorName = document.querySelector('.reels-author-name');
  const tagPill = document.querySelector('.reels-tag-pill');
  const titleText = document.querySelector('.reels-title-text');
  const captionText = document.querySelector('.reels-caption-text');
  const likeBtn = document.querySelector('.reel-like-btn');
  const likeCount = document.querySelector('.like-count');
  const saveBtn = document.querySelector('.reel-save-btn');
  const playPauseBtn = document.querySelector('.reel-play-pause-btn');
  const muteBtn = document.querySelector('.reel-mute-btn');
  const quizBridgeBtn = document.querySelector('.reels-quiz-bridge-btn');
  const videoElement = document.querySelector('.reel-video-element');
  const canvasFallback = document.querySelector('.reel-animated-canvas-fallback');
  const progressSegs = document.querySelectorAll('.reel-progress-seg');

  let currentReelIndex = 0;
  let isPlaying = true;
  let isMuted = true;
  let progressInterval = null;
  let currentProgress = 0;
  const REEL_DURATION_MS = 15000; // 15 seconds per reel cycle for demonstration

  // Open modal on card click
  reelCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      openReel(index);
    });
  });

  function openReel(index) {
    currentReelIndex = index;
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      loadCurrentReel();
    }
  }

  function closeReel() {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      stopReel();
    }
  }

  // File input picker for instant video upload
  const fileInput = document.getElementById('reelVideoFileInput');
  const uploadBtn = document.querySelector('.reel-upload-trigger-btn');
  const bannerUploadBtn = document.getElementById('bannerUploadVideoBtn');

  if (uploadBtn && fileInput) {
    uploadBtn.addEventListener('click', () => fileInput.click());
  }
  if (bannerUploadBtn && fileInput) {
    bannerUploadBtn.addEventListener('click', () => {
      openReel(0);
      fileInput.click();
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        quicksData[currentReelIndex].customBlobUrl = objectUrl;
        loadCurrentReel();
      }
    });
  }

  function loadCurrentReel() {
    stopReel();
    const reel = quicksData[currentReelIndex];
    if (!reel) return;

    // Update headers and text
    if (authorName) authorName.textContent = reel.author;
    if (authorAvatar) authorAvatar.textContent = reel.author.charAt(0);
    if (tagPill) tagPill.innerHTML = `<span>⚡</span> ${reel.category} • ${reel.duration}`;
    if (titleText) titleText.textContent = reel.title;
    if (captionText) captionText.textContent = reel.caption;
    if (likeCount) likeCount.textContent = reel.likes.toLocaleString();

    // Update Like & Save states
    if (likeBtn) {
      likeBtn.classList.toggle('liked', reel.isLiked);
    }
    if (saveBtn) {
      saveBtn.classList.toggle('saved', reel.isSaved);
    }

    // Update progress bars
    progressSegs.forEach((seg, idx) => {
      const fill = seg.querySelector('.reel-progress-fill');
      if (idx < currentReelIndex) {
        seg.classList.add('completed');
        if (fill) fill.style.width = '100%';
      } else {
        seg.classList.remove('completed');
        if (fill) fill.style.width = '0%';
      }
    });

    // Try custom blob url or videoSources array
    let sourcesToTry = reel.customBlobUrl ? [reel.customBlobUrl] : [...reel.videoSources];
    let sourceIndex = 0;

    function tryNextVideoSource() {
      if (!videoElement) return;

      if (sourceIndex < sourcesToTry.length) {
        const src = sourcesToTry[sourceIndex];
        sourceIndex++;
        videoElement.src = src;
        videoElement.muted = isMuted;

        videoElement.oncanplay = () => {
          videoElement.classList.add('has-video');
          if (canvasFallback) canvasFallback.style.display = 'none';
          if (isPlaying) videoElement.play().catch(() => {});
        };

        videoElement.onerror = () => {
          tryNextVideoSource();
        };
      } else {
        // Fallback to animated interactive graphic
        videoElement.classList.remove('has-video');
        if (canvasFallback) {
          canvasFallback.style.display = 'flex';
          renderFallbackGraphic(reel.visualType);
        }
      }
    }

    tryNextVideoSource();
    startProgress();
  }

  function renderFallbackGraphic(type) {
    if (!canvasFallback) return;
    const visualBox = canvasFallback.querySelector('.canvas-anim-visual');
    if (!visualBox) return;

    if (type === 'fractions') {
      visualBox.innerHTML = `
        <svg viewBox="0 0 160 160" width="160" height="160">
          <circle cx="80" cy="80" r="70" fill="#23486C" stroke="#4FA6A0" stroke-width="4"/>
          <!-- Half slice -->
          <path d="M 80 80 L 80 10 A 70 70 0 0 1 80 150 Z" fill="#F4C95D">
            <animateTransform attributeName="transform" type="rotate" from="0 80 80" to="360 80 80" dur="10s" repeatCount="indefinite"/>
          </path>
          <text x="80" y="86" fill="#17324D" font-size="20" font-weight="bold" text-anchor="middle" font-family="Plus Jakarta Sans">1/2</text>
        </svg>
      `;
    } else if (type === 'gravity') {
      visualBox.innerHTML = `
        <svg viewBox="0 0 160 160" width="160" height="160">
          <circle cx="80" cy="130" r="50" fill="#17324D" stroke="#4FA6A0" stroke-width="3"/>
          <circle cx="80" cy="40" r="16" fill="#E98B73">
            <animate attributeName="cy" values="30;105;30" dur="2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" calcMode="spline"/>
          </circle>
          <path d="M 70 65 L 80 80 L 90 65" stroke="#F4C95D" stroke-width="3" fill="none"/>
        </svg>
      `;
    } else if (type === 'angles') {
      visualBox.innerHTML = `
        <svg viewBox="0 0 160 160" width="160" height="160">
          <line x1="30" y1="130" x2="130" y2="130" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
          <line x1="30" y1="130" x2="110" y2="50" stroke="#F4C95D" stroke-width="4" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" values="0 30 130; -45 30 130; 0 30 130" dur="4s" repeatCount="indefinite"/>
          </line>
          <path d="M 60 130 A 30 30 0 0 0 52 108" fill="none" stroke="#4FA6A0" stroke-width="3"/>
          <text x="75" y="115" fill="#4FA6A0" font-size="14" font-weight="bold">45°</text>
        </svg>
      `;
    } else {
      visualBox.innerHTML = `
        <svg viewBox="0 0 160 160" width="160" height="160">
          <circle cx="80" cy="80" r="65" fill="#1d3f60" stroke="#4FA6A0" stroke-width="3"/>
          <circle cx="80" cy="80" r="28" fill="#F4C95D"/>
          <path d="M 80 120 C 60 100, 60 60, 80 40 C 100 60, 100 100, 80 120" fill="#4FA6A0" opacity="0.8"/>
        </svg>
      `;
    }
  }

  function startProgress() {
    clearInterval(progressInterval);
    currentProgress = 0;
    const currentSegFill = progressSegs[currentReelIndex]?.querySelector('.reel-progress-fill');

    progressInterval = setInterval(() => {
      if (!isPlaying) return;
      currentProgress += 100 / (REEL_DURATION_MS / 100);
      if (currentSegFill) {
        currentSegFill.style.width = `${Math.min(currentProgress, 100)}%`;
      }

      if (currentProgress >= 100) {
        nextReel();
      }
    }, 100);
  }

  function stopReel() {
    clearInterval(progressInterval);
    if (videoElement) {
      videoElement.pause();
    }
  }

  function nextReel() {
    if (currentReelIndex < quicksData.length - 1) {
      currentReelIndex++;
    } else {
      currentReelIndex = 0;
    }
    loadCurrentReel();
  }

  function prevReel() {
    if (currentReelIndex > 0) {
      currentReelIndex--;
    } else {
      currentReelIndex = quicksData.length - 1;
    }
    loadCurrentReel();
  }

  // Like toggle
  likeBtn?.addEventListener('click', () => {
    const reel = quicksData[currentReelIndex];
    if (reel) {
      reel.isLiked = !reel.isLiked;
      reel.likes += reel.isLiked ? 1 : -1;
      likeBtn.classList.toggle('liked', reel.isLiked);
      if (likeCount) likeCount.textContent = reel.likes.toLocaleString();

      // Sync to Google Cloud store
      window.dispatchEvent(new CustomEvent('edusync_update_progress', {
        detail: {
          addPoints: reel.isLiked ? 25 : 0,
          likedReelId: reel.id
        }
      }));
    }
  });

  // Save toggle
  saveBtn?.addEventListener('click', () => {
    const reel = quicksData[currentReelIndex];
    if (reel) {
      reel.isSaved = !reel.isSaved;
      saveBtn.classList.toggle('saved', reel.isSaved);

      // Sync to Google Cloud store
      window.dispatchEvent(new CustomEvent('edusync_update_progress', {
        detail: {
          savedReelId: reel.id
        }
      }));
    }
  });

  // Play/Pause toggle
  playPauseBtn?.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playPauseBtn.innerHTML = isPlaying ? '⏸' : '▶';
    if (videoElement && videoElement.classList.contains('has-video')) {
      if (isPlaying) videoElement.play().catch(() => {});
      else videoElement.pause();
    }
  });

  // Mute toggle
  muteBtn?.addEventListener('click', () => {
    isMuted = !isMuted;
    muteBtn.innerHTML = isMuted ? '🔇' : '🔊';
    if (videoElement) {
      videoElement.muted = isMuted;
    }
  });

  // Quiz bridge button inside reel
  quizBridgeBtn?.addEventListener('click', () => {
    closeReel();
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Navigation handlers
  closeBtn?.addEventListener('click', closeReel);
  nextBtn?.addEventListener('click', nextReel);
  prevBtn?.addEventListener('click', prevReel);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal?.classList.contains('open')) return;
    if (e.key === 'Escape') closeReel();
    if (e.key === 'ArrowDown') nextReel();
    if (e.key === 'ArrowUp') prevReel();
    if (e.key === ' ') {
      e.preventDefault();
      playPauseBtn?.click();
    }
  });

  // Touch Swipe for mobile reels
  let touchStartY = 0;
  modal?.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  modal?.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY - touchEndY;
    if (diffY > 60) nextReel(); // Swiped up
    else if (diffY < -60) prevReel(); // Swiped down
  }, { passive: true });
}
