import logo from './logo.svg';
import gsap from "gsap";

import './App.css';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
gsap.registerPlugin(useGSAP); 

function App() {
  const container = useRef();
  
  useGSAP(
    () => {
      // use selectors...
      gsap.to(".box", { rotation: "+=360", duration: 3 });

      // or refs...
      // gsap.to(circle.current, { rotation: "-=360", duration: 3 });
    },
    { scope: container }
  );
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link box"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
