import { useState } from 'react';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Image } from './components/Image';
import { ScrollTopButton } from './components/ScrollTopButton';
import { Stars } from './components/Stars';
import { images, ImageData } from './images';

const models = [
  'PicLumen Realistic V2',
  'FLUX.1-schnell',
  'Imagen 3',
  'DALLE 2',
];

export const App: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const changeFilter = (value: string) => setFilter(value);

  const filteredImages = images.filter(
    (image: ImageData) => filter === 'All' || image.model === filter
  );

  return (
    <>
      <Stars />
      <div className="container mx-auto mt-24 px-4 md:px-8 lg:px-16">
        <Header>
          <form className="max-w-sm right-0">
            <label
              htmlFor="model"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a model
            </label>
            <select
              id="model"
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder:text-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => changeFilter(e.target.value)}
            >
              {['All', ...models].map((model) => (
                <option value={model}>{model}</option>
              ))}
            </select>
          </form>
        </Header>
        <Gallery>
          {filteredImages.map((image) => (
            <Image key={image.id} id={image.id} caption={image.caption} />
          ))}
        </Gallery>
        <ScrollTopButton />
      </div>
      <Footer />
    </>
  );
};
