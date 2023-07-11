//import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {useTelegram} from "./components/hooks/useTelegram.js";
import Header from "./components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import ProductList from './components/ProductList/ProductList.jsx';
import Form from './components/Form/Form.jsx';
import FormDopUsluga from './components/FormDopUsluga/FormDopUsluga.jsx';
import FormFilial from './components/FormFilial/FormFilial.jsx';
import FormNastroiki from './components/FormNastroiki/FormNastroiki.jsx';
import FormOborudovanie from './components/FormOborudovanie/FormOborudovanie.jsx';
import FormRaspisanie from './components/FormRaspisanie/FormRaspisanie.jsx';
import FormSotrudnik from './components/FormSotrudnik/FormSotrudnik.jsx';
import FormUsluga from './components/FormUsluga/FormUsluga.jsx';
import FormPoseschenie from './components/FormPoseschenie/FormPoseschenie.jsx';
import UslugiList from './UslugiList.jsx';
import UslugiListVnesSotr from './components/UslugiListVnesSotr/UslugiListVnesSotr.jsx';
import FormDolzhnosti from './components/FormDolzhnosti/FormDolzhnosti.jsx';

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
        <Route path={'formdopusluga'} element={<FormDopUsluga />}/>
        <Route path={'formfilial'} element={<FormFilial />}/>
        <Route path={'formnastroiki'} element={<FormNastroiki />}/>
        <Route path={'formoborudovanie'} element={<FormOborudovanie />}/>
        <Route path={'formraspisanie'} element={<FormRaspisanie />}/>
        <Route path={'formsotrudnik'} element={<FormSotrudnik />}/>
        <Route path={'formusluga'} element={<FormUsluga />}/>
        <Route path={'formposeschenie'} element={<FormPoseschenie />}/>
        <Route path={'uslugilist'} element={<UslugiList />}/>
        <Route path={'uslugilistvnes*'} element={<UslugiListVnesSotr />}/>
        <Route path={'formdolzhnosti'} element={<FormDolzhnosti />}/>
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

