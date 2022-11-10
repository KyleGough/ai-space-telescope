import { ResponsiveImage } from '../ResponsiveImage';

interface DialogProps {
  imageURL: string;
  caption: string;
  closeDialog: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  imageURL,
  caption,
  closeDialog,
}) => (
  <div
    role="dialog"
    onClick={closeDialog}
    className="fixed h-screen w-screen left-0 top-0 flex justify-center items-center bg-black/75 p-2 md:p-4 lg:p-8 cursor-pointer"
  >
    <div className="flex justify-center">
      <div className="w-full rounded-sm overflow-hidden shadow-md m-2 md:m-4">
        <ResponsiveImage src={imageURL} alt={caption} />
      </div>
    </div>
  </div>
);
