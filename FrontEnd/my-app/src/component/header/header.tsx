import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../logo.svg';
import './header.css';

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="forAllHeader">
      <header className="header">
        <div className="brand">
          <img src={logo} alt="DhanushKart logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-title">DhanushKart</span>
            <span className="brand-sub">Daily essentials, delivered</span>
          </div>
        </div>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <a href="/" className={isActive('/') ? 'active' : ''}>Home</a>
          <a href="/product" className={isActive('/product') ? 'active' : ''}>Products</a>
          <a href="/about" className={isActive('/about') ? 'active' : ''}>About</a>
          <a href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</a>
        </nav>

        <div className="header-right">
          <a className="icon" href="/login">Login</a>
          <a className="icon cart" href="/bag">Bag<span className="badge">0</span></a>
          <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(!open)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;