import React from 'react';
import jeep from '../img/jeep.png'
function Footer (){
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
        <img src={jeep } alt="" />

        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#ride">Ride</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#approach">Approach Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Contact Us:</p>
          <p>Email: carrent@gmail.com</p>
          <p>Phone: +91 7984567890</p>
        </div>
        <div className="footer-social">
          <p>Follow Us:</p>
          <div className="social-icons">
            <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
            <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
            <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Car Rental Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
