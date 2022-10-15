import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './config';

import Header from 'layout/Header';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((e) => (
            <Route
              key={e.path}
              path={e.path}
              element={React.createElement(e.component)}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
