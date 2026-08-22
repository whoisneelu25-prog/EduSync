// Google Authentication & User Profile Controller

const STORAGE_KEY = 'edusync_user_profile';

const DEFAULT_ACCOUNTS = [
  {
    name: 'Alex Rivera',
    email: 'alex.rivera@gmail.com',
    role: 'Student (Explorer)',
    avatar: '👦',
    grade: 'Grade 4',
    streak: 4,
    stars: 18
  },
  {
    name: 'Maya Chen',
    email: 'maya.chen@gmail.com',
    role: 'Student (Scientist)',
    avatar: '👧',
    grade: 'Grade 3',
    streak: 6,
    stars: 24
  },
  {
    name: 'Sarah Rivera',
    email: 'sarah.rivera.parent@gmail.com',
    role: 'Parent / Guardian',
    avatar: '👩‍💼',
    grade: 'Parent Portal',
    streak: 12,
    stars: 45
  }
];

export function initAuth() {
  let currentUser = loadUser();

  const authModal = document.querySelector('#googleAuthModal');
  const openAuthBtns = document.querySelectorAll('.open-auth-modal-btn');
  const closeAuthBtn = document.querySelector('.auth-close-btn');
  const googleSignInBtn = document.querySelector('#googleContinueBtn');
  const customEmailInput = document.querySelector('#customGoogleEmail');
  const customSignInBtn = document.querySelector('#customGoogleSubmitBtn');
  const quickAccountBtns = document.querySelectorAll('.quick-account-card');

  // Navbar user UI elements
  const navAuthContainer = document.querySelector('.nav-auth-container');

  function loadUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  function saveUser(user) {
    currentUser = user;
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    updateNavUI();
  }

  function updateNavUI() {
    if (!navAuthContainer) return;

    if (currentUser) {
      navAuthContainer.innerHTML = `
        <div class="nav-user-profile" id="userProfileDropdownTrigger">
          <div class="nav-user-avatar">${currentUser.avatar || '🎓'}</div>
          <div class="nav-user-details">
            <span class="nav-user-name">${currentUser.name.split(' ')[0]}</span>
            <span class="nav-user-badge">⭐ ${currentUser.stars} Stars</span>
          </div>
          <div class="user-dropdown-menu" id="userDropdownMenu">
            <div class="dropdown-header">
              <div class="dropdown-avatar">${currentUser.avatar || '🎓'}</div>
              <div>
                <strong>${currentUser.name}</strong>
                <div style="font-size: 0.75rem; color: var(--color-text-secondary);">${currentUser.email}</div>
                <span class="dropdown-role-pill">${currentUser.role}</span>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-stats-grid">
              <div class="stat-mini-box">
                <span class="stat-num">${currentUser.streak}🔥</span>
                <span class="stat-label">Day Streak</span>
              </div>
              <div class="stat-mini-box">
                <span class="stat-num">${currentUser.stars}⭐</span>
                <span class="stat-label">Mastery</span>
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
      signOutBtn?.addEventListener('click', () => {
        saveUser(null);
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

  // Google Continue Default
  googleSignInBtn?.addEventListener('click', () => {
    saveUser(DEFAULT_ACCOUNTS[0]);
    closeModal();
    showWelcomeToast(`Welcome back, ${DEFAULT_ACCOUNTS[0].name}! 🚀`);
  });

  // Quick account cards
  quickAccountBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const account = DEFAULT_ACCOUNTS[idx] || DEFAULT_ACCOUNTS[0];
      saveUser(account);
      closeModal();
      showWelcomeToast(`Signed in as ${account.name} (${account.role})! ✨`);
    });
  });

  // Custom email submit
  customSignInBtn?.addEventListener('click', () => {
    const email = customEmailInput?.value.trim();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid Google email address.');
      return;
    }
    const name = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const newUser = {
      name: name || 'EduSync Learner',
      email: email,
      role: 'Student (Explorer)',
      avatar: '🌟',
      grade: 'Custom Profile',
      streak: 1,
      stars: 10
    };
    saveUser(newUser);
    closeModal();
    showWelcomeToast(`Welcome to EduSync, ${newUser.name}! 🌟`);
  });

  function showWelcomeToast(message) {
    const toast = document.createElement('div');
    toast.className = 'auth-toast-notification';
    toast.innerHTML = `<span>✨</span> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-user-profile')) {
      document.querySelectorAll('.user-dropdown-menu').forEach(m => m.classList.remove('show'));
    }
  });

  // Initial UI Render
  updateNavUI();
}
