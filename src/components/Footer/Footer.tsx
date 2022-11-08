import { GitHubIcon } from '../../icons/GitHubIcon';
import { HomeIcon } from '../../icons/HomeIcon';

export const Footer: React.FC = () => (
  <footer className="bg-stone-900 text-stone-200 text-center py-4">
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <p className="mr-4">© Kyle Gough, 2022</p>
        <a className="p-2" href="https://kylegough.co.uk/" target="_blank">
          <HomeIcon className="duration-200 transition-colors fill-white hover:fill-stone-300 focus:fill-stone-300 w-6 h-6" />
        </a>
        <a
          className="p-2"
          href="https://github.com/KyleGough/ai-image-gallery"
          target="_blank"
        >
          <GitHubIcon className="duration-200 transition-colors fill-white hover:fill-stone-300 focus:fill-stone-300 w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);
