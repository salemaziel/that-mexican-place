import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaYelp,
} from 'react-icons/fa';

import Logo from '../../images/logo-that-mexican-place-old.png';

import { Link } from 'gatsby';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <header
        /*className="sticky top-0 bg-white shadow" */
        className={
          'sticky' +
          ' top-0' +
          ' transition-all' +
          ' ease-out' +
          ' duration-300' +
          ' bg-green-700 bg-opacity-75' +
          (scroll ? ' shadow' : '')
        }
        style={{ zIndex: '99' }}
      >
        <div
          className={
            'flex-row' +
            ' justify-center' +
            ' py-2' +
            ' mx-auto' +
            ' text-gray-800' +
            ' bg-green-700' +
            ' md:flex hidden' +
            ' sticky' +
            ' top-0' +
            ' transition-all' +
            ' ease-in-out' +
            ' duration-300' +
            (scroll ? ' shadow' : '')
          }
        >
          <div className="flex w-full px-2 md:px-6 md:justify-between">
            <div className="flex flex-row justify-start md:w-1/3 lg:w-5/12">
              {/*<a href="#" className="flex py-2 text-lg text-gray-100 hover:text-red-accent-700">
        <FaMapMarkerAlt className="w-5 h-5 mx-2" />
        1234 Broadway St <br /> Escondido, CA 92025
        </a>*/}
              <a
                href="tel:7607433783"
                className="invisible my-1 text-lg font-bold tracking-widest text-gray-100 md:visible md:flex text-shadow"
              >
                <FaPhoneAlt className="w-5 h-5 mx-2" />
                (760) 743-3783
              </a>
            </div>
            <div className="flex flex-row justify-end w-1/4 align-middle ">
            <a
                href="https://www.yelp.com/biz/that-mexican-place-escondido-3"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full md:p-2 lg:p-0 md:mx-2 md:w-8 md:h-8 "
              >
                <FaYelp size="1rem" className="" />
              </a>
              <a
                href="https://www.facebook.com/That-Mexican-Place-247214365743894/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full shadow md:p-2 lg:p-0 md:mx-2 md:w-8 md:h-8"
              >
                <FaFacebookF size="1rem" className="" />
              </a>

              {/*<a
                href="#"
                className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full md:p-2 lg:p-0 md:mx-2 md:w-8 md:h-8 "
              >
                <FaInstagram size="1rem" className="" />
              </a>*/}
              <a
                href="mailto:thatmexicanplace92026@gmail.com"
                className="inline-flex flex-wrap items-center justify-center mx-1 text-center text-gray-100 align-middle border border-gray-100 rounded-full md:p-2 lg:p-0 md:mx-2 md:w-8 md:h-8 "
              >
                <FaEnvelope size="1rem" className="" />
              </a>
            </div>
          </div>
        </div>

        <nav
          className={
            'container flex flex-col items-center justify-between px-8 py-4 mx-auto sm:flex-row' +
            (scroll ? ' visible' : ' hidden')
          }
        >
          <Link to="/" className="flex items-center text-2xl">
            <div className="w-20 mr-3">
              <img src={Logo} alt="Logo" className="w-full" />
            </div>
          </Link>
          <div className="flex mt-4 sm:mt-0">
            <AnchorLink
              className="px-4 text-lg font-bold text-gray-100 lg:text-xl md:px-8 text-shadow"
              href="#hours"
            >
              Hours
            </AnchorLink>
            <AnchorLink
              className="px-4 text-lg font-bold text-gray-100 lg:text-xl md:px-8 text-shadow"
              href="#location"
            >
              Location
            </AnchorLink>
            <AnchorLink
              className="px-4 text-lg font-bold text-gray-100 lg:text-xl md:px-8 text-shadow"
              href="#specials"
            >
              Specials
            </AnchorLink>
          </div>
          <div className="hidden md:block">
            <span
              className="w-full px-6 py-5 text-xl text-center text-white whitespace-no-wrap bg-red-600 rounded-md cursor-pointer hover:bg-red-800 fontFredoka"
              data-glf-cuid="fcc9622a-6d23-4af1-895b-5ff1021ff7b0" 
              data-glf-ruid="83c6af9e-70c9-4dc6-b2e8-223c37d5f648"
              id="glfButton1"
            >
              {' '}
              See Menu &amp; Order
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
