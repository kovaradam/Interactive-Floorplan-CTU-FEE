import { Type } from './utils';

export interface Path {
  floor: number;
  building: string;
  points: string;
}

export interface PathResult extends Path {
  startId: string;
  endId: string;
}

interface poi {
  x: number;
  y: number;
  floor: number;
  id: string;
  building: string;
}

export interface MapItem extends poi {
  desc?: string;
  type?: Type;
  title: string;
}

export interface Vertical {
  id: string;
  from: number;
  to: number;
  accessibility: boolean;
  x: number;
  y: number;
  type: Type;
  icon?: string;
}

export interface Filter {
  title: string[];
  type: Type;
  selected: boolean;
}

export interface Facility extends poi {
  title: [string, string];
  icon: string;
  type: Type[];
  selected: boolean;
  desc?: [string, string];
}

export interface Room extends poi {
  type: Type;
  desc?: [string, string];
}
