import React from 'react';

import Header from './Header';
import Footer from './Footer';
import "./layout.css"

const Layout = ({ children, enableScrollEffect = true, showPhoneNumber, showNav }) => {
  return (
    <>
      <Header enableScrollEffect={enableScrollEffect} showPhoneNumber={showPhoneNumber} showNav={showNav} />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
