import React, { Component, PropTypes } from 'react';
import Summary from './Summary';
import Projects from './Projects';
import Future from './Future';

class AboutMe extends Component {
  constructor(props) {
    super(props);

  }

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
