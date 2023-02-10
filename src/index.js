import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/app.scss';
import './assets/styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Application from './view/application';
import reportWebVitals from './control/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
reportWebVitals();
