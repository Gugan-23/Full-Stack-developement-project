import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';

import CaretakerDashboard from './components/CaretakerDashboard';
import UserDashboard from './components/UserDashboard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/caretaker-dashboard" element={<CaretakerDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
