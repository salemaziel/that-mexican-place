import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Logo from '../images/logo-that-mexican-place-old.png';

const LocationModal = ({ isOpen, onSelect }) => {
    //    let [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onClose={() => { }} className="relative z-50">
            <div className="fixed inset-0 flex items-center justify-center p-4">
                {/*<Dialog.Overlay className="fixed inset-0 bg-black opacity-75" aria-hidden="true" />*/}
                <Dialog.Panel>
                    <div className="relative max-w-md p-6 mx-auto bg-white bg-opacity-50 rounded lg:max-w-2xl" style={{ backdropFilter: 'blur(2px)' }}>
                        <Dialog.Title className="text-xl text-center text-white fontFredoka" style={{ textShadow: "2px 2px 4px black" }}>Select Your Location</Dialog.Title>
                        <div className="mt-4 space-y-4">


                            <div className='flex flex-row justify-around w-full'>


                                <div className='w-1/2 p-4 mb-5 rounded-lg hover:bg-black hover:bg-opacity-50 focus:bg-black focus:opacity-50'>
                                    <button
                                        className="w-auto focus:outline-none"
                                        onClick={() => {
                                            onSelect('escondido');
                                            setIsOpen(false);
                                        }}
                                    >
                                        <img
                                            className="object-cover object-center w-5/6 mx-auto rounded"
                                            alt="hero"
                                            src={Logo}
                                        />
                                        <div className="mx-auto text-center text-white fontFredoka">
                                            <span className="text-lg text-center fontFredoka" style={{ textShadow: "2px 2px 4px black" }}>Escondido</span>

                                            <span className="block w-full px-10 py-5 mt-2 text-lg text-center text-white bg-red-600 rounded-md cursor-pointer hover:bg-red-800 fontFredoka" style={{ textShadow: "2px 2px 4px black" }} >Select</span>
                                        </div>
                                    </button>
                                </div>



                                <div className='w-1/2 p-4 mb-5 rounded-lg hover:bg-black hover:bg-opacity-50 focus:bg-black focus:opacity-50'>
                                    <button
                                        className="w-auto focus:outline-none"
                                        onClick={() => {
                                            onSelect('hemet');
                                            setIsOpen(false);
                                        }}
                                    >
                                        <img
                                            className="object-cover object-center w-5/6 mx-auto rounded"
                                            alt="hero"
                                            src={Logo}
                                        />
                                        <div className="mx-auto text-center text-white fontFredoka">
                                            <span className="text-lg text-center fontFredoka" style={{ textShadow: "2px 2px 4px black" }}>Hemet</span>

                                            <span className="block w-full px-10 py-5 mt-2 text-lg text-center text-white bg-red-600 rounded-md cursor-pointer hover:bg-red-800 fontFredoka" style={{ textShadow: "2px 2px 4px black" }} >Select</span>
                                        </div>
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default LocationModal;

{/*<button
                            className="w-full px-4 py-2 text-white bg-blue-600 rounded"
                            onClick={() => {
                                onSelect('escondido');
                                setIsOpen(false);
                            }}
                        >
                            Escondido
                        </button>*/}

{/*<button
                            className="w-full px-4 py-2 text-white bg-blue-600 rounded"
                            onClick={() => {
                                onSelect('hemet');
                                setIsOpen(false);
                            }}
                        >
                            Hemet
                        </button>*/}