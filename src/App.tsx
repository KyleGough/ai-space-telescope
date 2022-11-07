import logo from './logo.svg';
import './App.css';
import { Image } from './components';
import img1 from './img/1667744916682.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Image src={img1} caption="Caption 1" />
      </header>
    </div>
  );
}

export default App;
