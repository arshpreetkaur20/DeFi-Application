import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Home from './Home';
import Footer from './Footer';

function AppLayout() {
  return (
    <>
      <Home />
      <Outlet /> 
      <Footer />
    </>
  );
}

export default AppLayout;
