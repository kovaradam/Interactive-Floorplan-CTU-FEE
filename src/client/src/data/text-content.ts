export default {
  title: ['Interaktivní plán ČVUT FEL', 'CTU FEE Interactive Floorplan'],
  'search-placeholder': ['Zadejte číslo třídy nebo jméno osoby', 'Insert room number or a name of an employee'],
  searchPathBox: {
    'search-path-placeholder': ['Vybete objekt na mapě', 'Select object on the map'],
    start: ['Start:', 'Start:'],
    end: ['Cíl:', 'End:']
  },
  'filters-header-title': ['Kategorie', 'Filters'],
  info: { help: ['Nápověda', 'Help'], ref: ['Fel', 'FEE'] },
  searchStatus: {
    active: ['Vyhledávám...', 'Searching...'],
    notFound: ['Dotaz nebyl nalezen', 'Could not find given item'],
    noPersonFound: ['Osoba nebyla nalezena', 'No such person found'],
    classroomNotFound: ['Třída nebyla nalezena', 'Could not find given classroom'],
    wrongBuilding: [
      'K osobě se nevztahuje žádná místnost v uvedených budovách',
      'Person has no room assigned in avalaible buildings'
    ],
    roomNotInMap: [
      'Místnost osoby momentálně není zakreslena v mapě',
      'Room of given person is currently not avalaible in this map'
    ],
    connectionLost: ['Spojení bylo přerušeno', 'Connection was lost'],
    noPersonWithRooms: [
      'Nalezené osoby momentálně nemají přiřazenou žádnou místnost',
      'Found no people with rooms assigned'
    ],
    noUsermapApiResponse: ['Nelze se připojit ke službě Usermap', 'Cannot get response from Usermap'],
    pathNotFound: ['Nepodařilo se nalézt trasu', 'Path could not be found']
  },
  messages: {
    copy: ['Odkaz zkopírován do schránky', 'Link copied to clipboard']
  },
  types: {
    0: ['Administrativa', 'Administrative services'],
    1: ['Občerstvení', 'Food'],
    2: ['Zdraví', 'Health'],
    3: ['Studovna', 'Study room'],
    4: ['Toalety', 'WC'],
    5: ['Přístupnost', 'Accessibility'],
    6: ['Schodiště', 'Stairs'],
    7: ['Výtah', 'Elevator'],
    8: ['Páternoster', 'Paternoster'],
    9: ['Laboratoř', 'Laboratory'],
    10: ['Posluchárna', 'Lecture room'],
    11: ['Kancelář', 'Office'],
    12: ['Cvičebna', 'Tutorial room'],
    13: ['Zasedací místnost', 'Conference room'],
    14: ['Počítačová učebna', 'Computer classroom'],
    15: ['Služby', 'Facilities']
  },
  legend: {
    classrooms: ['Učebny', 'Classrooms'],
    offices: ['Kanceláře', 'Offices'],
    services: ['Služby a administrativa', 'Facilities and services']
  },
  entry: ['Vstup', 'Entry'],
  share: ['Sdílet', 'Share'],
  path: ['Trasa', 'Path'],
  buildingNotAvalaible: ['Plány budovy momentálně nejsou k dispozici.', 'Floorplans of this building are not yet avalaible']
};
