import React from 'react';
import PropTypes from 'prop-types';

import CarCard from '../car-card/car_card'
import './all_cars_list.scss'

const AllCarsList = (props) => {
  const {addCard, allCarsOffers} = props;
  return(
    <section>
      <div className="cars-list">
        {allCarsOffers.map((item, id) =>
          
          <CarCard key={id} carInfo={item}/>
        
        )}
      </div>
      <button className="add-car" onClick={addCard}><p>Pridėti</p></button>
    </section>
  )
}

AllCarsList.propTypes = {
  allCarsOffers: PropTypes.array.isRequired,
  addCard: PropTypes.func.isRequired,
};

export default AllCarsList;
