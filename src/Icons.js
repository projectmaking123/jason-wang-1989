import React, { Component } from 'react';

class Icons extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    if(this.props.date.icon.includes('cloud')) {
      return (
        <div>
        <section className="day-temp">
        { month + "/" + parseInt(day + this.props.i, 10) + " "}
        <section>{ this.props.date.apparentTemperatureMax }<i style={{fontSize: '1.1em' }} className='wi-fahrenheit'></i></section>
        <i className='wi-cloudy'></i>
        </section>
        </div>
      );
    } else if (this.props.date.icon.includes('clear')){
      return (
        <div>
        <section className="day-temp">
        { month + "/" + parseInt(day + this.props.i, 10) + " "}
        <section>{ this.props.date.apparentTemperatureMax }<i style={{fontSize: '1.1em' }} className='wi-fahrenheit'></i></section>
        <i className='wi-day-sunny'></i>
        </section>
        </div>
      );
    } else if (this.props.date.icon.includes('wind')){
      return (
        <div>
        <section className="day-temp">
        { month + "/" + parseInt(day + this.props.i, 10) + " "}
        <section>{ this.props.date.apparentTemperatureMax }<i style={{fontSize: '1.1em' }} className='wi-fahrenheit'></i></section>
        <i className='wi-windy'></i>
        </section>
        </div>
      );
    } else {
      return (
        <div>
        <section className="day-temp">
        { month + "/" + parseInt(day + this.props.i, 10) + " "}
        <section>{ this.props.date.apparentTemperatureMax }<i style={{fontSize: '1.1em' }} className='wi-fahrenheit'></i></section>
        <i className={`wi-${this.props.date.icon}`}></i>
        </section>
        </div>
      );
    }
  }
}

export default Icons;
