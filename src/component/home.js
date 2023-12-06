import React from 'react';
import iosImage from '../img/ios.png';
import iconImage from '../img/512x512.png';
import blueCarImage from '../img/blue-removebg-preview.png';
 function Home(){
  return (
<section className="home" id="home">
      <div className="text">
        <h1><span>Looking</span> to rent <br/> a car.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing eli repellatlaudantium dolores, nam excepturi corporis?</p>
        <div className="app-stores">
          <img src={iosImage} alt="" />
          <img src={iconImage} alt="" />
        </div>
      </div>
      <div className="blue-car">
        <img src={blueCarImage} alt="" />
      </div>
    </section>
  );
}

export default Home;
