export enum Language {
  CS,
  EN,
}

export enum PathSearchStatus {
  SEARCHING,
  FAILED_SEARCH,
  FAILED_FETCH,
  NONE,
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

export type Message = {
  text: string;
  icon: string;
  error?: boolean;
  search?: boolean;
};

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

export function enterKeyPress(e: any, cb: any) {
  e.target.focus();
  if (e.key === 'Enter') cb();
}


