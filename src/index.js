import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.module.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UseProvider } from './Auxiliary/useContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >

      <UseProvider>
        <App />
      </UseProvider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
