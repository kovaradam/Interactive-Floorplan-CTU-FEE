export default {
  default: {
    building: 'T2',
    location: 'T2',
    floor: 0,
    language: window.localStorage.getItem('language') === null ? 0 : Number.parseInt(window.localStorage.getItem('language')!)
  }
};
