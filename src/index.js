import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/app.scss';
import './assets/styles/effect.scss';

import Application from './view/application';
import reportWebVitals from './control/reportWebVitals';

ReactDOM.createRoot(
    document.querySelector('#root')
).render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>
);

reportWebVitals();
