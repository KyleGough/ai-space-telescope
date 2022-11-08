import { Image, Gallery } from './components';
import img1 from './img/1667744916682.png';
import img2 from './img/1667745366210.png';
import img3 from './img/1667745366633.png';

function App() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <Gallery title="Space">
        <Image src={img1} caption="Caption 1" />
        <Image src={img2} caption="Caption 1" />
        <Image src={img3} caption="Caption 1" />
      </Gallery>
    </div>
  );
}

export default App;
