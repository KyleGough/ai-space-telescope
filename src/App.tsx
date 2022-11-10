import { useMemo, useState } from 'react';
import { FilterButton } from './components/FilterButton';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Image } from './components/Image';
import { ScrollTopButton } from './components/ScrollTopButton';
import { Stars } from './components/Stars';
import { images, ImageData, Filter } from './images';

export const App: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');

  const changeFilter = (value: Filter) => setFilter(value);

  const filteredImages = useMemo(() => {
    return images.filter(
      (image: ImageData) => filter === 'All' || image.tags.includes(filter)
    );
  }, [filter]);

  console.log('app');

  return (
    <>
      <Stars />
      <div className="container mx-auto mt-24 px-4 md:px-8 lg:px-16">
        <Header>
          <FilterButton
            value="All"
            selected={filter === 'All'}
            onClick={changeFilter}
          />
          <FilterButton
            value="Realistic"
            selected={filter === 'Realistic'}
            onClick={changeFilter}
          />
          <FilterButton
            value="Painting"
            selected={filter === 'Painting'}
            onClick={changeFilter}
          />
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
