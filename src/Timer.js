import React, { Component } from 'react';
import NeedAuth from './NeedAuth';
import { DropdownButton, MenuItem, ButtonGroup } from 'react-bootstrap';

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      user: null,
      disabled: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.handleParentDatabaseUpdate = this.handleParentDatabaseUpdate.bind(this)
    this.handleParentDatabaseRetrieve = this.handleParentDatabaseRetrieve.bind(this)
    this.handleParentPuzzle = this.handleParentPuzzle.bind(this)
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
    this.props.handleFinishedPuzzle()
    this.setState({disabled: true})
  }

  handleParentDatabaseUpdate() {
    clearInterval(this.timer)
    this.props.stopTimer()
    this.props.databaseUpdate()
    this.setState({ count: 0 })
  }

  handleParentDatabaseRetrieve() {
    this.setState({ count: 0 })
    clearInterval(this.timer)
    this.startTimer()
    this.props.databaseRetrieve()
  }

  handleParentPuzzle(e) {
    this.setState({
      count: 0,
      disabled: false
     })
    this.props.handlePuzzle(e.target.name)
  }

  render () {
    return (
    <div>
      <h1 className="titles">INSTRUCTIONS</h1>
      <div className="instructions">
        <ul>
          <li>Select the difficulty of the puzzle you wish to play</li>
          <li>Replace the dashes with your guesses, green colored boxes can not be changed</li>
          <li>If you make an invalid guess the board will turn red</li>
          <li>The board remaining white does not mean the input is absolute, meaning there can be multiple valid inputs</li>
          <li>Press the solve button to watch the board be solved</li>
        </ul>
      </div>
      <div id="droplist">
        <ButtonGroup justified>
          <DropdownButton
            bsSize="large"
            className="btn btn-primary btn-lg dropdown-toggle"
            title="SELECT THE LEVEL OF THE PUZZLE"
            id="dropdown-size-large">
            <MenuItem
              className="btn btn-info"
              name={"create easy puzzle"}
              onClick={this.handleParentPuzzle}
              >Easy</MenuItem>
            <MenuItem
              className="btn btn-info"
              name={"create hard puzzle"}
              onClick={this.handleParentPuzzle}
              >Hard</MenuItem>
            <MenuItem
              className="btn btn-info"
              name={"create genius puzzle"}
              onClick={this.handleParentPuzzle}
              >Genius</MenuItem>
        </DropdownButton>
      </ButtonGroup>
    </div>
        <div>
          {
            !this.props.user &&
            <NeedAuth user={this.state.user}/>
          }
        </div>

        <div>
          {
            this.props.user &&
            <div>
              <div style={{textAlign: 'center'}}>
                <button className='btn-primary' onClick={this.handleParentDatabaseUpdate}>
                  Save for Later
                </button>
              </div>

              <div style={{textAlign: 'center'}}>
                <button className='btn-primary' onClick={this.handleParentDatabaseRetrieve}>
                  Retrieve the last puzzle you worked on
                </button>
              </div>
            </div>
          }
        </div>

      <div className='timer'>
        <h1>{this.state.count}</h1>
        <button disabled={this.state.disabled} onClick={this.stopTimer}>
          Solve
        </button>
      </div>

    </div>
    )
  }
}

export default Timer;
