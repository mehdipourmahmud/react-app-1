import React from "react";
import "./carditems.css";
import Card from "../Card/Card";
import image1 from "../../assets/images/img-1.jpg";
import image2 from "../../assets/images/img-2.jpg";
import image3 from "../../assets/images/img-3.jpg";
import image4 from "../../assets/images/img-6.jpg";
import image5 from "../../assets/images/img-5.jpg";

const CardItems = () => {
  return (
    <div className="carditem">
      <h1 className="text">Check out these EPIC Destinations!</h1>
      <div className="card-grid">
        
        <div className="cards__items">
          <Card
            src={image4}
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
          />
        </div>
        <div className="cards__items">
          <Card
            src={image5}
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path="/services"
          />
        </div>
      </div>
      <div className="card-grid">
        <div className="cards__items">
          <Card
            src={image1}
            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
            label="Mystery"
            path="/services"
          />
        </div>
        <div className="cards__items">
          <Card
            src={image2}
            text="Experience Football on Top of the Himilayan Mountains"
            label="Adventure"
            path="/products"
          />
        </div>
        <div className="cards__items">
          <Card
            src={image3}
            text="Ride through the Sahara Desert on a guided camel tour"
            label="Adrenaline"
            path="/sign-up"
          />
        </div>
      </div>
    </div>
  );
};

  

  

export default CardItems;
