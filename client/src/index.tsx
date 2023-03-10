import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from './app/router/BrowserRouter';
import { store } from './app/store/configureStore';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
      
      <BrowserRouter history={history}>
      <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
