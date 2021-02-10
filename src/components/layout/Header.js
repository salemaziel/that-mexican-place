import React, { useState, useEffect  } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Logo from "../../images/logo-that-mexican-place.png"

import {Link} from "gatsby"


const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);


  return(
  <header 
  /*className="sticky top-0 bg-white shadow" */
  className={
    "sticky" + " top-0" + " transition-all" + " ease-out" + " duration-300" + (scroll ? ` bg-green-700 bg-opacity-75` : " bg-transparent") + (scroll ? " shadow" : "") + (scroll? " visible" : " hidden")
  }
  style={{zIndex: "99"}}>
    <nav className="container flex flex-col items-center justify-between px-8 py-4 mx-auto sm:flex-row">
      <Link to="/" className="flex items-center text-2xl">
        
        <div className="w-12 mr-3">
          <img src={Logo} alt="Logo" className="w-full" />
        </div>
        </Link>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-lg font-bold text-gray-100 md:px-8" href="#hours">
          Hours
        </AnchorLink>
        <AnchorLink className="px-4 text-lg font-bold text-gray-100 md:px-8" href="#location">
          Location
        </AnchorLink>
        <AnchorLink className="px-4 text-lg font-bold text-gray-100 md:px-8" href="#specials">
          Specials
        </AnchorLink>

      </div>
     <div className="hidden md:block">
        <span className="w-full px-10 py-5 text-xl text-center text-white bg-red-600 rounded-md cursor-pointer hover:bg-red-800 fontFredoka" 
data-glf-cuid="8e7c87fd-2ed0-44b4-9886-8626e340905e"
data-glf-ruid="d3afdc87-1713-43aa-bd55-854fdf812f01" id="glfButton1"> See Menu &amp; Order 
                            </span>
</div>
    </nav>
  </header>
)
}

export default Header;
