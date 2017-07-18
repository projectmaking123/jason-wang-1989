import React, { Component } from 'react';

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }

  componentDidUpdate() {
    if (this.props.timerState) {
      this.startTimer()
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({count: (this.state.count + 1)})
  }

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  stopTimer (e) {
    clearInterval(this.timer)
    this.props.stopTimer()
    this.props.handleSudokuApi(e)
  }

  render () {
    return (
      <div className='timer'>
        <h1>{this.state.count}</h1>
        <button onClick={this.stopTimer}>
          Solve
        </button>
      </div>
    )
  }
}

export default Timer;
