import React, { Component } from 'react';


class InputCell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.ele,
      board: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.limitRange = this.limitRange.bind(this)
  }

  componentDidUpdate() {
    if (this.props.board !== this.state.board) {
      return this.setState({
        value: this.props.ele,
        board: this.props.board
      })
    }
  }

  limitRange(e) {
    const limit = /[1-9:-]/;
    if (!limit.test(e.key)) {
      e.preventDefault();
    }
  }

  handleChange(event) {
    const board = this.state.board
    board[parseInt(this.props.index, 10)] = event.target.value
    this.setState({
      value: event.target.value,
      board
    });
    this.props.handleParentChange(this.state.board.join(""));
    this.props.handleStaticIndex();
   }

  render() {
    return (
      <div>
          <input
            disabled={this.props.disabled}
            className="box"
            maxLength={1}
            style={{backgroundColor: this.props.color}}
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.limitRange}
            />
     </div>
    );
  }
}

export default InputCell;
