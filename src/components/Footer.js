import React from 'react';
import './Footer.css';
import insta_logo from '../assets/logos/instafull.png';
import facebook_logo from '../assets/logos/facebookfull.png'
import tiktok_logo from '../assets/logos/tiktokfull.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          Follow us:
          <br/>
          <br/>
          <a href="https://www.instagram.com/esu.lsfetc/" target="_blank" rel="noopener noreferrer">
            <img src={insta_logo} alt="Instagram" className="social-logo" />
            Instagram
          </a>
          <br/>
          <a href="https://www.facebook.com/esutimisoara/" target="_blank" rel="noopener noreferrer">
            <img src={facebook_logo} alt="Facebook" className="social-logo" />
            Facebook
          </a>
          <br/>
          <a href="https://www.tiktok.com/@ligaetc/video/7183740079494483205" target="_blank" rel="noopener noreferrer">
            <img src={tiktok_logo} alt="TikTok" className="social-logo" />
            TikTok
          </a>
        </div>
        <div className="social-links">
          <p>Coordonator ESU - 0754 665 557</p>
          <p>Președinte LSFETc - 0759 103 310</p>
          <p>esu@lsfetc.ro</p>
          <p>Bulevardul Vasile Parvan nr. 2, sala A 020, Timișoara</p>
        </div>
      </div>
      <div className="copyright-info">
        <p>Copyright © 2023 Electronics Summer University - Proiect marca LSFETc</p>
      </div>
    </footer>
  );
}

export default Footer;
