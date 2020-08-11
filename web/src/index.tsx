import React from 'react';
import ReactDOM from 'react-dom';
 
import App from './App';


ReactDOM.render(

  //pegar componentes
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // onde injetar no html
  document.getElementById('root')
);


