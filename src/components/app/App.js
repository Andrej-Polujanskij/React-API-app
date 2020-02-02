import React, { Component } from 'react';

import MainScreen from '../main-screen/main_screen';
import AllCarsList from '../all-cars-list/all_cars_list'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allCarsData: []
    };
  }

  componentDidMount(){
    this.getData();
  };

  buttonHandler = () => {
    this.getData();
  };

  getData = () => {
    
    fetch('https://cors-anywhere.herokuapp.com/https://backend.daviva.lt/API/InformacijaTestui', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      return res.json()
    })
    .then( (myData) => this.setState({allCarsData: [...this.state.allCarsData, myData] }))
  };


  render() {
    return (
      <div>
        <MainScreen  />
        <AllCarsList addCard={this.buttonHandler} allCarsOffers={this.state.allCarsData} />
      </div>
    );
  }
};


export default App;
