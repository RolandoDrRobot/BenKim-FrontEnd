import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import alertOptions from './utils/alertOptions';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import BukeleTable from './components/BukeleTable/index';

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Router>
        <div id="content">
          <Routes>
            <Route path='/' element={<BukeleTable />}/>
          </Routes>
        </div>
      </Router>
    </AlertProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
