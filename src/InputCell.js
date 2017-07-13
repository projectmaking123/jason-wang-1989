import React, { Component, PropTypes } from 'react';

class InputCell extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="colleft">
        <form>
          <input className="box" />
          <input className="box" />
          <input className="box" />
          <input className="box" />
          <input className="box" />
          <input className="box" />
          <input className="box" />
          <input className="box" />
          <input className="box" />
        </form>
     </div>
    );
  }
}

export default InputCell;
