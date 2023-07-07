//import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import {useTelegram} from "./components/hooks/useTelegram.js";
import Header from "./components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
//const {user, onClose} = useTelegram();



//  <button onClick={onClose}>Закрыть</button>

function App() {
  const {onToggleButton, tg} = useTelegram();
//if(1==2){
  useEffect(() => {
    tg.ready();
  }, [])

  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>
      </Routes>
    
      </div>
  );
//};
//return (
 // <div className="App">
//    work
 //   <button>Закрыть</button>
//    </div>
//);
};



export default App;



//<button onClick={onToggleButton}>toggle</button>
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

