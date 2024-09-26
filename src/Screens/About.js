import React, { useState, useRef } from "react";
import Topbar from "../Components/Topbar";
import HeadSection from "../Components/HomePage/Header";
// import IrrParallelogram from "../Components/IrrParallelogram/IrrParallelogram";
// import BlueParallogram from "../Components/BlueParallogram/BlueParallogram";
import Adventure from '../assets/img/adventureimg.png'
import vr_man from '../assets/img/vr_man.png'; // Your custom play icon
import about1 from '../assets/img/about1.png'
import about2 from '../assets/img/about2.png'
import about3 from '../assets/img/about3.png'
import about4 from '../assets/img/about4.png'
import about5 from '../assets/img/about5.png'
import Carousel from "../Components/Slider";
import Footer from "../Components/Footer";
const About = () => {
    return (
        <><Topbar />
            <div className="container-fluid p-0">
                <div className="">
                    
                    <div className="d-flex  p-0 m-0 ">

                        <HeadSection img='about-banner' align='bottom' heading='About Thrill Zone'/>
                    </div>
                </div>
                <section className="my-5">
                  <div className="row justify-content-center  font-poppins-500">
                  <h1 className="text-blue text-center"> Let the Adventure begin</h1>
                    <p className="col-sm-8 text-center fs-5 text-blue ">Dive into thrilling multiplayer battles, epic adventures, and the latest releases. Challenge friends or embark on solo missions. Get ready for non-stop fun!"</p>
                  </div>
                        <div className="d-flex  justify-content-center py-5 gap-2 ">

                            <div className="">
                               
                                    <img src={about1} alt='' className=" img-fluid rounded-4" />
                               
                               
                            </div>
                            <div className="   ">
                               
                                    <img src={about2} alt='' className=" img-fluid rounded-4" />
                                
                                
                            </div>
                            <div className="   ">
                                
                                    <img src={about3} alt='' className=" img-fluid rounded-4" />
                                
                                
                            </div>
                            <div className="   ">   
                                    <img src={about4} alt='' className=" img-fluid rounded-4" />            
                            </div>
                            <div className="">   
                                    <img src={about5} alt='' className=" img-fluid rounded-4" />            
                            </div>
                          

                        </div>
                    </section>
                  <section>
                    <div className="row justify-content-center  gap-3">
                        <div className="col-md-5 text-blue">
                            <h1 className="fs-1 fw-bold">
                            Welcome to Thrill Zone Entertainment Centre, the one of its kind Laser Tag arena in Pakistan!
                            </h1>
                            <p className="fs-5 pt-3">Thrill Zone Entertainment Centre is well designed and equipped to cater to your requirements. Laser Tag is a safe and hi-tech combat team game suitable for kids and adults. The Jurassic Themed interior layout of the arena is guaranteed to thrill you, and provides a physical and mental challenge to people of all ages—its safe, and no environmental mess but most importantly it is planned to offer serious fun for everyone.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={Adventure} className="img-fluid rounded-4" alt="" />
                        </div>
                    </div>
                  </section>
                   
                  <section className="mt-5 position-relative overflow-hidden">
                    <Footer />
                </section>
            </div>

        </>
    );
}

export default About;