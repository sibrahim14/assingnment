import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h3>Innerwear Store</h3>
          <p>Comfort & quality you can trust.</p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@innerwear.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Innerwear Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
