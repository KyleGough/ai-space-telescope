import { useRef, useEffect } from 'react';

const STARS_COUNT = 200;

export const Stars: React.FC = () => {
  return (
    <div className="fixed h-screen w-screen left-0 top-0 -z-10">
      {Array.from(Array(STARS_COUNT)).map(() => (
        <Star />
      ))}
    </div>
  );
};

const Star: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.floor(Math.random() * 4) + 1;
    const durationTwinkle = Math.floor(Math.random() * 5000) + 2000;
    const delayPulse = Math.floor(Math.random() * 200);
    const element = ref.current;

    if (element) {
      element.style.top = `${x}%`;
      element.style.left = `${y}%`;
      element.style.height = `${size}px`;
      element.style.width = `${size}px`;
      element.style.animation = `twinkle ${durationTwinkle}ms ease-in-out infinite, pulse 0.35s ease-in-out ${delayPulse}ms infinite`;
    }
  }, [ref]);

  return <div ref={ref} className="absolute bg-yellow-100 rounded-full" />;
};
