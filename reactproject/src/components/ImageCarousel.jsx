import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import Home from './Home';
import Navbar from "./Navbar";

const images = [
  "/src/assets/img/bufv.jpg",
  "/src/assets/img/img2.jpg",
  "/src/assets/img/img3.jpeg",
  "/src/assets/img/img4.jpeg",
  "/src/assets/img/img5.jpeg",
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [current]);


  return (
    <>
      <div className="h-[120vh] w-full">
        <Navbar />
        <h1 className="text-4xl text-center my-10 text-red-600 font-bold">
          Image Carousel
        </h1>
        <div className="flex items-center justify-center">
          <div className="flex text-4xl ">
            <FaAngleLeft onClick={prevSlide} className="cursor-pointer" />
          </div>
          {images.map(
            (image, index) =>
              current === index && (
                <div>
                  <img src={image} key={index} className="h-[100vh] object-center object-cover bg-cover bg-center" alt="image" />
                </div>
              )
          )}
          <div className="flex items-center text-4xl pointer">
            <FaChevronRight onClick={nextSlide} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
