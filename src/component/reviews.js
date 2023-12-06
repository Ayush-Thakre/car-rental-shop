import React from 'react';
import rev1 from '../img/rev1.jpg';
import rev2 from '../img/rev2.jpg';
import rev3 from '../img/rev3.jpg';


function Reviews(){
  return (
    <section className="reviews" id="reviews">
      <div className="heading">
        <span>Reviews</span>
        <h1>What Our Customer Says</h1>
      </div>
      <div className="reviews-container">
        <div className="box">
          <div className="rev-img">
            <img src={rev1} alt="Review 1" />
          </div>
          <h2>Rajesh</h2>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, molestias excepturi sed, facilis recusandae
            aut soluta placeat at, animi tempore ratione doloremque doloribus adipisci. Et nemo quibusdam natus.
            Molestias, perferendis.
          </p>
        </div>

        <div className="box">
          <div className="rev-img">
            <img src={rev2} alt="Review 2" />
          </div>

          <h2>Rajesh</h2>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta facere excepturi laborum incidunt nihil
            voluptatibus ut iste delectus adipisci, deserunt culpa saepe quis cumque minus veniam porro eaque architecto
            officia!
          </p>
        </div>

        <div className="box">
          <div className="rev-img">
            <img src={rev3} alt="Review 3" />
          </div>
          <h2>Rajesh</h2>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat soluta tempora, tenetur non fugit ullam
            error temporibus sapiente laudantium ipsam ducimus enim reiciendis magnam illum quo nulla reprehenderit
            deleniti!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
