import React, { Component, PropTypes } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
     <div>
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
