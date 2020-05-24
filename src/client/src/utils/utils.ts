export enum Language {
  CS,
  EN,
}

export type locationCode = 'T2' | 'KN';

export type message = {
  text: string;
  icon: string;
  error?: boolean;
  search?: boolean;
};

export type PathSearchStatus = 'searching' | 'failed-search' | 'failed-fetch' | 'none';

export const toiletTypes = {
  f: 'fa fa-female',
  m: 'fa fa-male',
  h: 'fa fa-wheelchair',
};

export function normalizeToMapX(x: number) {
  const res = x / 7.2;
  return `${res.toFixed(2)}%`;
}
export function normalizeToMapY(y: number) {
  const res = y / 5.4;
  return `${res.toFixed(2)}%`;
}

export function getFloorString(n: number) {
  switch (n) {
    case -1:
      return ['suterén', 'basement'];
    case 0:
      return ['přízemí', 'ground floor'];
    case 1:
      return ['1. patro', '1st floor'];
    case 2:
      return ['2. patro', '2nd floor'];
    case 3:
      return ['3. patro', '3rd floor'];
    default:
      return [n + '. patro', n + 'th floor'];
  }
}

export const removeDiacritic = (input: string) => {
  const a = 'áäčçďéěëíňóöřšťúůüýž';
  const b = 'aaccdeeeinoorstuuuyz';
  for (let i = 0; i < input.length; i++) {
    const index = a.indexOf(input.charAt(i));
    if (index >= 0) {
      input = input.substring(0, i) + b.charAt(index) + input.substring(i + 1);
    }
  }
  return input;
};

export function enterKeyPress(e: any, cb: any) {
  e.target.focus();
  if (e.key === 'Enter') cb();
}

export enum Type {
  SERVICES,
  FOOD,
  HEALTH,
  STUDY,
  WC,
  ACCESSIBILITY,
  STAIR,
  ELEVATOR,
  PATER,
  LABORATORY,
  LECTURE,
  OFFICE,
  TUTORIAL,
  CONFERENCE,
  COMPUTER,
  FACILITY,
}
