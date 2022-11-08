import React from 'react';
import { getImageURL } from '../../utilities';

interface ImageProps {
  id: string;
  caption: string;
}

export const Image: React.FC<ImageProps> = ({ id, caption }) => (
  <div className="overflow-hidden rounded-sm">
    <div className="transition hover:scale-110 focus:scale-125 hover:brightness-110 focus:brightness-110 duration-200 cursor-pointer ease-out shadow-inner">
      <img className="Sirv" data-src={getImageURL(id)} alt={caption} />
    </div>
  </div>
);
