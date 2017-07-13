import React, { Component, PropTypes } from 'react';

class Summary extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <h1 className="titles">Summary</h1>
        <p>
          Creating has always been a passion of mine. In high school I studied architecture, then majored in english literature in college.
          However once I graduated, I went to in banking, and ultimately I was unsatisfied. Learning to become a developer has reignited
          my urge to create and be a part of something I can be proud of. I have also recently become serious about fitness and my own body.
          Writing code that was DRY, made me want to become a more efficient person overall, espically with my body. Since March 2017 I have trained
          my body 6 out of 7 days a week. I inherited this discipline from the same work ethic that I needed to get through Dev Bootcamp.
          Working both body and mind so intensely has elevated me to a new understanding and appreciation of not only creation but its sustainability as well.
        </p>
      </div>
    );
  }
}

export default Summary;
