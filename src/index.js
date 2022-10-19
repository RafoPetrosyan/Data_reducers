import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import {Provider} from "react-redux";

import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from "state/store";
import history from "utils/browserHistory";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <HistoryRouter history={history}>
            <App />
          </HistoryRouter>
      </Provider>
  </React.StrictMode>
);
reportWebVitals();
