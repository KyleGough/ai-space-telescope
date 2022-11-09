interface HeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <div className="block lg:flex">
    <div className="">
      <h1 className="font-bold text-5xl my-4">
        DALL·E <span className="scifi">Sci-Fi</span> Gallery
      </h1>
      <p className="mb-8 w-[56ch]">
        Welcome to my gallery of science-fiction themed images generated using
        the amazing{' '}
        <a
          className="duration-200 transition-colors text-lime-400 hover:text-lime-600"
          href="https://openai.com/dall-e-2/"
          target="_blank"
        >
          DALL·E 2
        </a>{' '}
        API. These pictures are a hand-picked selection of my favourite
        generated images.
      </p>
    </div>
    <div className="w-full flex justify-start lg:justify-center items-center text-2xl gap-8 my-8 lg:my-0">
      {children}
    </div>
  </div>
);
