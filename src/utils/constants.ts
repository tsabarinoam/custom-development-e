export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user-preferences',
  APP_SETTINGS: 'app-settings',
  THEME: 'theme',
} as const;

export const API_ENDPOINTS = {
  BASE_URL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000',
} as const;

export const UI_CONFIG = {
  MAX_ITEMS_PER_PAGE: 20,
  ANIMATION_DURATION: 200,
  DEBOUNCE_DELAY: 300,
} as const;