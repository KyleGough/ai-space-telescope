type Model =
  | 'PicLumen Realistic V2'
  | 'Imagen 3'
  | 'FLUX.1-schnell'
  | 'DALLE 2';

export interface ImageData {
  id: string;
  caption: string;
  model: Model;
}

export const images: ImageData[] = [
  { id: '4d577f', caption: 'Nebula', model: 'PicLumen Realistic V2' },
  { id: '931c37', caption: 'Space Shuttle', model: 'PicLumen Realistic V2' },
  { id: 'c87b4d', caption: 'Galaxy', model: 'PicLumen Realistic V2' },
  { id: 'f1477f', caption: 'Nebula', model: 'PicLumen Realistic V2' },
  { id: '6e5425', caption: 'Jupiter', model: 'Imagen 3' },
  {
    id: '3e566a',
    caption: 'Futuristic spaceship',
    model: 'FLUX.1-schnell',
  },
  { id: '4930ff', caption: 'Black Hole', model: 'PicLumen Realistic V2' },
  { id: 'f74c50', caption: 'Space Rocket', model: 'PicLumen Realistic V2' },
  {
    id: 'ee6cc1',
    caption: 'Surface of planet',

    model: 'FLUX.1-schnell',
  },
  {
    id: '4678f8',
    caption: 'Ice giant planet',
    model: 'FLUX.1-schnell',
  },
  { id: '7e762c', caption: 'Supernovae', model: 'PicLumen Realistic V2' },
  {
    id: 'ccc7fc',
    caption: 'Purple nebula cloud',
    model: 'FLUX.1-schnell',
  },
  { id: '0f6e74', caption: 'Satellite', model: 'PicLumen Realistic V2' },
  { id: '06aa35', caption: 'Planet surface', model: 'PicLumen Realistic V2' },
  {
    id: '52d746',
    caption: 'Space shuttle on a moon',
    model: 'PicLumen Realistic V2',
  },
  { id: '8a5c72', caption: 'Planet', model: 'PicLumen Realistic V2' },
  {
    id: '98d322',
    caption: 'Futuristic spaceship',
    model: 'PicLumen Realistic V2',
  },
  { id: '21cdb9', caption: 'Supernovae', model: 'PicLumen Realistic V2' },
  { id: 'aee219', caption: 'Nebula Cloud', model: 'PicLumen Realistic V2' },
  {
    id: 'a13d53',
    caption: 'Black hole with hot accretion disk',
    model: 'FLUX.1-schnell',
  },
  { id: '416ea8', caption: 'Satellite', model: 'PicLumen Realistic V2' },
  { id: 'b7fd62', caption: 'Black Hole', model: 'Imagen 3' },
  { id: '44f5a7', caption: 'Galaxy', model: 'PicLumen Realistic V2' },
  { id: '7e0c24', caption: 'Rocky terrestrial planet', model: 'Imagen 3' },
  {
    id: 'b0c887',
    caption: 'Futuristic spaceship',
    model: 'PicLumen Realistic V2',
  },
  {
    id: 'c42e3e',
    caption: 'Mountainous planet surface',
    model: 'PicLumen Realistic V2',
  },
  {
    id: 'ef9c83',
    caption: 'Imperial spaceship',
    model: 'PicLumen Realistic V2',
  },
  { id: 'da0dd0', caption: 'Spaceship', model: 'PicLumen Realistic V2' },
  {
    id: '0ce3ec',
    caption: 'Ancient spaceship',
    model: 'PicLumen Realistic V2',
  },
  {
    id: '8fe9ad',
    caption: 'Planets and Nebula',
    model: 'PicLumen Realistic V2',
  },
  { id: 'eb063f', caption: 'Supernovae', model: 'Imagen 3' },
  { id: 'ed0e85', caption: 'Space telescope', model: 'Imagen 3' },
  { id: 'a7bf69', caption: 'Futuristic spaceship', model: 'Imagen 3' },
  { id: '14c127', caption: 'Gateway to a black hole', model: 'DALLE 2' },
  {
    id: '7a2dfe',
    caption: 'Purple nebula cloud',
    model: 'FLUX.1-schnell',
  },
  {
    id: '17b093',
    caption: 'Nebula cloud',
    model: 'FLUX.1-schnell',
  },
  {
    id: 'd19e60',
    caption: 'Vibrant supernova',
    model: 'FLUX.1-schnell',
  },
  {
    id: '9726d8',
    caption: 'Spiral galaxy',
    model: 'FLUX.1-schnell',
  },
  {
    id: '2b1ce7',
    caption: 'Spiral galaxy',
    model: 'FLUX.1-schnell',
  },
  {
    id: '1742fd',
    caption: 'Surface of moon orbiting gas giant',
    model: 'FLUX.1-schnell',
  },
  {
    id: '22dd7e',
    caption: 'Iridiscent purple and red nebula',
    model: 'FLUX.1-schnell',
  },
  {
    id: '892e20',
    caption: 'Futuristic explorer spacecraft',
    model: 'FLUX.1-schnell',
  },
  {
    id: '65ba2b',
    caption: 'Exploding satellite in orbit',
    model: 'FLUX.1-schnell',
  },
  {
    id: 'c7d845',
    caption: 'Red fiery nebula',
    model: 'FLUX.1-schnell',
  },
  {
    id: 'a84576',
    caption: 'Fiery nebula clouds',
    model: 'FLUX.1-schnell',
  },
  {
    id: '6325de',
    caption: 'Sunrise on icy moon',
    model: 'FLUX.1-schnell',
  },
  {
    id: 'b93743',
    caption: 'Majestic gas giant with moons',
    model: 'FLUX.1-schnell',
  },
  {
    id: '3133f2',
    caption: 'Gas giant with rings',
    model: 'FLUX.1-schnell',
  },
  { id: '8cf4aa', caption: 'Nebula', model: 'DALLE 2' },
  { id: '7b3add', caption: 'Black Hole', model: 'DALLE 2' },
  { id: '475cb3', caption: 'Galaxy', model: 'DALLE 2' },
  { id: 'acfdd3', caption: 'Galaxy', model: 'DALLE 2' },
  { id: 'fcd55f', caption: 'Green sky with nebula', model: 'DALLE 2' },
  { id: '0a8ce5', caption: 'Elliptical Galaxy', model: 'DALLE 2' },
  { id: '2c8a10', caption: 'Nebula', model: 'DALLE 2' },
  {
    id: '6fbb3a',
    caption: 'Atmosphere of terrestrial planet',
    model: 'FLUX.1-schnell',
  },
  { id: '5ceff9', caption: 'Nebula', model: 'DALLE 2' },
  { id: '8bcc38', caption: 'Nebula', model: 'DALLE 2' },
  { id: '8ef2c0', caption: 'Spiral Galaxy', model: 'DALLE 2' },
  { id: '16d6c7', caption: 'Acretion Disk', model: 'DALLE 2' },
  { id: 'f01e55', caption: 'Nebula', model: 'DALLE 2' },
  { id: 'e33f8c', caption: 'Rusted spacecraft', model: 'FLUX.1-schnell' },
  { id: 'efc10b', caption: 'Portal', model: 'DALLE 2' },
  { id: '5be10c', caption: 'Nebula', model: 'DALLE 2' },
  { id: '77ac1d', caption: 'Southern Ring Nebula', model: 'DALLE 2' },
  { id: '9b7aa0', caption: 'Portal', model: 'DALLE 2' },
  { id: '32d714', caption: 'Red Galaxy', model: 'DALLE 2' },
  { id: 'cc05a4', caption: 'Carina Nebula', model: 'DALLE 2' },
  { id: '392772', caption: 'Milky Way Galaxy', model: 'DALLE 2' },
  { id: 'b73b62', caption: 'Earth-like planet', model: 'Imagen 3' },
  { id: '0a8a35', caption: 'Trifid Nebula', model: 'DALLE 2' },
  { id: '2d9157', caption: 'Trifid Nebula', model: 'DALLE 2' },
  { id: '3ab0f6', caption: 'Pillars of Creation', model: 'DALLE 2' },
  {
    id: '390371',
    caption: 'Atmosphere of terrestrial planet',
    model: 'FLUX.1-schnell',
  },
  { id: 'a673a0', caption: 'Planetary Nebula', model: 'DALLE 2' },
  { id: '3975a3', caption: 'Galaxy', model: 'DALLE 2' },
  { id: '2b0d51', caption: 'Pillars of Creation', model: 'DALLE 2' },
  { id: 'b6ec33', caption: 'Nebula', model: 'DALLE 2' },
  { id: 'dfc555', caption: 'Nebula', model: 'DALLE 2' },
  { id: 'fc11e2', caption: 'Nebula', model: 'DALLE 2' },
  { id: 'dbcb92', caption: 'Nebula', model: 'DALLE 2' },
  { id: '4c034a', caption: 'Nebula', model: 'DALLE 2' },
  { id: '084cb0', caption: 'Galaxy', model: 'DALLE 2' },
  { id: 'bbcf96', caption: 'Icy moon', model: 'Imagen 3' },
  {
    id: 'b45726',
    caption: 'Close-up of terrestrial planet',
    model: 'Imagen 3',
  },
  { id: '71f753', caption: 'Neon spacecraft', model: 'FLUX.1-schnell' },
];
