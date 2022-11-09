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
  { id: 'be4b3f', caption: 'Nebula', tags: ['Painting'] },
  { id: '77ac1d', caption: 'Southern Ring Nebula', tags: ['Realistic'] },
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
  { id: '435163', caption: 'High Energy', tags: ['Realistic'] },
  { id: 'a673a0', caption: 'Planetary Nebula', tags: ['Realistic'] },
  { id: 'ba7d93', caption: 'Quasar Overseers', tags: ['Painting'] },
  { id: '3975a3', caption: 'Galaxy', tags: ['Realistic'] },
];
