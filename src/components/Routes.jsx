import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchFilter from './SearchFilter';
import Results from '../pages/Results';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchFilter />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default RoutesComponent;
