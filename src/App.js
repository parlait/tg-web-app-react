//import logo from './logo.svg';
import { useEffect } from 'react';
import {useTelegram} from "components/hooks/useTelegram.js";
//const {user, onClose} = useTelegram();
//import './App.css';


//  <button onClick={onClose}>Закрыть</button>

function App() {
  const {onToggleButton, tg} = useTelegram();
//if(1==2){
  useEffect(() => {
    tg.ready();
  }, [])

  

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    
      </div>
  );
//};
return (
  <div className="App">
    work
    <button>Закрыть</button>
    </div>
);
};



export default App;




//  return (
//   <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//         className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );

