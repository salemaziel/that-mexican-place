import React from 'react';
import Logo from '../../images/logo-that-mexican-place-old.png';
import {
  FaFacebookF,
  FaEnvelope,
  FaYelp,
} from 'react-icons/fa';


const Footer2 = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
          <div className="flex-shrink-0 w-3/4 mx-auto text-center md:w-1/2 md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 p-2 text-white bg-red-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>*/}
              <img src={Logo} alt="" className="w-24" />
              <span className="ml-3 text-xl">That Mexican Place </span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              We have a variety of mexican food including: enchiladas, chilaquiles, burritos, tacos,
              tortas and more. We invite you to try our authentic Mexican Food.
            </p>
          </div>
          <div className="flex flex-wrap justify-end flex-grow mt-10 -mb-10 text-center md:pl-10 md:mt-0 md:text-left">
            <div className="w-full ml-auto lg:w-3/4 md:w-3/4">
              <h2 className="inline-block text-xl font-semibold text-left text-gray-800">
                Join Our Newsletter
              </h2>
              <p className="pl-px text-xs text-gray-700">
                Latest news, updates, and coupons delivered monthly to your inbox.
              </p>
              <form 
              action="#" 
              className="mt-2"
              name="newsletterForm"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                      <input type="hidden" name="form-name" value="newsletterForm" />
              
                <div className="flex items-center">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-2 py-4 mr-2 bg-gray-100 border border-gray-400 rounded-md shadow-inner focus:outline-none"
                    required
                  />
                  <button
                    className="px-5 py-2 text-gray-200 bg-green-600 rounded shadow "
                    style={{ marginLeft: '-7.8rem' }}
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
            <p className="text-sm text-center text-gray-100 sm:text-left">
              © 2021 That Mexican Place
            </p>
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
                className="ml-3 text-gray-100"
                href="https://www.yelp.com/biz/that-mexican-place-escondido-3"
                target="_blank"
                rel="noreferrer noopener"
              >

                <FaYelp />
              </a>
              
              <a
                className="ml-3 text-gray-100"
                href="https://www.facebook.com/That-Mexican-Place-247214365743894/"
                target="_blank"
                rel="noreferrer noopener"
              >

                <FaFacebookF />
              </a>

              <a
                className="ml-3 text-gray-100"
                href="mailto:thatmexicanplacesco@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
