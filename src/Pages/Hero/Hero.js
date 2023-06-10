import React from 'react';
import { Slider } from './Slider';

const Hero = () => {
  const sliderSlides = [
    {
      image: 'https://i.ibb.co/L8B58Vf/slider6.png',
      title: 'Started Coding Journey, Easy to Follow Guide to Programming',
      description: 'This is the first slide',
      buttonText: 'Learn More',
    },
    {
      image: 'https://i.ibb.co/2gV7yxf/New-Project-2.png',
      title: 'Unlocking Your Potential Through Programming',
      description: 'This is the second slide',
      buttonText: 'Get Started',
    },
    {
      image: 'https://i.ibb.co/Z8C5V2W/New-Project-1.png',
      title: 'Unleash the Power of Code, the Art of Programming',
      description: 'This is the third slide',
      buttonText: 'Explore',
    },
  ];
  
  
  
  return (
    <div className=''>
      <Slider className="vh-100" slides={sliderSlides} interval={3000} />
    </div>
  )
}

export default Hero


