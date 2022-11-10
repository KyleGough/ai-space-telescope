type ImageTag = 'Realistic' | 'Painting';
export type Filter = ImageTag | 'All';

export interface ImageData {
  id: string;
  caption: string;
  tags: ImageTag[];
}

export const images: ImageData[] = [
  { id: '14c127', caption: 'Gateway to a black hole', tags: ['Painting'] },
  { id: '8c0104', caption: 'Nebula', tags: ['Painting'] },
  { id: '16d6c7', caption: 'Acretion Disk', tags: ['Realistic'] },
  { id: '048865', caption: 'Desert planet with moons', tags: ['Painting'] },
  { id: '5be10c', caption: 'Nebula', tags: ['Realistic'] },
  { id: '77ac1d', caption: 'Southern Ring Nebula', tags: ['Realistic'] },
  { id: '32d714', caption: 'Red Galaxy', tags: ['Realistic'] },
  { id: 'a9ca69', caption: 'Black Hole', tags: ['Painting'] },
  { id: 'cc05a4', caption: 'Carina Nebula', tags: ['Realistic'] },
  { id: 'd63380', caption: 'Pillars of Creation', tags: ['Realistic'] },
  { id: 'cd6530', caption: 'Supermassive Black Hole', tags: ['Painting'] },
  { id: '46186f', caption: 'Black Hole', tags: ['Realistic'] },
  { id: '392772', caption: 'Milky Way Galaxy', tags: ['Realistic'] },
  { id: '3dadaf', caption: 'Solar System Watercolour', tags: ['Painting'] },
  { id: '0db0a4', caption: 'Nebula', tags: ['Painting'] },
  { id: 'b3e9a1', caption: 'Galaxy', tags: ['Realistic'] },
  { id: '6073e0', caption: 'Colourful Black Hole', tags: ['Painting'] },
  { id: '0a8a35', caption: 'Trifid Nebula', tags: ['Realistic'] },
  { id: '2d9157', caption: 'Trifid Nebula', tags: ['Realistic'] },
  { id: '3ee8dc', caption: 'Solar System Formation', tags: ['Realistic'] },
  { id: '7205b2', caption: 'Alien Planet', tags: ['Painting'] },
  { id: '3ab0f6', caption: 'Pillars of Creation', tags: ['Realistic'] },
  { id: 'a673a0', caption: 'Planetary Nebula', tags: ['Realistic'] },
  { id: 'ba7d93', caption: 'Quasar Overseers', tags: ['Painting'] },
  { id: '3975a3', caption: 'Galaxy', tags: ['Realistic'] },
  { id: '0a20c2', caption: 'Moons on the horizon', tags: ['Realistic'] },
  { id: '2b0d51', caption: 'Pillars of Creation', tags: ['Realistic'] },
  { id: '2100a8', caption: 'Black Hole', tags: ['Painting'] },
  { id: 'dfc555', caption: 'Nebula', tags: ['Realistic'] },
  { id: 'f8edda', caption: 'Alien City', tags: ['Painting'] },
  { id: 'fc11e2', caption: 'Nebula', tags: ['Realistic'] },
  { id: '96c05d', caption: 'Desert planet with moons', tags: ['Realistic'] },
  { id: '050aec', caption: 'Nebula', tags: ['Realistic'] },
  { id: 'ecb7ee', caption: 'Moon in the sky', tags: ['Realistic'] },
  { id: 'be4b3f', caption: 'Nebula', tags: ['Painting'] },
  { id: 'dbcb92', caption: 'Nebula', tags: ['Realistic'] },
  { id: '4c034a', caption: 'Nebula', tags: ['Realistic'] },
  { id: '084cb0', caption: 'Galaxy', tags: ['Realistic'] },
  { id: '475cb3', caption: 'Galaxy', tags: ['Realistic'] },
  { id: 'ac8795', caption: 'Nebula', tags: ['Realistic'] },
  { id: 'acfdd3', caption: 'Galaxy', tags: ['Realistic'] },
  { id: 'b923ec', caption: 'Creation around black hole', tags: ['Painting'] },
  { id: 'd461e0', caption: 'Pillars of creation', tags: ['Realistic'] },
  { id: 'fcd55f', caption: 'Green sky with nebula', tags: ['Realistic'] },
  { id: 'ff1c25', caption: 'Pillars of creation', tags: ['Realistic'] },
];
