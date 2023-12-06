import React, { useState } from 'react';
import ScrollReveal from 'scrollreveal';

const YourComponent = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleScroll = () => {
    setMenuActive(false);
  };

  window.onscroll = handleScroll;

  const sr = ScrollReveal({
    distance: '60px',
    duration: '2500',
    delay: '400',
    reset: true,
  });

  sr.reveal('.text', { delay: 200, origin: 'top' });
  sr.reveal('.form-container form', { delay: 200, origin: 'left' });
  sr.reveal('.heading', { delay: 200, origin: 'top' });
  sr.reveal('.ride-container .box', { delay: 200, origin: 'top' });
  sr.reveal('.services-container .box', { delay: 200, origin: 'top' });
  sr.reveal('.about-container .box', { delay: 200, origin: 'top' });
  sr.reveal('.reviews-container .box', { delay: 200, origin: 'top' });

  return (
    <div>
      <div id="menu-icon" className={`bx-x ${menuActive ? 'bx-x' : ''}`} onClick={handleMenuClick}>
        {/* Your menu icon content goes here */}
      </div>

      <div className={`navbar ${menuActive ? 'active' : ''}`}>
        {/* Your navbar content goes here */}
      </div>

      {/* The rest of your JSX content goes here */}
    </div>
  );
};

export default YourComponent;
