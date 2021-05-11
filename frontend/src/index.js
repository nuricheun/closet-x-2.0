import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from "react-router-dom";
import configureStore from './store/store';
import {Provider} from 'react-redux'
import { setAuthToken } from './util/sessionApiUtil';
import jwt_decode from 'jwt-decode';
import {logout } from './action/sessionAction';
import App from './components/App';
import './index.css';



 let store;

  if (localStorage.access_token) {
    setAuthToken(localStorage.access_token);
    const decodedUser = jwt_decode(localStorage.access_token);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser }
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/";
    }
  } else {
    store = configureStore({});
  }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


