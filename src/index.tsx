import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routing/AppRouter';
import { AppStateModel } from './models/appState.model';
import { AppState } from './state/appState';
import { AppContext } from './context';

const appState: AppStateModel = new AppState();

ReactDOM.render(
  <AppContext.Provider value={appState}>
    <AppRouter />
  </AppContext.Provider>,
  document.getElementById('root')
);
