import React from 'react';
import TharImage from '../img/Thar.png';
import { NavLink } from 'react-router-dom';

function About(){
  return (
    <section className="about" id="about">
      <div className="heading">
        <span>About Us</span>
        <h1>Best Customer Experience</h1>
      </div>
      <div className="about-container">
        <div className="about-img">
          <img src={TharImage} alt="Thar" />
        </div>
        <div className="about-text">
          <span>About Us</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius nesciunt, rerum quasi quaerat fugit ullam
            earum sequi, tempora minima aut nihil minus. Quasi non porro beatae. Asperiores, obcaecati dolore? Quis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem accusamus omnis dolorum dolor
            voluptates, quia odio blanditiis eos accusantium quisquam velit quo, excepturi ipsa tempora. Quae
            recusandae omnis aperiam!
          </p>
          <NavLink to={'/approach'} className="btn">
            Approach Us
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default About;