import React, { Component, PropTypes } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "hidden"
    }
  }

  componentWillMount() {
    setTimeout(function(){
      this.setState({display: "show"})}.bind(this), 2000)
  }

render() {
    return (
      <div className={`box ${this.state.display}`} >
      {
          this.props.arr
      }
      </div>
    );
  }
}

export default Cell;
