/**
 * Cookie utility functions for persisting user preferences
 */

export function setCookie(name: string, value: string, days: number = 365): void {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

export function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
}

export function deleteCookie(name: string): void {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

// Background shader types - all available shaders (removed matrix rain)
export type BackgroundShader =
  | 'liquid-crystal'
  | 'abstract-glassy'
  | 'aurora'
  | 'ripple'
  | 'lines'
  | 'none';

// All shader options (excluding 'none' for random selection)
export const ALL_SHADERS: BackgroundShader[] = [
  'liquid-crystal',
  'abstract-glassy',
  'aurora',
  'ripple',
  'lines',
];

// Shader display names
export const SHADER_NAMES: Record<BackgroundShader, string> = {
  'liquid-crystal': 'Liquid Glass',
  'abstract-glassy': 'Abstract Glass',
  'aurora': 'Aurora',
  'ripple': 'Ripple',
  'lines': 'Lines',
  'none': 'None',
};

const SHADER_COOKIE_KEY = 'background-shader';

export function getBackgroundShaderPreference(): BackgroundShader | null {
  const value = getCookie(SHADER_COOKIE_KEY);
  if (value && ALL_SHADERS.includes(value as BackgroundShader)) {
    return value as BackgroundShader;
  }
  if (value === 'none') {
    return 'none';
  }
  return null; // No preference saved, will use default (aurora)
}

export function setBackgroundShaderPreference(shader: BackgroundShader): void {
  setCookie(SHADER_COOKIE_KEY, shader);
}

export function getDefaultShader(): BackgroundShader {
  return 'aurora';
}

export function getNextShader(current: BackgroundShader): BackgroundShader {
  // Include 'none' at the end of the cycle
  const allOptions: BackgroundShader[] = [...ALL_SHADERS, 'none'];
  const currentIndex = allOptions.indexOf(current);
  const nextIndex = (currentIndex + 1) % allOptions.length;
  return allOptions[nextIndex];
}
