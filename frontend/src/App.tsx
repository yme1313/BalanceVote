import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Routes, Route } from 'react-router-dom';
import "./App.css";

import Default from './layout/Default';
import Home from './pages/Home';
import Notice from './pages/Notice';
import Vote from './pages/Vote';
import Login from './pages/Login';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Default />}>
          <Route path='/' element={<Home />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/vote' element={<Vote />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

