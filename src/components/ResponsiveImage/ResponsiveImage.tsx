interface ResponsiveImageProps {
  src: string;
  alt: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
}) => <img className="Sirv" data-src={src} alt={alt} />;
