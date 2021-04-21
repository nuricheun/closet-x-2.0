import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from "react-router-dom";
import configureStore from './store/store';
import {Provider} from 'react-redux'
import App from './components/App';
import './index.css';

const store = configureStore({})

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


