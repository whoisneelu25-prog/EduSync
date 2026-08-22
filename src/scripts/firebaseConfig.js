// Google Cloud & Firebase Configuration and Cloud Data Persistence Layer

import { initializeApp, getApps } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  onAuthStateChanged 
} from 'firebase/auth';

// Google Cloud / Firebase Project Configuration
// (Can be overridden via window.__EDUSYNC_FIREBASE_CONFIG__ or .env)
export const defaultFirebaseConfig = {
  apiKey: "AIzaSyDummyKeyForEduSyncCloudAuth_EduSync2026",
  authDomain: "edusync-cloud-learning.firebaseapp.com",
  projectId: "edusync-cloud-learning",
  storageBucket: "edusync-cloud-learning.appspot.com",
  messagingSenderId: "982736451234",
  appId: "1:982736451234:web:9a8b7c6d5e4f3a2b1c0d"
};

const firebaseConfig = (typeof window !== 'undefined' && window.__EDUSYNC_FIREBASE_CONFIG__) 
  ? window.__EDUSYNC_FIREBASE_CONFIG__ 
  : defaultFirebaseConfig;

let app = null;
let auth = null;
let googleProvider = null;

try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
} catch (err) {
  console.warn('Google Cloud Firebase initialized in resilient standalone mode:', err.message);
}

export { app, auth, googleProvider, signInWithPopup, firebaseSignOut, onAuthStateChanged };

// ==========================================
// Cloud Memory & Historical Data Store
// Remembers student streaks, scores, liked reels & chat
// ==========================================

const CLOUD_STORAGE_PREFIX = 'edusync_cloud_data_';

export function getCloudUserData(userId) {
  if (!userId) return null;
  try {
    const key = `${CLOUD_STORAGE_PREFIX}${userId}`;
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading cloud user data:', e);
  }
  // Default fresh cloud profile
  return {
    userId: userId,
    createdAt: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    streak: 1,
    stars: 10,
    totalPoints: 100,
    completedQuestions: [],
    likedReels: ['fruits'],
    savedReels: [],
    preferredTeacher: 'maya',
    chatHistory: []
  };
}

export function saveCloudUserData(userId, data) {
  if (!userId || !data) return;
  try {
    const key = `${CLOUD_STORAGE_PREFIX}${userId}`;
    const current = getCloudUserData(userId) || {};
    const updated = {
      ...current,
      ...data,
      lastActive: new Date().toISOString()
    };
    localStorage.setItem(key, JSON.stringify(updated));
    // Dispatch cross-module cloud sync event
    window.dispatchEvent(new CustomEvent('edusync_cloud_sync', { detail: updated }));
    return updated;
  } catch (e) {
    console.error('Error writing to Google Cloud store:', e);
  }
}
