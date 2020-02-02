import React from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types';

import './car_card.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarCard = (props) => {
  const {carInfo} = props;
  return(
      <div className="car-card">
        <div className="pictures">
        <Slider>
          {
            carInfo.nuotraukos.map((item, id) => 
              <img src={item} key={id} alt="Car pictures"/>
            )}
          </Slider>

        </div>

        <div className="car-info">
           <h2>{carInfo.marke}</h2>
           <p>Modelis: {carInfo.modelis}</p> 
           <p>Metai: {carInfo.metai}</p>
           <span><p>{carInfo.kaina} &euro;</p></span> 
        </div>
      </div>
  )
}

CarCard.propTypes = {
  carInfo: PropTypes.object.isRequired,
};

export default CarCard;