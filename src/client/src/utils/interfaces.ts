import { Type, locationCode } from './utils';

interface Location {
  id: number;
  title: locationCode;
  key: string;
  selected: boolean;
}
export interface Building extends Location {
  floorRange: { from: number; to: number };
}

export interface Path {
  floor: number;
  building: string;
  points:string;
}

export interface PathResult {
  startId: string;
  floor:number;
  endId: string;
  building: string;
  points:string;
}

export interface MapItem {
  x: number;
  y: number;
  floor: number;
  id: string;
  name: string;
  building: string;
  type?: Type;
  desc?: string;
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
export interface Facility {
  title: [string, string];
  id: string;
  icon: string;
  type: Type[];
  selected: boolean;
  floor: number;
  x: number;
  y: number;
  desc?: [string,string],
  building: string
}

export interface Room {
  id: string;
  d: string;
  x: number;
  y: number;
  floor: number;
  type: Type;
  desc?: [string,string]
  building?: string
}
