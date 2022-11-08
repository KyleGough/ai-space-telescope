import React from 'react';

interface GalleryProps {
  children: React.ReactNode;
}

export const Gallery: React.FC<GalleryProps> = ({ children }) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  </>
);
