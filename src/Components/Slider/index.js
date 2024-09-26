import React, { useState } from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../../assets/img/carousal1.png'
import carousel2 from '../../assets/img/carousal2.png'
import carousel3 from '../../assets/img/carousal3.png'
import play from '../../assets/img/play_btn.svg'
import IrrParallelogram from '../IrrParallelogram/IrrParallelogram';

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        centerMode: true,
        centerPadding: '30%', // Adjusted to make left and right slides 50% visible
        slidesToShow: 1, // Only one slide is fully shown at a time
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        beforeChange: (current, next) => setActiveSlide(next),
        focusOnSelect: true,
        slide: 'div',
        prevArrow: <img src={play} alt='prev' />, // Set custom prev arrow
        nextArrow: <img src={play} alt='next' /> // Set custom next arrow
    };


    const slides = [
        { id: 1, image: carousel3 },
        { id: 2, image: carousel1 },
        { id: 3, image: carousel2 },
        // { id: 4, image: cafe },
        // { id: 5, image: toddler },
        // { id: 6, image: bumper },
    ];


    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide borderParallelogram position-relative h-100x ${index === activeSlide ? 'active' : ''}`}
                    >
                        <IrrParallelogram>
                            <img src={slide.image} alt={`Slide ${slide.id}`} />
                        </IrrParallelogram>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
