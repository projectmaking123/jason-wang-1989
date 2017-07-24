import React, { Component } from 'react';
import axios from 'axios';
import Icons from './Icons'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: '',
      icon: '',
      daily: [],
      summary: '',
      value: '',
      lat: null,
      lng: null
    }

    this.handleForecast = this.handleForecast.bind(this)
    this.handleCity = this.handleCity.bind(this)
  }

  componentDidMount() {

  }

  handleCity(e) {
    e.preventDefault()
    axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${this.state.value}`)
    .then(response => {
      this.setState({
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.lng
      })
      this.handleForecast();
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  handleForecast() {
    axios.get(`https://api.darksky.net/forecast/9d7ddb99e04527e685250ca72ac20594/${this.state.lat},${this.state.lng}`)
    .then(response => {
      this.setState({
        currentTemp: response.data.currently.apparentTemperature,
        icon: response.data.currently.icon,
        daily: response.data.daily.data,
        summary: response.data.daily.summary
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
     <div>
       <p>Enter below a country, state, or city's initials or full name to get a 7 day forecast</p>
       <div id="container">
        <div id="form">
          <form onSubmit={this.handleCity} className="entypo-search">
            <fieldset><input id="search" placeholder="Search For A State" value={this.state.value} onChange={(event) => this.setState({value: event.target.value})} /></fieldset>
            <input type="submit"/>
          </form>
        </div>
      </div>
         <p>
           {this.state.summary}
         </p>
        <div className="temp-container">
          {
            this.state.daily.map((date,key) =>
              <Icons date={date} i={key} key={key}/>
            )
          }
        </div>
     </div>
    );
  }
}

export default Home;
