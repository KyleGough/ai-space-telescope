import React from 'react';

interface GalleryProps {
  children: React.ReactNode;
}

export const Gallery: React.FC<GalleryProps> = ({ children }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 min-h-screen">
    {children}
  </div>
);
