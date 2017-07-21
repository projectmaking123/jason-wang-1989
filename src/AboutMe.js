import React, { Component } from 'react';
import Summary from './Summary';
import Future from './Future';
import FontAwesome from 'react-fontawesome';
import Mailto from 'react-mailto'

class AboutMe extends Component {

  render() {
    return (
      <div>
        <div>
          <h1>
            <a href="https://github.com/projectmaking123">
              <FontAwesome name='github' />
            </a>
          </h1>
        </div>

        <div>
          <h1>
            <Mailto email='jasonw4dev@gmail.com'>
              <FontAwesome name='envelope' />
            </Mailto>
          </h1>
        </div>

        <Summary />
        <Future />
      </div>
    );
  }
}

export default AboutMe;
