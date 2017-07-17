import React, { Component } from 'react';
import Summary from './Summary';
import Future from './Future';

class AboutMe extends Component {

  render() {
    return (
      <div>
        <Summary />
        <Future />
      </div>
    );
  }
}

export default AboutMe;
