import React from 'react';
import car1Image from '../img/car1.jpg';
import car2Image from '../img/car2.jpg';
import car3Image from '../img/car3.jpg';
import car4Image from '../img/car4.jpg';
import car5Image from '../img/car5.jpg';
import car6Image from '../img/car6.jpg';


function Services(){
  return (
    <section className="services" id="services">
      <div className="heading">
        <span>Our Services</span>
        <h1>Explore Our Top Deals <br /> From Top Rated Dealers</h1>
      </div>

      <div className="services-container">
        {/* Service Box 1 */}
        <div className="box">
          <div className="box-img">
            <img src={car1Image} alt="Car 1" />
          </div>
          <p>2K17</p>
          <h3>2k18 Honda Civic</h3>
          <h2>Rs48,73,070 | Rs45000 <span>month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div>

        {/* Service Box 2 */}
        <div className="box">
          <div className="box-img">
            <img src={car2Image} alt="Car 2" />
          </div>
          <p>2K17</p>
          <h3>2k18 Honda Civic</h3>
          <h2>Rs48,73,070 | Rs45000 <span>month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div>

        {/* Service Box 3 */}
        <div className="box">
          <div className="box-img">
            <img src={car3Image} alt="Car 3" />
          </div>
          <p>2K17</p>
          <h3>2k18 Honda Civic</h3>
          <h2>Rs48,73,070 | Rs45000 <span>month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div>

         {/* Service Box 4 */}
         <div className="box">
          <div className="box-img">
            <img src={car4Image} alt="Car 4" />
          </div>
          <p>2K17</p>
          <h3>2k18 Honda Civic</h3>
          <h2>Rs48,73,070 | Rs45000 <span>month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div>

         {/* Service Box 5 */}
         <div className="box">
          <div className="box-img">
            <img src={car5Image} alt="Car 5" />
          </div>
          <p>2K17</p>
          <h3>2k18 Honda Civic</h3>
          <h2>Rs48,73,070 | Rs45000 <span>month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div> 

         {/* Service Box 6 */}
         <div className="box">
          <div className="box-img">
            <img src={car6Image} alt="Car 6" />
          </div>
          <p>2K17</p>
          <h3>2k18 Honda Civic</h3>
          <h2>Rs48,73,070 | Rs45000 <span>month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div>
      </div>
    </section>
  );
}

export default Services;
