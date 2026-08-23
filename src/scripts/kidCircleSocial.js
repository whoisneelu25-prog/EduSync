// EduSync KidCircle — Child-Safe Social Achievement Hub (Beta)
// Where children share sports triumphs, competition medals, and creative milestones

export const INITIAL_ACHIEVEMENTS = [
  {
    id: 'post-1',
    authorName: 'Aarav Sharma',
    authorGrade: 'Class 4 (CBSE) • Bengaluru',
    authorAvatar: '👦',
    category: 'sports',
    categoryName: '⚽ Sports & Athletics',
    title: 'Scored the winning penalty goal at the Inter-School Football Cup!',
    medal: '🥇 1st Place Trophy • Inter-School Cup',
    story: 'Practiced penalty shootouts every evening after finishing my EduSync Math quicks. Our school team won the finals 3-2! Thanks Coach Rohan for teaching focus!',
    badgeIcon: '⚽',
    badgeGradient: 'linear-gradient(135deg, #17324D 0%, #2b5548 100%)',
    timestamp: '2 hours ago',
    reactions: { highfive: 48, star: 32, wow: 21, heart: 19 },
    userReacted: { highfive: false, star: false, wow: false, heart: false },
    verified: true
  },
  {
    id: 'post-2',
    authorName: 'Diya Patel',
    authorGrade: 'Class 3 (ICSE) • Mumbai',
    authorAvatar: '👧',
    category: 'science',
    categoryName: '🔬 Science & Robotics Fair',
    title: 'Won 1st Prize for my Solar-Powered Smart Farm Model!',
    medal: '🏆 District Science Olympiad Gold',
    story: 'Built a working solar irrigation pump using recycled solar cells and a micro-motor. The judges loved how it saves water! Inspired by the Fast vs Slow and Plant lessons!',
    badgeIcon: '🤖',
    badgeGradient: 'linear-gradient(135deg, #17324D 0%, #3e4a28 100%)',
    timestamp: '5 hours ago',
    reactions: { highfive: 64, star: 45, wow: 38, heart: 27 },
    userReacted: { highfive: false, star: false, wow: false, heart: false },
    verified: true
  },
  {
    id: 'post-3',
    authorName: 'Arjun Verma',
    authorGrade: 'Class 4 • Delhi',
    authorAvatar: '🥋',
    category: 'martialarts',
    categoryName: '🥋 Martial Arts & Sports',
    title: 'Earned my Taekwondo Green Belt & Sparring Medal!',
    medal: '🥋 Green Belt Honor • State Academy',
    story: '6 months of continuous training, kicks, and balance drills! Coach said patience and discipline matter more than strength. Next stop: Blue Belt!',
    badgeIcon: '🥋',
    badgeGradient: 'linear-gradient(135deg, #2b1f1d 0%, #17324D 100%)',
    timestamp: 'Yesterday',
    reactions: { highfive: 39, star: 28, wow: 19, heart: 24 },
    userReacted: { highfive: false, star: false, wow: false, heart: false },
    verified: true
  },
  {
    id: 'post-4',
    authorName: 'Ananya Rao',
    authorGrade: 'Class 4 • Chennai',
    authorAvatar: '🎨',
    category: 'art',
    categoryName: '🎨 Art & Creative Drawing',
    title: 'State Wildlife Drawing Contest — 1st Position!',
    medal: '🎨 Gold Medal • Young Artists Guild',
    story: 'Painted the Indian Bengal Tiger drinking by the river in watercolor. Spent 4 whole days getting the fur textures right. Art gives me so much joy!',
    badgeIcon: '🎨',
    badgeGradient: 'linear-gradient(135deg, #3d231e 0%, #17324D 100%)',
    timestamp: '2 days ago',
    reactions: { highfive: 72, star: 53, wow: 41, heart: 35 },
    userReacted: { highfive: false, star: false, wow: false, heart: false },
    verified: true
  }
];

export function initKidCircleSocial() {
  const feedContainer = document.querySelector('#kidCircleFeed');
  const postModal = document.querySelector('#shareAchievementModal');
  const openModalBtn = document.querySelector('#openShareModalBtn');
  const closeModalBtn = document.querySelector('#closeShareModalBtn');
  const postForm = document.querySelector('#shareAchievementForm');
  const categoryFilters = document.querySelectorAll('.kidcircle-filter-pill');

  let activeCategory = 'all';
  let posts = loadPosts();

  function loadPosts() {
    try {
      const saved = localStorage.getItem('edusync_kidcircle_posts');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return [...INITIAL_ACHIEVEMENTS];
  }

  function savePosts() {
    try {
      localStorage.setItem('edusync_kidcircle_posts', JSON.stringify(posts));
    } catch {}
  }

  function playHighFiveChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.12); // G5
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {}
  }

  function renderFeed() {
    if (!feedContainer) return;
    feedContainer.innerHTML = '';

    const filtered = activeCategory === 'all' 
      ? posts 
      : posts.filter(p => p.category === activeCategory);

    if (filtered.length === 0) {
      feedContainer.innerHTML = `
        <div class="kidcircle-empty-feed">
          <div style="font-size: 2.8rem; margin-bottom: 8px;">🌟</div>
          <h4>No achievements yet in this category</h4>
          <p>Be the first hero to share your triumph!</p>
          <button type="button" class="btn btn-teal" id="emptyPostBtn" style="margin-top: 12px; font-size: 0.875rem;">+ Share Your Achievement</button>
        </div>
      `;
      feedContainer.querySelector('#emptyPostBtn')?.addEventListener('click', () => openModal());
      return;
    }

    filtered.forEach(post => {
      const card = document.createElement('div');
      card.className = 'kidcircle-card';
      card.dataset.id = post.id;

      card.innerHTML = `
        <!-- Card Header -->
        <div class="kidcircle-card-header">
          <div class="kidcircle-author-box">
            <div class="kidcircle-author-avatar">${post.authorAvatar || '🌟'}</div>
            <div class="kidcircle-author-info">
              <div class="kidcircle-name-row">
                <strong>${post.authorName}</strong>
                ${post.verified ? '<span class="kidcircle-verified-pill" title="Parent & AI Verified">🛡️ Verified Safe</span>' : ''}
              </div>
              <span class="kidcircle-grade-text">${post.authorGrade} • ${post.timestamp}</span>
            </div>
          </div>
          <span class="kidcircle-category-tag">${post.categoryName}</span>
        </div>

        <!-- Trophy Banner & Photo Mockup -->
        <div class="kidcircle-trophy-banner" style="background: ${post.badgeGradient || 'linear-gradient(135deg, #17324D 0%, #2b5548 100%)'};">
          <div class="trophy-big-emblem">${post.badgeIcon || '🏆'}</div>
          <div class="trophy-banner-text">
            <span class="trophy-medal-pill">${post.medal}</span>
            <h3 class="trophy-banner-title">${post.title}</h3>
          </div>
        </div>

        <!-- Story Body -->
        <div class="kidcircle-story-body">
          <p>${post.story}</p>
        </div>

        <!-- Positive Reaction Bar -->
        <div class="kidcircle-reaction-bar">
          <button class="kidcircle-rx-btn ${post.userReacted?.highfive ? 'reacted' : ''}" data-rx="highfive" type="button" title="Give a High Five!">
            <span>👏</span>
            <span class="rx-label">High Five</span>
            <strong class="rx-count">${post.reactions.highfive}</strong>
          </button>

          <button class="kidcircle-rx-btn ${post.userReacted?.star ? 'reacted' : ''}" data-rx="star" type="button" title="Send Star Power!">
            <span>🌟</span>
            <span class="rx-label">Star</span>
            <strong class="rx-count">${post.reactions.star}</strong>
          </button>

          <button class="kidcircle-rx-btn ${post.userReacted?.wow ? 'reacted' : ''}" data-rx="wow" type="button" title="Super Wow!">
            <span>🚀</span>
            <span class="rx-label">Super Wow</span>
            <strong class="rx-count">${post.reactions.wow}</strong>
          </button>

          <button class="kidcircle-rx-btn ${post.userReacted?.heart ? 'reacted' : ''}" data-rx="heart" type="button" title="Proud of You!">
            <span>❤️</span>
            <span class="rx-label">Proud</span>
            <strong class="rx-count">${post.reactions.heart}</strong>
          </button>
        </div>
      `;

      // Wire Reaction Buttons
      const rxBtns = card.querySelectorAll('.kidcircle-rx-btn');
      rxBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const rxKey = btn.dataset.rx;
          const targetPost = posts.find(p => p.id === post.id);
          if (!targetPost) return;

          if (!targetPost.userReacted) targetPost.userReacted = {};

          if (targetPost.userReacted[rxKey]) {
            targetPost.reactions[rxKey] = Math.max(0, targetPost.reactions[rxKey] - 1);
            targetPost.userReacted[rxKey] = false;
            btn.classList.remove('reacted');
          } else {
            targetPost.reactions[rxKey] = (targetPost.reactions[rxKey] || 0) + 1;
            targetPost.userReacted[rxKey] = true;
            btn.classList.add('reacted');
            playHighFiveChime();

            // Reward positive social empathy points
            window.dispatchEvent(new CustomEvent('edusync_update_progress', {
              detail: { addPoints: 5 }
            }));
          }

          const countSpan = btn.querySelector('.rx-count');
          if (countSpan) countSpan.textContent = targetPost.reactions[rxKey];
          savePosts();
        });
      });

      feedContainer.appendChild(card);
    });
  }

  // Category filter tabs
  categoryFilters.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryFilters.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.category || 'all';
      renderFeed();
    });
  });

  // Open & Close Modal
  function openModal() {
    if (postModal) {
      postModal.classList.add('open');
      document.body.style.overflow = 'hidden';

      // Pre-fill student name if logged into Google Cloud
      try {
        const storedUser = localStorage.getItem('edusync_user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          const nameInput = document.querySelector('#achievementAuthorName');
          if (nameInput && user.name) {
            nameInput.value = user.name;
          }
        }
      } catch {}
    }
  }

  function closeModal() {
    if (postModal) {
      postModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  openModalBtn?.addEventListener('click', openModal);
  closeModalBtn?.addEventListener('click', closeModal);
  postModal?.addEventListener('click', (e) => {
    if (e.target === postModal) closeModal();
  });

  // Handle New Post Submission
  postForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#achievementAuthorName')?.value.trim() || 'Young Champion';
    const grade = document.querySelector('#achievementAuthorGrade')?.value.trim() || 'Class 4 CBSE';
    const category = document.querySelector('#achievementCategory')?.value || 'sports';
    const categoryNames = {
      'sports': '⚽ Sports & Athletics',
      'science': '🔬 Science & STEM',
      'art': '🎨 Art & Creativity',
      'martialarts': '🥋 Martial Arts & Sports',
      'edusync': '⭐ EduSync Milestone'
    };
    const title = document.querySelector('#achievementTitle')?.value.trim() || 'Exciting Achievement!';
    const medal = document.querySelector('#achievementMedal')?.value.trim() || '🏆 Champion Medal';
    const story = document.querySelector('#achievementStory')?.value.trim() || 'Had a fantastic learning and competition experience!';
    const icon = document.querySelector('#achievementIcon')?.value || '🏆';

    const newPost = {
      id: `post-${Date.now()}`,
      authorName: name,
      authorGrade: grade,
      authorAvatar: '👦',
      category: category,
      categoryName: categoryNames[category] || '🏆 Achievement',
      title: title,
      medal: medal,
      story: story,
      badgeIcon: icon,
      badgeGradient: 'linear-gradient(135deg, #17324D 0%, #2b5548 100%)',
      timestamp: 'Just now',
      reactions: { highfive: 1, star: 1, wow: 1, heart: 1 },
      userReacted: { highfive: true, star: false, wow: false, heart: false },
      verified: true
    };

    posts.unshift(newPost);
    savePosts();
    renderFeed();
    closeModal();
    postForm.reset();
    playHighFiveChime();

    // Reward achievement posting with +50 Learning Stars!
    window.dispatchEvent(new CustomEvent('edusync_update_progress', {
      detail: { addPoints: 50, addStreak: true }
    }));
  });

  // Initial render
  renderFeed();
}
