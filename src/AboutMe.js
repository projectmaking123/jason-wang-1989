import React, { Component } from 'react';
import Summary from './Summary';
import Future from './Future';
import FontAwesome from 'react-fontawesome';
import Mailto from 'react-mailto'

class Home extends Component {

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

        <h1 id="home">Design With Intention</h1>
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
