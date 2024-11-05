import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import {Providers} from './Providers';
import reportWebVitals from './reportWebVitals';
import {router} from "./router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers router={router}/>
  </React.StrictMode>
);


reportWebVitals();
