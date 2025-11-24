import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>DhanushKart</h3>
          <p>Your friendly neighbourhood store — delivered.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/careers">Careers</a>
            <a href="/blog">Blog</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="/help">Help Center</a>
            <a href="/contact">Contact Us</a>
            <a href="/terms">Terms</a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay in touch</h4>
          <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DhanushKart. All rights reserved.</p>
        <div className="socials">
          <a href="#" aria-label="facebook">Facebook</a>
          <a href="#" aria-label="twitter">Twitter</a>
          <a href="#" aria-label="instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;