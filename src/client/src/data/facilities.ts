import { Type } from '../utils/utils';

export const filters = [
  { title: ['Zdraví', 'Health'], type: Type.HEALTH, selected: false },
  { title: ['Studovny','Study rooms'], type: Type.STUDY, selected: false},
  {
    title: ['Administrativa', 'Administrative services'],
    type: Type.SERVICES,
    selected: true,
  },
  { title: ['Služby', 'Facilities'], type: Type.FACILITY, selected: false },
  { title: ['Občerstvení', 'Food'], type: Type.FOOD, selected: false },
];

export const facilities = {
  T2: [
    {
      title: ['Defibrilátor', 'Defibrillator'],
      id: 'defibrillator',
      icon: 'fa fa-heartbeat',
      type: [Type.HEALTH],
      selected: false,
      floor: 0,
      x: 509,
      y: 399,
      desc:['Automatický externí defibrilátor', 'Automated external defibrilator'],
      building: 'T2'
    },
    {
      title: ['Fel-Caffé','Fel-Caffé'],
      id: 'fel-cafe',
      icon: 'fa fa-coffee',
      type: [Type.STUDY, Type.FOOD],
      selected: false,
      floor: 0,
      x: 260,
      y: 367,
      desc:['Studovna spojená s kavárnou','Café with study room'],
      points: '187,243 187,310 237,310 237,243',
      building: 'T2'
    },
    {
      title: ['Bufet', 'Canteen' ],
      id: 'canteen',
      icon: 'fa fa-cutlery',
      type: [Type.FOOD],
      selected: false,
      floor: 1,
      x: 524,
      y: 390,
      points: '400,276 404,305 442,305 445,276',
      building: 'T2',
      desc:['Občerstvení, káva, obědy... ','Coffee, snacks and lunch menu'],
    },
    {
      title: ['Automaty', 'Vending machines' ],
      id: 'vm-T2-0',
      icon: '',
      type: [Type.FOOD],
      selected: false,
      floor: 0,
      desc:['Studené a teplé nápoje, občerstvení','Hot/cold beverages, snacks'],
      x: 415,
      y: 348,
      building: 'T2'
    },
    {
      title: ['Studijní oddělení', 'Student office'],
      id: 'study-department',
      icon: 'fa fa-graduation-cap',
      type: [Type.SERVICES],
      selected: false,
      floor: 0,
      desc:['Centrum pro organizaci studijních náležitostí','Help with organiozational issues for students'],
      points: '292,270 292,367 341,367 341,270',
      x: 388,
      y: 427,
      building: 'T2'
    },
    {
      title:[ 'Tiskárna',  'Printer'] ,
      id: 'printer',
      icon: 'fa fa-print',
      type: [Type.FACILITY],
      selected: false,
      floor: 0,
      x: 315,
      y: 327,
      building: 'T2'
    },
    {
      title: ['TZS Automat',  'TZS ATM' ],
      id: 'tzs-atm',
      icon: 'fa fa-credit-card-alt',
      type: [Type.FACILITY],
      selected: false,
      floor: 0,
      x: 335,
      y: 327,
      building: 'T2'
    },
    {
      title: ['Fotoateliér', 'Photo studio'],
      id: 'photo-studio',
      icon: 'fa fa-camera-retro',
      type: [Type.FACILITY],
      selected: false,
      floor: -1,
      x: 410,
      y: 470,
      points: '320,340 320,367 341,367 341,340',
      building: 'T2'
    },
    {
      title: ['Šatna', 'Cloakroom'],
      id: 'cloakroom',
      icon: '',
      type: [Type.FACILITY],
      selected: false,
      floor: -1,
      x: 520,
      y: 357,
      points: '413,243 413,280 433,280 433,243',
      building: 'T2'
    },
    {
      title: ['Kolárna', 'Bicycle stand'],
      id: 'bike-stand',
      icon: 'fa fa-bicycle',
      type: [Type.FACILITY],
      selected: false,
      floor: -1,
      x: 545,
      y: 363,
      building: 'T2'
    },
    {
      title: ['Úschovna', 'Locker'],
      id: 'locker',
      icon: 'fa fa-lock',
      type: [Type.FACILITY],
      selected: false,
      floor: -1,
      x: 500,
      y: 363,
      building: 'T2'
    },
    {
      title: ['Poradenské centrum', 'Student advisory centre' ],
      id: 'poradcentrum',
      icon: 'fa fa-info-circle',
      type: [Type.SERVICES],
      selected: false,
      floor: 0,
      x: 390,
      y: 300,
      points: '306,203 306,230 326,230 326,203',
      building: 'T2',
      desc: ['Poradenství pro studenty a uchazeče o studium', 'Advisory centre for students and applicants']
    },
    {
      title: ['Copycentrum', 'Copycentrum' ],
      id: 'copycentrum',
      icon: 'fa fa-file-o',
      type: [Type.FACILITY],
      selected: false,
      floor: 0,
      x: 478,
      y: 300,
      points: '378,203 378,230 395,230 395,203',
      building: 'T2'
    },
    {
      title: ['VVZS', 'VVZS'],
      id: 'vvzs',
      icon: 'fa fa-university',
      type: [Type.SERVICES],
      selected: false,
      floor: 0,
      x: 652,
      y: 450,
      desc:['Odd. pro vědu, výzkum a zarhaniční styky', 'Science, research and foreign affairs'],
      points:'503,312 503,367 552,367 552,312',
      building: 'T2'
    },
    {
      title: ['Podatelna','Mail room'],
      id: 'podatelna',
      icon: 'fa fa-inbox',
      type: [Type.SERVICES],
      selected: false,
      floor: 0,
      x: 635,
      y: 386,
      points:'503,275 503,296 524,296 524,275',
      building: 'T2'
    },
    {
      title: ['Dětský koutek', 'Kindergarten'],
      id: 'detskykoutek',
      icon: '',
      type: [Type.FACILITY],
      selected: false,
      floor: 0,
      x: 215,
      y: 300,
      points: '166,203 166,230 186,230 186,203',
      building: 'T2'

      
    },
    {
      title: ['Děkanát', 'Administrative offices'],
      id: 'administrative-offices',
      icon: 'fa fa-gavel',
      type: [Type.SERVICES],
      selected: false,
      floor: 1,
      x: 652,
      y: 410,
      points:'503,270 503,367 552,367 552,270',
      building: 'T2'

      
    },
    {
      title: ['Sborovna', 'Staffroom' ],
      id: 'sborovna',
      icon: 'fa fa-users',
      type: [Type.SERVICES],
      selected: false,
      floor: 3,
      x: 670,
      y: 328,
      points:'532,230 532,243 552,243 552,230',
      building: 'T2'
    },
    {
      title: ['Počítačová studovna', 'Computer lab' ],
      id: 'computer-lab',
      icon: 'fa fa-desktop',
      type: [Type.STUDY, Type.FACILITY],
      desc:['PC studovna pro studenty FEL', 'PC study room for FEE students'],
      selected: false,
      floor: 4,
      x: 652,
      y: 434,
      building: 'T2'

    }
  ],
  KN: []
};
