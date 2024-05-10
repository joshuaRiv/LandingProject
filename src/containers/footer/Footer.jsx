import React from 'react';
import youtubeLogo from '../../assets/youtube.svg';
import linkedInLogo from '../../assets/linkedin.svg';
import instagramLogo from '../../assets/instagram.svg';
import xLogo from '../../assets/x.svg';
import aicraftLogo from '../../assets/aicraftLogo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="footerHeader">
      <div className="gpt3__footer-links_logo">
        <img src={aicraftLogo} alt="gpt3_logo" />
      </div>
      <div className="iconsContainer">
        <h3 className="miniTitle">SÍGUENOS</h3>
        <div className="iconRow">
          <div className="iconFooter" id="youtube">
            <img src={youtubeLogo} alt="Logo youtube" />
          </div>
          <div className="iconFooter" id="linkedIn">
            <img src={linkedInLogo} alt="Logo linkedIn" />
          </div>
          <div className="iconFooter" id="instagram">
            <img src={instagramLogo} alt="Logo instagram" />
          </div>
          <div className="iconFooter" id="x">
            <img src={xLogo} alt="Logo x" />
          </div>
        </div>
      </div>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 Aicraft.</p>
    </div>
  </div>
);

export default Footer;
