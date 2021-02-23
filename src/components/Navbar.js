import React from 'react'

import LogoHeader from '../assets/SVG/LogoHeader.svg'

import '../assets/css/Navbar.css'

const Navbar = () => {
    return(
        <>
            <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20 navbarshadow">
                {/* logo */}
                <div className="inline-flex">
                    <a className="_o6689fn" href="/"><div className="hidden md:block">
                        <img src={LogoHeader} className="ml-16" alt="Logo Header" />
                    </div>
                    <div className="block md:hidden">
                        <img src={LogoHeader} alt="Logo Header" />
                    </div>
                    </a>
                </div>
                {/* end logo */}
                {/* search bar */}
                <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                    <div className="inline-block">
                    <div className="inline-flex items-center max-w-full">
                        <a href className="border-2 border-white rounded-full font-bold text-primary text-lg px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-100 mr-6">
                            About
                        </a>
                        <a href className="border-2 border-white rounded-full font-bold text-primary text-lg px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-100 mr-6">
                            FAQ
                        </a>
                        <a href className="border-2 border-white rounded-full font-bold text-primary text-lg px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-100 mr-6">
                            Linked Resources
                        </a>
                        <a href className="border-2 border-white rounded-full font-bold text-primary text-lg px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-100 mr-6">
                            Team
                        </a>
                    </div>
                    </div>
                </div>
                {/* end search bar */}
                {/* login */}
                <div className="flex-initial">
                    <div className="flex justify-end items-center relative">
                    <div className="flex mr-4 items-center">
                        
                        <a className="inline-block py-2 px-6 py-4 connect-wallet rounded-lg" href="#">
                            <div className="flex">
                                <div className="w-1/6 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="" width="18.229" height="15.589" viewBox="0 0 18.229 15.589">
                                        <g id="Connect_to_Wallet_After" data-name="Connect to Wallet After" transform="translate(0.6 0.6)">
                                            <path id="Path_2500" data-name="Path 2500" d="M266.107,461.942,274.052,459l1.089,2.942" transform="translate(-262.112 -459)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/>
                                            <path id="Path_2501" data-name="Path 2501" d="M269.66,471.324v-2.205a1.344,1.344,0,0,0-1.344-1.344H255.536a1.344,1.344,0,0,0-1.344,1.344v8.758a1.344,1.344,0,0,0,1.344,1.344h12.779a1.344,1.344,0,0,0,1.344-1.344v-2.206" transform="translate(-254.192 -464.832)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/>
                                            <path id="Rectangle_43" data-name="Rectangle 43" d="M2.174,0H7.4A.663.663,0,0,1,8.06.663V3.684a.663.663,0,0,1-.663.663H2.174A2.174,2.174,0,0,1,0,2.174v0A2.174,2.174,0,0,1,2.174,0Z" transform="translate(8.968 6.491)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/>
                                            <circle id="Ellipse_16" data-name="Ellipse 16" cx="0.689" cy="0.689" r="0.689" transform="translate(10.867 7.976)" stroke-width="1.2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="w-5/6">
                                    <div className="flex items-center text-white relative cursor-pointer whitespace-nowrap font-bold">Connect to a wallet</div>
                                </div>
                            </div>
                            
                        </a>
                    </div>
                    </div>
                </div>
                {/* end login */}
            </nav>

        </>
    )
}

export default Navbar