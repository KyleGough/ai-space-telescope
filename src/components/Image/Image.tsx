import React from 'react';

interface ImageProps {
  src: string
  caption: string
}

export const Image: React.FC<ImageProps> = ({ src, caption }) => {
  return (
    <div>
      <img src={src} alt={caption} />
    </div>
  );
}
