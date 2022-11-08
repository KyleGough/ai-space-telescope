import React from 'react';

interface ImageProps {
  src: string;
  caption: string;
}

export const Image: React.FC<ImageProps> = ({ src, caption }) => {
  return (
    <div className="border-px border-white overflow-hidden">
      <img
        className="transition hover:scale-110 focus:scale-125 hover:brightness-110 focus:brightness-110 duration-200 cursor-pointer ease-out"
        src={src}
        alt={caption}
      />
    </div>
  );
};
