import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import alertOptions from './utils/alertOptions';
import AlertTemplate from 'react-alert-template-basic';
import { GlobalContextProvider } from './hooks/appContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import ConnectOnPageLoad from './components/ConnectOnPageLoad/index';
import Cover from './components/Cover/index';
import BukeleTable from './components/BukeleTable/index';
import Profile from './components/Profile/index';

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <GlobalContextProvider>
        <Router>
          <ConnectOnPageLoad />
          <div id="content">
            <Routes>
              <Route path='/' element={<Cover />}/>
              <Route path='/dashboard' element={<BukeleTable />}/>
              <Route path='/user' element={<Profile />}/>
            </Routes>
          </div>
        </Router>
      </GlobalContextProvider>  
    </AlertProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
