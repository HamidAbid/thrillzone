import React, { useState, useRef } from "react";
import Topbar from "../Components/Topbar";
import HeadSection from "../Components/HomePage/Header";
import playIcon from '../assets/img/play_btn.svg'; // Your custom play icon
import pauseIcon from '../assets/img/pause_btn.svg'; // Your custom pause icon
// import videoFile from '../assets/s_video.mp4';
import IrrParallelogram from "../Components/IrrParallelogram/IrrParallelogram";
import BlueParallogram from "../Components/BlueParallogram/BlueParallogram";
import vr_man from '../assets/img/vr_man.JPG'; // Your custom play icon
import Footer from "../Components/Footer";
import Carousel from "../Components/Slider";
import ExperinceTrill from "../Components/ExperienceTrill";

const HomePage = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);


    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <> <Topbar />
            <div className="container-fluid p-0 ">
                <div>
                   
                    <div className="d-flex w-100 p-0 m-0 ">
                    <HeadSection img='home-banner' align='center' heading='Play the Day Away' heading2='Indoor playground, trampoline park, family entertainment center.'/>
                    </div>
                    <div className="container bg-white">
                     
                        <ExperinceTrill heading='EXPERIENCE A NEW THRILL' heading2='Thrill Zone is the ultimate destination for you and the kids to indulge in some serious fun with interactive play zones for all ages big and smal'/>

                    </div>
                </div>
                {/* <div className="container">
                    <div className="py-5">
                        <div className="videoClip borderParallelogram position-relative  ">
                            <IrrParallelogram>

                                <video
                                    className="clip-path-video w-100"
                                    autoPlay
                                    muted
                                    loop
                                    ref={videoRef}
                                >
                                    <source src='https://thrill-zone.vercel.app/videos/s_video.mp4' type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button className="video-control-btn" onClick={togglePlayPause}>
                                    <img src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" />
                                </button>
                            </IrrParallelogram>
                        </div>
                    </div>
                    <section className="pb-5 text-blue" >
                     
                            <p className="font-poppins-500 fw-bold text-black px-2 mb-0 ">About us</p>
                       

                        <div className="row mt-4 fw-bold justify-content-between">
                            <div className="col-12 col-md-5 font-poppins-500">
                                <p className="  fs-36 about-content" >Thrill Zone has something beyond the biggest Laser Tag field in Dubai</p>
                                <p >We have Enjoyable activities for all ages (5 years and above). Book a space at Thrill Zone for youngsters birthday parties, corporate group building or just a bit of excitement with family and friends…</p>
                                <button class="p-2  px-3 mt-3  btn btn-outline-primary text-center fs-16 d-inline-block" >Read More</button>

                            </div>
                            <div className="col-12 col-md-6   ">
                                 <IrrParallelogram> 
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                 </IrrParallelogram> 
                            </div>
                        </div> 
                    </section>
                     <section>
                        <BlueParallogram>
                            <p className="font-poppins-500 fw-bold text-black px-2 mb-0 ">Games</p>
                        </BlueParallogram>
                    </section> 

                </div>*/}
                <section className="py-5 mt-5">
                    <Carousel />
                </section>
                <section className="mt-5 position-relative overflow-hidden">
                    <Footer />
                </section>
            </div>
        </>
    );
};

export default HomePage;
