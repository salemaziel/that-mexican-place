import React from 'react';

import Fade from "react-reveal/Fade"

const S2BizDetailsCard = () => {
return(
    <>
<div className="container w-full h-full px-4 mx-auto my-20">
  <Fade bottom>
  <div className="container flex flex-col text-gray-800 bg-white border border-gray-200 rounded-lg shadow-xl md:flex-row rounded-xl">
    {/*	
      	<img class="mb-8 h-66 w-full object-cover object-center rounded-t-xl" src="https://source.unsplash.com/900x600" alt="" />
  */}
    <div className="w-full mx-auto">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.8302429052183!2d-117.09370068470827!3d33.13982408086392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf4b028a9c805%3A0x2f75747a6e44876c!2sThat%20Mexican%20Place!5e0!3m2!1sen!2sus!4v1612178335240!5m2!1sen!2sus" width="100%" height="100%" className="w-full h-64 mb-8 rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-r-none md:h-full" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
    </div>
    <div id="hours" className="w-full">
      <h2 className="mb-8 text-2xl font-bold text-center sm:text-xl md:text-2xl md:mt-5">Hours</h2>
      <div className="justify-center table w-full ">
        <table className="w-full mx-auto mb-16 table-auto">
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Sunday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 10:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Monday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 10:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Tuesday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 10:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Wednesday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 10:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Thursday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 10:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Friday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 10:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Saturday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 10:00pm </span>  
              </td>
            </tr>
          </tbody>     
        </table>
      </div>
      <div id="location"></div>
      <div className="px-5 mx-auto mb-10 text-2xl text-center">
        <span className="block pb-5 mx-auto text-4xl text-center">Location</span>
        <a href="https://www.google.com/maps/dir//That+Mexican+Place,+200+W+El+Norte+Pkwy,+Escondido,+CA+92026/@33.1398241,-117.0937007,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dbf4b028a9c805:0x2f75747a6e44876c!2m2!1d-117.091512!2d33.1398241" className="text-center text-red-700 underline lg:px-5"> 200 W El Norte Pkwy Suite 9 Escondido, CA 92026 </a>
        <span className="block py-5 mx-auto text-4xl text-center">Phone</span>
        <a href="tel:760743-3783" className="text-center text-red-700 lg:px-5"> (760) 743-3783 </a>
      </div>
    </div>
  </div>
  </Fade>
</div>


    </>
)
}

export default S2BizDetailsCard;
