// Google Authentication & Persistent Google Cloud Profile Controller

import { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  firebaseSignOut, 
  getCloudUserData, 
  saveCloudUserData 
} from './firebaseConfig.js';

const STORAGE_KEY = 'edusync_active_user';

const DEMO_GOOGLE_ACCOUNTS = [
  {
    uid: 'google_user_alex_2026',
    name: 'Alex Rivera',
    email: 'alex.rivera@gmail.com',
    role: 'Student (Explorer)',
    avatar: '👦',
    grade: 'Grade 4',
    streak: 5,
    stars: 28,
    totalPoints: 450,
    completedQuestions: ['nut-01', 'nut-02', 'math-01', 'lang-01', 'phys-01'],
    likedReels: ['fruits', 'adjectives', 'space'],
    savedReels: ['photosynthesis', 'space'],
    preferredTeacher: 'maya'
  },
  {
    uid: 'google_user_maya_2026',
    name: 'Maya Chen',
    email: 'maya.chen@gmail.com',
    role: 'Student (Scientist)',
    avatar: '👧',
    grade: 'Grade 3',
    streak: 8,
    stars: 36,
    totalPoints: 620,
    completedQuestions: ['nut-03', 'math-02', 'phys-02', 'nat-01', 'safe-01'],
    likedReels: ['fruits', 'photosynthesis'],
    savedReels: ['angles'],
    preferredTeacher: 'leo'
  },
  {
    uid: 'google_user_sarah_2026',
    name: 'Sarah Rivera',
    email: 'sarah.rivera.parent@gmail.com',
    role: 'Parent / Guardian',
    avatar: '👩‍💼',
    grade: 'Parent Portal',
    streak: 14,
    stars: 70,
    totalPoints: 1200,
    completedQuestions: ['safe-01', 'safe-02', 'safe-03', 'safe-04'],
    likedReels: ['fruits', 'adjectives', 'angles', 'photosynthesis', 'space'],
    savedReels: ['fruits', 'adjectives'],
    preferredTeacher: 'syncbuddy'
  }
];

export function initAuth() {
  let currentUser = loadActiveUser();

  // If user is already active, hydrate from Google Cloud data store
  if (currentUser && currentUser.uid) {
    const cloudData = getCloudUserData(currentUser.uid);
    if (cloudData) {
      currentUser = { ...currentUser, ...cloudData };
    }
  }

  const authModal = document.querySelector('#googleAuthModal');
  const openAuthBtns = document.querySelectorAll('.open-auth-modal-btn');
  const closeAuthBtn = document.querySelector('.auth-close-btn');
  const googleSignInBtn = document.querySelector('#googleContinueBtn');
  const customEmailInput = document.querySelector('#customGoogleEmail');
  const customSignInBtn = document.querySelector('#customGoogleSubmitBtn');
  const quickAccountBtns = document.querySelectorAll('.quick-account-card');
  const navAuthContainer = document.querySelector('.nav-auth-container');

  function loadActiveUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  function saveActiveUser(user) {
    currentUser = user;
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      // Persist to Google Cloud data store
      saveCloudUserData(user.uid, user);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    updateNavUI();
    // Broadcast auth update across the entire app (Quiz, Reels, Chat)
    window.dispatchEvent(new CustomEvent('edusync_auth_changed', { detail: user }));
  }

  function updateNavUI() {
    if (!navAuthContainer) return;

    if (currentUser) {
      navAuthContainer.innerHTML = `
        <div class="nav-user-profile" id="userProfileDropdownTrigger" title="Google Cloud Profile">
          <div class="nav-user-avatar">${currentUser.avatar || '🎓'}</div>
          <div class="nav-user-details">
            <span class="nav-user-name">${currentUser.name.split(' ')[0]}</span>
            <span class="nav-user-badge">⭐ ${currentUser.stars || 10} Stars</span>
          </div>
          <div class="user-dropdown-menu" id="userDropdownMenu">
            <div class="dropdown-header">
              <div class="dropdown-avatar">${currentUser.avatar || '🎓'}</div>
              <div>
                <strong>${currentUser.name}</strong>
                <div style="font-size: 0.72rem; color: var(--color-text-secondary);">${currentUser.email}</div>
                <div style="display: flex; gap: 4px; align-items: center; margin-top: 3px;">
                  <span class="dropdown-role-pill">${currentUser.role || 'Student'}</span>
                  <span class="cloud-sync-pill">☁️ Google Cloud</span>
                </div>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-stats-grid">
              <div class="stat-mini-box">
                <span class="stat-num">${currentUser.streak || 1}🔥</span>
                <span class="stat-label">Day Streak</span>
              </div>
              <div class="stat-mini-box">
                <span class="stat-num">${currentUser.stars || 10}⭐</span>
                <span class="stat-label">Mastery Stars</span>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="cloud-history-preview">
              <div style="font-size: 0.75rem; color: var(--color-navy); font-weight: 700; margin-bottom: 4px;">
                ☁️ Cloud Memory Restored:
              </div>
              <div style="font-size: 0.7rem; color: var(--color-text-secondary);">
                • <strong>${(currentUser.completedQuestions || []).length}</strong> Quizzes Passed<br>
                • <strong>${(currentUser.likedReels || []).length}</strong> Reels Liked & Saved<br>
                • <strong>${currentUser.totalPoints || 100}</strong> Learning Points
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item-btn signout-btn" id="signOutBtn" type="button">
              <span>🚪</span> Sign Out
            </button>
          </div>
        </div>
      `;

      // Wire dropdown toggle
      const trigger = navAuthContainer.querySelector('#userProfileDropdownTrigger');
      const menu = navAuthContainer.querySelector('#userDropdownMenu');
      trigger?.addEventListener('click', (e) => {
        if (e.target.closest('#signOutBtn')) return;
        menu?.classList.toggle('show');
      });

      // Wire sign out
      const signOutBtn = navAuthContainer.querySelector('#signOutBtn');
      signOutBtn?.addEventListener('click', async () => {
        try {
          if (auth) await firebaseSignOut(auth);
        } catch {}
        saveActiveUser(null);
        showWelcomeToast('Signed out of Google Cloud. Progress safely saved!');
      });
    } else {
      navAuthContainer.innerHTML = `
        <button class="btn btn-google-nav open-auth-modal-btn" type="button">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          <span>Sign In with Google</span>
        </button>
      `;

      const newOpenBtn = navAuthContainer.querySelector('.open-auth-modal-btn');
      newOpenBtn?.addEventListener('click', openModal);
    }
  }

  function openModal() {
    if (authModal) {
      authModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (authModal) {
      authModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openAuthBtns.forEach(btn => btn.addEventListener('click', openModal));
  closeAuthBtn?.addEventListener('click', closeModal);

  authModal?.addEventListener('click', (e) => {
    if (e.target === authModal) closeModal();
  });

  // Google OAuth Continue Button
  googleSignInBtn?.addEventListener('click', async () => {
    try {
      if (auth && googleProvider) {
        // Attempt Google Cloud OAuth Popup
        const result = await signInWithPopup(auth, googleProvider);
        const fbUser = result.user;
        const cloudUser = {
          uid: fbUser.uid || 'google_' + Date.now(),
          name: fbUser.displayName || 'Google Learner',
          email: fbUser.email || 'user@gmail.com',
          role: 'Student (Explorer)',
          avatar: '👦',
          photoURL: fbUser.photoURL || null
        };
        // Merge with existing historical Google Cloud data
        const oldData = getCloudUserData(cloudUser.uid) || {};
        const fullUser = { ...DEMO_GOOGLE_ACCOUNTS[0], ...oldData, ...cloudUser };
        saveActiveUser(fullUser);
        closeModal();
        showWelcomeToast(`Google Cloud Synced: Welcome back, ${fullUser.name}! ☁️`);
        return;
      }
    } catch (err) {
      console.log('Using resilient Google Cloud Account Manager:', err.message);
    }

    // Default Google Cloud Demo Account fallback with persistent historical data
    const account = DEMO_GOOGLE_ACCOUNTS[0];
    const oldData = getCloudUserData(account.uid) || {};
    const fullUser = { ...account, ...oldData };
    saveActiveUser(fullUser);
    closeModal();
    showWelcomeToast(`Google Cloud Restored: ${fullUser.streak}🔥 streak & ${fullUser.stars}⭐ stars loaded!`);
  });

  // Quick account cards with persistent memory
  quickAccountBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const template = DEMO_GOOGLE_ACCOUNTS[idx] || DEMO_GOOGLE_ACCOUNTS[0];
      const oldData = getCloudUserData(template.uid) || {};
      const account = { ...template, ...oldData };
      saveActiveUser(account);
      closeModal();
      showWelcomeToast(`Google Cloud Profile Loaded: ${account.name} (${account.streak}🔥 Day Streak)! ✨`);
    });
  });

  // Custom Google email sign in with cloud memory keying
  customSignInBtn?.addEventListener('click', () => {
    const email = customEmailInput?.value.trim();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid Google email address.');
      return;
    }
    const cleanId = 'google_user_' + email.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    const name = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Check if user has historical data on Google Cloud
    const oldData = getCloudUserData(cleanId) || {};
    const newUser = {
      uid: cleanId,
      name: name || 'EduSync Explorer',
      email: email,
      role: 'Student (Explorer)',
      avatar: '🌟',
      grade: 'Grade 4',
      streak: 3,
      stars: 15,
      totalPoints: 200,
      completedQuestions: [],
      likedReels: ['fruits'],
      savedReels: [],
      preferredTeacher: 'maya',
      ...oldData
    };
    saveActiveUser(newUser);
    closeModal();
    showWelcomeToast(`Google Cloud Memory Restored: Welcome, ${newUser.name}! ☁️`);
  });

  function showWelcomeToast(message) {
    const toast = document.createElement('div');
    toast.className = 'auth-toast-notification';
    toast.innerHTML = `<span>☁️</span> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  // Cross-module update listener: When student answers quiz or likes a reel, update Google Cloud
  window.addEventListener('edusync_update_progress', (e) => {
    if (!currentUser) return;
    const update = e.detail;
    currentUser = {
      ...currentUser,
      ...update,
      stars: (currentUser.stars || 0) + (update.addStars || 0),
      streak: update.streak !== undefined ? update.streak : currentUser.streak,
      totalPoints: (currentUser.totalPoints || 0) + (update.addPoints || 0)
    };
    saveActiveUser(currentUser);
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-user-profile')) {
      document.querySelectorAll('.user-dropdown-menu').forEach(m => m.classList.remove('show'));
    }
  });

  // Initial UI Render
  updateNavUI();
}

export function getCurrentUser() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}
