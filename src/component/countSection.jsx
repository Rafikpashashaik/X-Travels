import React, { useEffect, useState } from 'react';
import './CountSection.css';
import NumberCounter from './NumberCounterCode';
import { useInView } from 'react-intersection-observer';

function CountSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="countSection" ref={ref}>
      <h1 className="countSectionH1">
        <span className="number">
          {isVisible && <NumberCounter start={0} end={60} duration={3000} />}
          <span className="plus">+</span>
        </span>
        <span className="cities">Cities</span>
      </h1>
      <h1 className="countSectionH1">
        <span className="number">
          {isVisible && <NumberCounter start={0} end={10} duration={3000} />}k
          <span className="plus">+</span>
        </span>
        <span className="cities">Network of expert travel agents</span>
      </h1>
      <h1 className="countSectionH1">
        <span className="number">
          {isVisible && <NumberCounter start={0} end={10} duration={3000} />}Lakh
          <span className="plus">+</span>
        </span>
        <span className="cities">Travelers</span>
      </h1>
      <h1 className="countSectionH1">
        <span className="number">
          {isVisible && <NumberCounter start={0} end={97} duration={3000} />}
          <span className="plus">%</span>
        </span>
        <span className="cities">Positive quotient by travelers</span>
      </h1>
    </section>
  );
}

export default CountSection;
