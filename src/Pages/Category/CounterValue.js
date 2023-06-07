import React, { useEffect, useRef } from 'react';


const CounterValue = ({initialValue}) => {
    const counterRef = useRef(null);

  useEffect(() => {
    const counterElement = counterRef.current;
    const counterValue = parseInt(counterElement.textContent);
    let counter = 0;
    const duration = 3500;
    const startTime = performance.now();

    const animateCounter = (timestamp) => {
      const progress = timestamp - startTime;
      const increment = Math.ceil((counterValue * progress) / duration);

      if (progress >= duration) {
        counterElement.textContent = counterValue;
      } else {
        counterElement.textContent = Math.min(counter + increment, counterValue);
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);
  }, []);
  return (
    <span className="counter-value" ref={counterRef}>
     {initialValue}
    </span>
  )
}

export default CounterValue
