'use client';

import React, { useState, useEffect } from 'react';
import './header.css';
import AppBtn from '@/app/components/appBtn/AppBtn';
import Nav from '@/app/components/nav/Nav';

const Header = () => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  return (
    <header
      id={'header'}
      className={`fixed-top d-flex align-items-center ${scroll > 100 ? 'header-scrolled' : undefined}`}
    >
      <div
        className={
          'container-fluid container-xl d-flex align-items-center justify-content-lg-between'
        }
      >
        <h1 className={'logo me-auto me-lg-0'}>
          <a href='/public'>Restaurant</a>
        </h1>
        {/*<a href='index.html' className={'logo me-auto me-lg-0'}>
          <img src='assets/img/logo.png' alt='' className={'img-fluid'} />
        </a>*/}

        <Nav />

        <AppBtn name={'book a table'} />
      </div>
    </header>
  );
};

export default Header;
