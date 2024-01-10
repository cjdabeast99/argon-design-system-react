import React, { useState, useRef, useEffect } from 'react';
import 'assets/css/scrollfade.css';

const ScrollFade = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.disconnect(); // Cleanup the observer
  }, []);

  return (
    <div
      className={`fade-in-section ${props.direction ? props.direction : 'down-up'} ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default ScrollFade;