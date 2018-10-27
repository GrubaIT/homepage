import React from 'react';
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import './server-config/.htaccess';
import './styles/main.scss';
import App from './containers';

const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root'),
    )
  };

render(App);

if (module.hot) {
    module.hot.accept('./containers', () => { render(App) });
}
