import { Language } from './misc-utils';

export function getLocalStorageLanguage() {
  return window.localStorage.getItem('language') === null
    ? Language.CS
    : Number.parseInt(window.localStorage.getItem('language')!);
}

export function setLocalStorageLanguage(language: Language) {
  window.localStorage.setItem('language', language + '');
}

export function getLocalStorageAccessibility() {
  return window.localStorage.getItem('accessibility') === 'on';
}

export function setLocalStorageAccessibility(accessibility:boolean) {
  window.localStorage.setItem('accessibility', accessibility ? 'on' : 'off');
}
