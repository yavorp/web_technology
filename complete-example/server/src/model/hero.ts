export interface Hero {
  id: number;
  name: string;
  power: string;
}


export const MOCK_HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice', power: 'niceness' },
  { id: 12, name: 'Narco', power: 'cocaine' },
  { id: 13, name: 'Bombasto', power: 'boomb' },
  { id: 14, name: 'Celeritas', power: 'random power' },
  { id: 15, name: 'Magneta', power: 'Magnets' },
  { id: 16, name: 'RubberMan', power: 'Elasticity' }
];
