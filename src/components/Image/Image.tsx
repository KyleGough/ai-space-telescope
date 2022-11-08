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
      <div onClick={openDialog} className="overflow-hidden rounded-sm">
        <div className="transition hover:scale-110 focus:scale-125 hover:brightness-110 focus:brightness-110 duration-200 cursor-pointer ease-out shadow-inner">
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
