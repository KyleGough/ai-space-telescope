import { useRef, useEffect } from 'react';

const STARS_COUNT = 100;

export const Stars: React.FC = () => (
  <div className="fixed h-screen w-screen left-0 top-0 -z-10 pointer-events-none">
    {Array.from(Array(STARS_COUNT)).map((_, i) => (
      <Star key={i} />
    ))}
  </div>
);

const Star: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.floor(Math.random() * 4) + 1;
    const durationTwinkle = Math.floor(Math.random() * 5000) + 2000;
    const delayPulse = Math.floor(Math.random() * 200);

    ref.current.style.top = `${x}%`;
    ref.current.style.left = `${y}%`;
    ref.current.style.height = `${size}px`;
    ref.current.style.width = `${size}px`;
    ref.current.style.animation = `twinkle ${durationTwinkle}ms ease-in-out infinite, pulse 0.5s ease-in-out ${delayPulse}ms infinite`;
  }, [ref]);

  return (
    <div
      ref={ref}
      className="absolute bg-yellow-100 rounded-full will-change-transform"
    />
  );
};
