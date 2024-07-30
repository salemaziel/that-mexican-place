import React from 'react';

//import Fade from 'react-reveal/Fade';
import { Fade } from "react-awesome-reveal"

import { MdLocationOn } from 'react-icons/md';

import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const S2HoursLocation = ({ hours, mapSrc, googleMapsLink, address, phoneNumber }) => {
  return (
    <>

      <div className="container w-full h-full px-4 mx-auto my-20">
        <Fade direction="up" triggerOnce>
          <div className="container flex flex-col text-gray-800 bg-white border border-gray-200 rounded-lg shadow-xl md:flex-row rounded-xl">
            <div className="w-full mx-auto">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                className="w-full h-64 mb-8 rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-r-none md:h-full"
                loading="lazy"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="That Mexican Place Map Location"
              />
            </div>
            <div id="hours" className="w-full">
              <div id="location" className="">
                <h2 className="mb-8 text-2xl font-bold text-center sm:text-xl md:text-2xl md:mt-5">
                  Hours
                </h2>
                <div className="justify-center table w-full ">
                  <table className="w-full mx-auto mb-16 table-auto">
                    <tbody className="text-center">
                      {hours.map((day) => (
                        <tr
                          key={day.name}
                          className="relative py-1 text-xs transform scale-100 cursor-default"
                        >
                          <td className="h-10 pl-8 whitespace-no-wrap">
                            <span className="text-xl text-red-700"> {day.name} :</span>
                          </td>
                          <td className="pr-8 whitespace-no-wrap">
                            <span className="text-xl"> {day.hours} </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-5 pt-5 mx-auto mb-10 text-2xl text-left md:pl-10 lg:pl-32">
                  <span className="block pb-5 mx-auto text-4xl text-center">Location</span>
                  <div className="flex justify-center mx-auto lg:px-3">
                    <MdLocationOn size="3rem" className="mr-3" />
                    <a
                      href={googleMapsLink}
                      className="text-center text-red-700 underline "
                    >
                      {address}
                    </a>
                  </div>
                  <span className="block py-5 mx-auto text-4xl text-center">Phone</span>
                  <div className="flex justify-center mx-auto lg:px-3">
                    <FaPhoneAlt size="2rem" className="mr-3" />
                    <a href={`tel:${phoneNumber}`} className="text-left text-red-700 underline lg:px-5">
                      {phoneNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default S2HoursLocation;
