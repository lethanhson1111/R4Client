import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DoiMK from './Dmkcomponent/Doimk';
import Quenmk from './Dmkcomponent/Quenmk';
import Quenmk2 from './Dmkcomponent/Quenmk2';
import Card from './Dmkcomponent/Card'
import QuanlyKH from './Dmkcomponent/QuanlyKH';

import Doimk from './Dmkcomponent/Doimk';

ReactDOM.render(
  <React.StrictMode>
    <Card/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
