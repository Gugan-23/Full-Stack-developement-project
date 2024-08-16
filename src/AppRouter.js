import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import CaretakerDashboard from './components/CaretakerDashboard';
import UserDashboard from './components/UserDashboard';
import Profile from './components/Profile';
import Caretaker from './components/Caretaker';
import AboutUs from './components/AboutUs';
import Shoping from './components/Shoping';
import Chat from './components/Chat';
import Contactus from './components/Contactus';
import Location from './components/Location';
import ProfileCare from'./components/Profilecare';
import Aboutuscare from './components/Aboutuscare';
import Requestcare from './components/Requestcare';
import Shopingcare from './components/shopingcare';
import Chatcare from './components/Chatcare';
import Locationcare from './components/Locationcare';
import Request from'./components/Request';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<UserDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutuscare" element={<Aboutuscare />} />
        <Route path="/shopingcare" element={<Shopingcare />} />
        <Route path="/locationcare" element={<Locationcare />} />
        <Route path="/chatcare" element={<Chatcare />} />
        <Route path="/shoping" element={<Shoping />} />
        <Route path="/login" element={<Login />} />
        <Route path="/location" element={<Location />} />
        <Route path="/requestcare" element={<Requestcare />} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/caretaker" element={<Caretaker />} />
        <Route path="/profilecare" element={<ProfileCare />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/caretaker-dashboard" element={<CaretakerDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/request" element={<Request />} />
        <Route path="/contactus" element={<Contactus />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
