import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import  { UseContextProvider } from './useContext';

import App from './App';

ReactDOM.render(
  <UseContextProvider>
    <Router>
      <App />
    </Router>
    </UseContextProvider>  ,
  document.getElementById('root'));
