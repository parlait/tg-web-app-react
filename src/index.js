import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
//import reportWebVitals from './reportWebVitals';убрал
/*вставляю начало
*/
import {useLocation} from 'react-router-dom';
let pathkusl=0;
try{
  const location = useLocation();
    pathkusl=location.pathname;//Route.path
}
catch{
    pathkusl='errorrrrr';//Route.path
}
//export default pathkusl;
console.log(pathkusl);
/*вставляю конец
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    
    <BrowserRouter>
  <App />
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();убрал
