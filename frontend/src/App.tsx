import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';

import Default from './layout/Default';
import HomePage from './pages/HomePage';
import VotePage from './pages/VotePage';
import StatsPage from './pages/StatsPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="" element={<Default />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/vote' element={<VotePage />} />
          <Route path='/stats' element={<StatsPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

