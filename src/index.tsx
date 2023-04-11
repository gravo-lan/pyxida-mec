import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

import Application from './application';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;

const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
      <Application />
    </React.StrictMode>
);

reportWebVitals();