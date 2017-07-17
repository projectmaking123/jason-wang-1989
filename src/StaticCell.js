import React, { Component } from 'react';


class StaticCell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.ele,
      board: ''
    }
  }

  componentDidUpdate() {
    if (this.props.board !== this.state.board) {
      return this.setState({
        value: this.props.ele,
        board: this.props.board
      })
    }
  }

  render() {
    return (
      <div>
          <div
            className="box"
            style={{backgroundColor: this.props.color}}>
            {this.props.ele}
            </div>
     </div>
    );
  }
}

export default StaticCell;
