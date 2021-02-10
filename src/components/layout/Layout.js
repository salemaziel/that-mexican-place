import React from 'react';
import Footer2 from './Footer2';
import Header from './Header';

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer2 />
    </>
  );
};

export default Layout;
