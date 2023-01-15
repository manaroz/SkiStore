import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
//import { Router } from 'react-router-dom';
import { BrowserRouter } from './app/router/BrowserRouter';
import myHistory from './app/history/history';
import { StoreProvider } from './app/context/StoreContext';

export const history = myHistory;

ReactDOM.render(
  <React.StrictMode>
      
      <BrowserRouter history={history}>
      <StoreProvider>
          <App />
        </StoreProvider>
      </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
