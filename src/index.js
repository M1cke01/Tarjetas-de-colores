import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Asegúrate de que el componente App esté correctamente importado

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
