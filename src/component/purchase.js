import React, { useState } from 'react';
import DATA from '../Data';
import { NavLink } from 'react-router-dom';

function Purchase() {
  const [formData, setFormData] = useState({
    location: '',
    pickupDate: '',
    returnDate: '',
   
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [selectedCar, setSelectedCar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    if (!formData.location || !formData.pickupDate || !formData.returnDate) {
      alert('Please fill out all fields');
    } else {
      // Perform any additional logic with the form data if needed
      // For now, simply select the first car from the DATA array
      const defaultSelectedCar = DATA[0];
      setSelectedCar(defaultSelectedCar);
    }
  };

  return (
    <>
      <div className="purchase">
        <section className="ride" id="ride">
          <div className="heading">
            <span>How It Works</span>
            <h1>Rent with 3 Easy Steps</h1>
          </div>
          <div className="ride-container">
            <div className="box">
              <i className='bx bxs-map'></i>
              <h2 className="adjust">Choose a Location</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, placeat inventore aut velit nesciunt
                corrupti saepe dolorem eos perferendis voluptatem aperiam rem omnis sint aspernatur, reprehenderit illo
                nihil atque doloribus?
              </p>
            </div>
            <div className="box">
              <i className='bx bxs-calendar-check'></i>
              <h2>Choose a Pick-Up Date</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, placeat inventore aut velit nesciunt
                corrupti saepe dolorem eos perferendis voluptatem aperiam rem omnis sint aspernatur, reprehenderit illo
                nihil atque doloribus?
              </p>
            </div>
            <div className="box">
              <i className='bx bx-calendar-star'></i>
              <h2 className="adjust">Book a Car </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, placeat inventore aut velit nesciunt
                corrupti saepe dolorem eos perferendis voluptatem aperiam rem omnis sint aspernatur, reprehenderit illo
                nihil atque doloribus?
              </p>
            </div>
          </div>
        </section>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span>Location</span>
              <input
                type="search"
                name="location"
                id="location"
                placeholder="Search Places"
                onChange={handleChange}
                value={formData.location}
              />
            </div>
            <div className="input-box">
              <span>Pick-Up Date</span>
              <input
                type="date"
                id="pickupDate"
                name="pickupDate"
                onChange={handleChange}
                value={formData.pickupDate}
              />
            </div>
            <div className="input-box">
              <span>Return Date</span>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                onChange={handleChange}
                value={formData.returnDate}
              />
            </div>
            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>

        {selectedCar && (
          <div className="selected-car-details">
            <h2>Selected Car Details</h2>
            <img src={selectedCar.image} alt={selectedCar.model} />
            <p>{selectedCar.year}</p>
            <h3>{`${selectedCar.company} ${selectedCar.model}`}</h3>
            <h2>{`Rs${selectedCar.price} `}</h2>
          </div>
        )}

        <section className="services" id="services">
          <div className="heading">
            <span>Our Services</span>
            <h1>Explore Our Top Deals <br /> From Top Rated Dealers</h1>
          </div>

          <div className="services-container">
            {DATA.map((data) => (
              <div className="box" key={data.id}>
                <div className="box-img">
                  <img src={data.image} alt={data.model} />
                </div>
                <p>{data.year}</p>
                <h3>{`${data.company} ${data.model}`}</h3>
                <h2>{`Rs${data.price} `}</h2>
                <NavLink to={`/rent/${data.id}`} className="btn btn-primary">
                  Rent Now
                </NavLink>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Purchase;
