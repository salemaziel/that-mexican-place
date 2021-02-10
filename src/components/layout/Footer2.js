import React from "react"
import Logo from "../../images/logo-that-mexican-place.png"

const Footer2 = () => {
    return(
        <>
<footer className="text-gray-600 body-font">
  <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
      <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
        {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 p-2 text-white bg-red-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>*/}
        <img src={Logo} alt='' className="w-16 h-16 p-2" />
        <span className="ml-3 text-xl">That Mexican Place </span>
      </a>
      <p className="mt-2 text-sm text-gray-500">We have a variety of mexican food including: enchiladas, chilaquiles, burritos, tacos, tortas and more. We invite you to try our authentic mexican Food.</p>
    </div>
    <div className="flex flex-wrap justify-end flex-grow mt-10 -mb-10 text-center md:pl-10 md:mt-0 md:text-left">
    <div className="w-full ml-auto lg:w-1/2 md:w-3/4">
  <h2 className="inline-block text-xl font-semibold text-left text-gray-800">Join Our Newsletter</h2>
  <p className="pl-px text-xs text-gray-700">
    Latest news ,articles and updates montly delevered to your inbox.
  </p>
  <form action="#" className="mt-2">
    <div className="flex items-center">
      <input type="email" className="w-full px-2 py-4 mr-2 bg-gray-100 border border-gray-400 rounded-md shadow-inner focus:outline-none" required />
      <button className="px-5 py-2 text-gray-200 bg-green-600 rounded shadow " style={{marginLeft: '-7.8rem'}}>Sign Up</button>
    </div>
  </form>
</div>

      {/*<div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">CATEGORIES</h2>
        <nav className="mb-10 list-none">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
    </div>*/}
      {/*<div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">CATEGORIES</h2>
        <nav className="mb-10 list-none">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
</div>*/}
      {/*<div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">CATEGORIES</h2>
        <nav className="mb-10 list-none">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
</div>*/}
      {/*<div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">CATEGORIES</h2>
        <nav className="mb-10 list-none">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
</div>*/}
</div>
  </div>
  <div className="bg-green-700">
    <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
      <p className="text-sm text-center text-gray-100 sm:text-left">© 2021 That Mexican Place
      </p>
      <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
        <a className="text-gray-100" href="https://www.facebook.com/That-Mexican-Place-247214365743894/" target="_blank" rel="noreferrer">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-100" href="https://www.yelp.com/biz/that-mexican-place-escondido-3" target="_blank" rel="noreferrer">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-100" href="https://www.facebook.com/That-Mexican-Place-247214365743894/" target="_blank" rel="noreferrer">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        {/*<a className="ml-3 text-gray-100" href="https://www.facebook.com/That-Mexican-Place-247214365743894/" target="_blank" rel="noreferrer">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
</a>*/}
      </span>
    </div>
  </div>
</footer>




        </>
    )
}

export default Footer2