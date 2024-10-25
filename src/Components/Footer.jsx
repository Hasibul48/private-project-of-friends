import React from 'react'

import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Footer } from "flowbite-react";
import { Link } from 'react-router-dom';
function FooterComponent() {
    return (
        <Footer className='shadow-lg shadow-gray-700 mt-24 border-t-4 border-themeColor bg-slate-900 text-white' container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='mb-5 md:mb-0'>
                        <Link to={'/'}><h4 className='font-thin text-sm md:text-lg'>
                            <span className='bg-gradient-to-r text-xl from-indigo-600 via-blue-800 to-pink-700 text-white px-3 rounded-xl py-1 font-semibold'>
                                Dakhil 2025
                            </span>
                            Jabal-e-Noor Dakhil Madrasah
                        </h4></Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Quick Links" />
                            <Footer.LinkGroup col>
                                <Link to="/about">About</Link>
                                <Link to="/gallery">Gallery</Link>
                            </Footer.LinkGroup>
                        </div>
                        {/* <div>
                            <Footer.Title title="Follow me" />
                            <Footer.LinkGroup col>
                                <Link to="https://github.com/Hasibul48">Github</Link>
                                <Link to="https://www.linkedin.com/in/hm-hasibul-islam/">LinkedIn</Link>
                            </Footer.LinkGroup>
                        </div> */}
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Link to={'/privacy-policy'}>Privacy Policy</Link>
                                <Link to={'/terms-conditions'}>Terms &amp; Conditions</Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="">

                    <p className='text-center'>Copyright 2024 all rights reserved | Made by <Link className='text-yellow-300' to={'http://hmhasibul.netlify.app'}>Hasibul Islam</Link></p>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComponent