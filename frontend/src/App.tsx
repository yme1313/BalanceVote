import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Routes, Route } from 'react-router-dom';
import "./App.css";

import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

