import React from 'react';
import { AppRoute } from '../constants/routes.enum';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { envConfig } from '../config/env.config';
import Home from '../pages/Home/Home';

const AppRouter: React.FC = () => {
  // TODO: StubPage route to be removed once the authentication part is implemented
  return (
    <BrowserRouter basename={envConfig.baseUrl}>
      <Routes>
        <Route path={AppRoute.Home} element={<Home />} />
        <Route path="*" element={<Navigate to={AppRoute.Home} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
