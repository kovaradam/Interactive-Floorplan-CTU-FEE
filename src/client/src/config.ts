import { getLocalStorageLanguage } from "./utils/local-storage-utils";

export default {
  default: {
    building: 'T2',
    location: 'T2',
    floor: 0,
    language: getLocalStorageLanguage()
  }
};
