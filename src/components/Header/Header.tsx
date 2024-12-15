interface HeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <div className="block lg:flex">
    <div className="">
      <h1 className="font-bold text-5xl my-4">
        AI <span className="scifi">Space Telescope</span>
      </h1>
      <p className="mb-8 lg:w-[56ch] max-w-[56ch]">
        Welcome to my curated gallery of science-fiction themed images generated
        using various text-to-image models such as{' '}
        <a
          className="duration-200 transition-colors text-lime-400 hover:text-lime-600 whitespace-nowrap"
          href="https://openai.com/dall-e-2/"
          target="_blank"
        >
          DALL·E 2
        </a>
        ,{' '}
        <a
          className="duration-200 transition-colors text-lime-400 hover:text-lime-600 whitespace-nowrap"
          href="https://deepmind.google/technologies/imagen-3/"
          target="_blank"
        >
          Imagen 3
        </a>
        , and{' '}
        <a
          className="duration-200 transition-colors text-lime-400 hover:text-lime-600 whitespace-nowrap"
          href="https://www.piclumen.com/"
          target="_blank"
        >
          PicLumen Realistic V2
        </a>
        . These are a hand picked selection of my favourite generated images.
      </p>
    </div>
    <div className="w-full flex justify-start lg:justify-center items-center text-2xl gap-8 my-8 lg:my-0">
      {children}
    </div>
  </div>
);
