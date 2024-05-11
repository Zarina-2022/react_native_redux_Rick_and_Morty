export const genderTypes = {
  MALE: 'Male',
  FEMALE: 'Female',
  UNKNOWN: 'unknown',
  ALIVE: 'Alive',
  DEAD: 'Dead',
};

export const statusTypes = {
  UNKNOWN: 'unknown',
  ALIVE: 'Alive',
  DEAD: 'Dead',
};

export const filterGender = [
  {
    id: 1,
    name: 'Male', // for frontend
    value: 'male', // for backend
  },
  {
    id: 2,
    name: 'Female',
    value: 'female',
  },
  {
    id: 3,
    name: 'Genderless',
    value: 'genderless',
  },
  {
    id: 4,
    name: 'Unknown',
    value: 'unknown',
  },
];

export const filterStatus = [
  {
    id: 1,
    name: 'Alive', // for frontend
    value: 'alive', // for backend
  },
  {
    id: 2,
    name: 'Dead',
    value: 'dead',
  },
  {
    id: 3,
    name: 'Unknown',
    value: 'unknown',
  },
];
