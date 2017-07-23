import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: '',
      icon: '',
      daily: [],
      summary: '',
      value: '',
      lat: '',
      lng: ''
    }

    this.handleCity = this.handleCity.bind(this)
  }

  componentDidMount() {

  }

  handleCity(e) {
    e.preventDefault()
    axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${this.state.value}&sensor=false`)
    .then(response => {
      this.setState({
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.lng
      })
    })
    .catch(function (error) {
      console.log(error);
    });

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
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1

    return (
     <div>
       <p>Enter A State's Initials or full name to get a 7 day Forecast</p>
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
            <div key={key}>
              <section className="day-temp" key={key}>
                { month + "/" + parseInt(day + key, 10) + " "}
                <p key={key}>{ date.apparentTemperatureMax }</p>
                <i className={"wi " + date.icon }></i>
              </section>
            </div>
          )
        }
      </div>
      <h1 id="home">Design With Intention</h1>
      <h1>
        <i className="wi-rain"></i>
      </h1>
      <div>
        <h2 id="quote">
          "Very well, then I contradict myself, I am large, I contain multitudes."
        </h2>
        <div>
          <div id="author">
            - Walt Whitman
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default Home;

      // <Skycons color='white' icon={'CLEAR_DAY'} />

// <section className="day-temp">{ month + "/" + parseInt(day, 10) }</section>
// <section className="day-temp">{ month + "/" + parseInt(day + 1, 10) }</section>
// <section className="day-temp">{ month + "/" + parseInt(day + 2, 10) }</section>
// <section className="day-temp">{ month + "/" + parseInt(day + 3, 10) }</section>
// <section className="day-temp">{ month + "/" + parseInt(day + 4, 10) }</section>
// <section className="day-temp">{ month + "/" + parseInt(day + 5, 10) }</section>
// <section className="day-temp">{ month + "/" + parseInt(day + 6, 10) }</section>
// <section className="day-temp">{ month + "/" + parseInt(day + 7, 10) }</section>
