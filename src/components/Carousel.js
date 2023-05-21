import React, { useState } from "react";
import {
  pexels1,
  pexels2,
  pexels3,
  pexels4,
  pexels5,
  pexels6,
} from "../assets/index";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [pexels6, pexels1, pexels2, pexels3, pexels4, pexels5];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 5 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 5 ? 0 : (prev) => prev + 1);
  };

  // console.log(currentSlide)
  return (
    <div className="Carousel w-full h-auto overflow-x-hidden">
      <div className="w-screen relative">
        <div
          className="w-[600vw] h-[50vw] flex duration-1000 transition-transform ease-in"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          <img
            src={pexels6}
            alt="products-1"
            className="w-screen h-[500px] object-cover"
            loading="eager"
          />
          <img
            src={pexels1}
            alt="products-1"
            className="w-screen h-[500px] object-cover"
          />
          <img
            src={pexels2}
            alt="products-1"
            className="w-screen h-[500px] object-cover"
          />
          <img
            src={pexels3}
            alt="products-1"
            className="w-screen h-[500px] object-cover"
          />
          <img
            src={pexels4}
            alt="products-1"
            className="w-screen h-[500px] object-cover"
          />
          <img
            src={pexels5}
            alt="products-1"
            className="w-screen h-[500px] object-cover"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-28 top-96">
          <div className="hover:cursor-pointer border-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <BsBoxArrowLeft className="w-10 h-16" onClick={prevSlide} />
          </div>
          <div className="hover:cursor-pointer border-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <BsBoxArrowRight className="w-10 h-16" onClick={nextSlide} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
