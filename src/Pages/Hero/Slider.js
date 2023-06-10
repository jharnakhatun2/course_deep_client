import React, { useEffect, useState } from 'react';

export const Slider = ({ slides, interval }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [slides, interval]);
  return (
    <div className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item${index === currentSlideIndex ? ' active' : ''}`}
          >
            <div className=''>
            <img src={slide.image} className="d-block w-100 vh-100 max-w-100" alt={`Slide ${index}`} />
            <div className="carouselTitle">
               <h3 className='text-responsive fw-bold text-uppercase text-white'>{slide.title}</h3>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
