import React, { useState } from 'react';
import { getImageURL } from '../../utilities';
import { Dialog } from '../Dialog';
import { ResponsiveImage } from '../ResponsiveImage';

interface ImageProps {
  id: string;
  caption: string;
}

export const Image: React.FC<ImageProps> = ({ id, caption }) => {
  const [open, setOpen] = useState(false);
  const imageURL = getImageURL(id);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <div
        tabIndex={0}
        onClick={openDialog}
        className="group overflow-hidden rounded-sm"
      >
        <div className="duration-500 transition group-hover:scale-110 group-focus:scale-110 group-hover:brightness-110 group-focus:brightness-110 cursor-pointer ease-out shadow-inner">
          <ResponsiveImage src={imageURL} alt={caption} />
        </div>
      </div>
      {open && (
        <Dialog
          imageURL={imageURL}
          caption={caption}
          closeDialog={closeDialog}
        />
      )}
    </>
  );
};
