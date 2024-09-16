import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button ">
          <button className="pri-btn">ShopNow</button>
          <button className="sec-btn">Category</button>
        </div>

        <div className="sites">
          <p>Also available on</p>
          <div className="shopping-sites">
            <img src="./public/images/shops.png" alt="shops" srcset="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./public/images/shoe_image.png" alt="" srcset="" />
      </div>
    </main>
  );
};

export default Hero;
