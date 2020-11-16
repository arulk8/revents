import React from 'react';
import ReactDOM from 'react-dom';
import './App/layout/styles.css';
import App from './App/layout/App';
import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootEl
  );
}


if (module.hot) {
  module.hot.accept('./App/layout/App', () => {
    setTimeout(render);
  });
}

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();