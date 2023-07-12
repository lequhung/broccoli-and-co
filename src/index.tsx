import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './routing/AppRouter';
import { AppStateModel } from './models/appState.model';
import { AppState } from './state/appState';
import { AppContext } from './context';

const appState: AppStateModel = new AppState();
const root = createRoot(document.getElementById('root'));

root.render(
  <AppContext.Provider value={appState}>
    <AppRouter />
  </AppContext.Provider>
);
