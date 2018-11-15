import React from 'react';
import ReactDOM from "react-dom";

import './server-config/.htaccess';
import './styles/main.scss';
import App from './containers';


ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
