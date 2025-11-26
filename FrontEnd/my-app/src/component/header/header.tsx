import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../logo.svg';
import './header.css';
import Bag from '../../pages/bagpage/bag';
function Header() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const locRouter = useLocation();
  const isActive = (path: string) => locRouter.pathname === path;
  const [isbagOpen, setIsbagOpen] = useState(false);
const handleBagClick = () => {
    setIsbagOpen(!isbagOpen);
};
const loadData = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000)); // fake API call
    setLoading(false);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
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
          <a className="icon cart" onClick={handleBagClick}>Bag<span className="badge">0</span></a>
          <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(!open)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </header>
     
    </div>
      {isbagOpen && (
        <>
          <div className="sidebar-backdrop" onClick={handleBagClick} />
          <aside className="sidebar-bag" role="dialog" aria-modal="true">
            <Bag bagHandler={handleBagClick} />
          </aside>
        </>
      )}
    </>
  );
}

export default Header;