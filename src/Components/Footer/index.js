import './Footer.css'
import footerLogo from '../../assets/img/footerLogo.svg'
import facebook from '../../assets/img/facebook.svg'
import twiter from '../../assets/img/twiter.svg'
import insta from '../../assets/img/insta.svg'
import phone from '../../assets/img/phone.svg'
import { useEffect, useRef, useState } from 'react'

const Footer = ({ Scndref, children }) => {
    const firstDivRef = useRef(null);
    const secondDivRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        // Get the height of the first div
        if (firstDivRef.current) {
            setHeight(firstDivRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        // Set the height of the second div
        if (secondDivRef.current) {
            secondDivRef.current.style.height = `${height}px`;
        }
    }, [height]);
    return (
        <>
            <div className="blue-haxagon-footer ">
                <div className="blue-footer-inner-bg">
                     <div className="blue-footer-inner"> 
                        <div className="purple-haxagon-footer">
                            <div className="purple-footer-inner" ref={secondDivRef}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" clip-test w-108 position-absolute top-30 pt-4 pb-3 start-50 translate-middle-x" ref={firstDivRef}>
                <div className="container">
                    <div className="row footer-pad gap-3 gap-md-0">
                        <div className="col-12 col-md-6 col-lg d-flex flex-column gap-3 align-items-start">
                            <img src={footerLogo} alt='thrillzone' height='110px' />
                            <p className="mb-0 font-space fs-30 text-white"> The Pinnacle of Entertainment Hubs</p>
                            <div className="d-flex gap-3">
                                <div className="bg-white rounded-4-circle py-1 px-2">
                                    <img src={facebook} alt='fb' height='15px' width='15px' />
                                </div>
                                <div className="bg-white rounded-4-circle py-1 px-2">
                                    <img src={twiter} alt='X' height='15px' width='15px' />
                                </div>
                                <div className="bg-white rounded-4-circle py-1 px-2">
                                    <img src={insta} alt='insta' height='15px' width='15px' />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg align-content-center">
                            <p className="font-space text-white fs-30 mb-0 mb-lg-3 ">Address</p>
                            <p className="font-poppins text-white fs-16" >Deerfields mall, level 4,Abu Dhabi, United Arab Emirates</p>
                            <div className="d-flex gap-2">
                                <div className="bg-white rounded-4-circle py-1 px-2">
                                    <img src={phone} alt='phn' height='15px' width='15px' />
                                </div>
                                <p className="font-poppins text-white fs-16 mb-0 align-self-center">+92-300-9009009</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-3 d-flex align-items-center py-md-4 py-lg-0 gap-3 d-lg-block">
                            <p className="font-space fs-30 text-white">Links</p>
                            <p className="font-poppins fw-400 text-nowrap fs-16 text-white">Home</p>
                            <p className="font-poppins fw-400 text-nowrap fs-16 text-white">About Us</p>
                            <p className="font-poppins fw-400 text-nowrap fs-16 text-white">Birthday Party</p>
                            <p className="font-poppins fw-400 text-nowrap fs-16 text-white">Gallery</p>
                            <p className="font-poppins fw-400 text-nowrap fs-16 text-white">Packages</p>
                        </div>
                    </div>
                    <div className="col">
                        <hr className="my-4 bg-white" />
                    </div>
                    <p className="fs-18 fw-500 font-poppins-500 text-white text-center">Copyright © {new Date().getFullYear()} Thrill Zone Entertainment Center. All rights reserved</p>
                </div>
            </div>
        </>
    );
}

export default Footer;