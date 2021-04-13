import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from "react-router-dom";
import configureStore from './store/store';
import {Provider} from 'react-redux'
import App from './components/App';
import './index.css';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);


