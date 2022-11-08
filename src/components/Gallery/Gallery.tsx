import React from 'react';

interface GalleryProps {
  title: string;
  children: React.ReactNode;
}

export const Gallery: React.FC<GalleryProps> = ({ title, children }) => {
  return (
    <>
      <h1 className="font-bold text-4xl text-centre my-8">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </>
  );
};
