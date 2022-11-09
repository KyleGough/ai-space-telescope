export const ScrollTopButton: React.FC = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="flex justify-center">
      <button
        className="my-8 duration-200 transition-colors text-lime-400 hover:text-lime-600"
        onClick={scrollTop}
      >
        Back to Top
      </button>
    </div>
  );
};
