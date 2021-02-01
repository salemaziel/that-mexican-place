import React from 'react';

import { FaFacebook, FaYelp } from "react-icons/fa"

const Footer = () => (
  <footer className="container px-3 py-16 mx-auto mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">We have a variety of mexican food including: enchiladas, chilaquiles, burritos, tacos, tortas and more. We invite you to try our authentic mexican Food.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.yelp.com/biz/that-mexican-place-escondido-3"><FaYelp /></a>
          </li>
          <li>
            <a href="https://www.facebook.com/That-Mexican-Place-247214365743894/"><FaFacebook /></a>
          </li>
          <li>
            <a href="https://github.com/codebushi/gatsby-starter-lander">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
