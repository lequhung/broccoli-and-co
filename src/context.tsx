import React from 'react';
import { AppStateModel } from './models/appState.model';

const AppContext = React.createContext({} as AppStateModel);
const useAppContext = (): AppStateModel => React.useContext<AppStateModel>(AppContext);

export { AppContext, useAppContext };
