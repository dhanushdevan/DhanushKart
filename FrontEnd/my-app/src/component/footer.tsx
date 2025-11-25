import React from 'react';
import './footer.css';

function Footer() {
  const [toast, setToast] = React.useState<{ show: boolean; message: string }>({ show: false, message: '' });
  
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToast({ show: true, message: 'Thank you for subscribing!' });
    
    // Auto-dismiss toast after 3 seconds
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000);
  };
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
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit">Subscribe</button>
          </form>
          {toast.show && <div className="toast-notification">{toast.message}</div>}
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