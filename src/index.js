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
import TOS from './components/TOS/index';

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <GlobalContextProvider>
        <ConnectOnPageLoad />
        <Router>
          <div id="content">
            <Routes>
              <Route path='/' element={<Cover />}/>
              <Route path='/dashboard' element={<BukeleTable />}/>
              <Route path='/user' element={<Profile />}/>
              <Route path='/tos' element={<TOS />}/>
            </Routes>
          </div>
        </Router>
      </GlobalContextProvider>  
    </AlertProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
