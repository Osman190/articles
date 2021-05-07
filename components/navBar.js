import React, { useState, useEffect } from 'react';
import Logo from './logo';


const Navigation = () => {
  const [scrolling, setScrolling] = useState("");
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-light bg-light ${
          scrollTop ? 'bg-scrolled' : scrolling
        }`}
        bg='light'
        variant='light'
      >
        <div className='container'>
          <a id='header-signature' href='#'>
            <Logo />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#main-navigation'
            aria-controls='main-navigation'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='main-navigation'>
          <div className="navbar_right">
            <ul>
            
            </ul>
        </div>
        <div className="shief" bg="light"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

