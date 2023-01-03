import { GitHubIcon } from '../../icons/GitHubIcon';
import { HomeIcon } from '../../icons/HomeIcon';
import dayjs from 'dayjs';

export const Footer: React.FC = () => (
  <footer className="bg-stone-900 text-stone-200 text-center py-4">
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <p className="mr-4">© Kyle Gough, 2022 - {dayjs().year()}</p>
        <a
          className="p-2"
          href="https://kylegough.co.uk/"
          target="_blank"
          aria-label="Personal Website"
        >
          <HomeIcon className="duration-200 transition-colors fill-white hover:fill-stone-300 focus:fill-stone-300 w-6 h-6" />
        </a>
        <a
          className="p-2"
          href="https://github.com/KyleGough/ai-space-telescope"
          target="_blank"
          aria-label="GitHub Profile"
        >
          <GitHubIcon className="duration-200 transition-colors fill-white hover:fill-stone-300 focus:fill-stone-300 w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);
