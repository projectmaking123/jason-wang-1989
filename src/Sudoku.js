import React, { Component } from 'react';
import InputCell from './InputCell';
import Timer from './Timer';
import { DropdownButton, MenuItem, ButtonGroup } from 'react-bootstrap';
const axios = require('axios');

class Sudoku extends Component {
  constructor(props) {
         super(props);

      this.state = {
        puzzle: ("---------------------------------------------------------------------------------").split(""),
        value: 'generate',
        changedPuzzle: '',
        color: "white",
        staticIndex: [],
        timerOn: false
      };
      this.handleParentChange = this.handleParentChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSudokuApi = this.handleSudokuApi.bind(this);
      this.handlePuzzleApi = this.handlePuzzleApi.bind(this);
      this.handleValidation = this.handleValidation.bind(this);
      this.handlePuzzle = this.handlePuzzle.bind(this);
      this.handleStaticIndex = this.handleStaticIndex.bind(this);
      this.stopTimer = this.stopTimer.bind(this)
  }

  componentDidMount() {
    axios.get('https://sudoku-api.herokuapp.com/api/v1/sudoku')
    .then(response => {
      this.setState({ value: response.data.data })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  stopTimer() {
    this.setState({ timerOn: false })
  }

  handleStaticIndex(){
    if (this.state.staticIndex[0] !== undefined) {
      return this.state.staticIndex;
    } else {
      const collectStaticIndex = [];
      this.state.puzzle.forEach( (ele, i) => {
        if (/[1-9:]/.test(ele)){
          collectStaticIndex.push(i)
        }
      })
      this.setState({staticIndex: collectStaticIndex})
    }
  }

    handleSudokuApi(e) {
      e.preventDefault();
       this.setState({
         staticIndex: []
       })
       axios.get(`https://sudoku-api.herokuapp.com/api/v1/sudoku/${this.state.value}`)
       .then(response => {
         this.setState({ puzzle: response.data.data })
        })
        .catch(function (error) {
          console.log('error', error);
        });
     }

     handlePuzzleApi(name) {
       this.setState({staticIndex: []})
       axios.get(`https://sudoku-api.herokuapp.com/api/v1/sudoku/${name}`)
       .then(response => {
         this.setState({ puzzle: response.data.data})
         this.handleStaticIndex()
        })
        .catch(function (error) {
          console.log('error', error);
        });
     }

     handleValidation(changedPuzzle) {
       axios.get(`https://sudoku-api.herokuapp.com/api/v1/sudoku/validate${changedPuzzle}`)
       .then(response => {
         this.setState({ color: response.data.data})
        })
        .catch(function (error) {
          console.log('error', error);
        });
     }

     handleChange(event) {
      this.setState({
          value: event.target.value
        })
      }

      handlePuzzle(e) {
        this.handlePuzzleApi(e.target.name);
        this.setState({ timerOn: true })
      }

     handleParentChange(changedPuzzle) {
       this.setState({
          changedPuzzle
        })
        this.handleValidation(changedPuzzle);
      }

     render() {
      return(
        <div>
          <h1>INSTRUCTIONS</h1>
          <div className="instructions">
            <ul>
              <li>Select the difficulty of the puzzle you wish to play</li>
              <li>Replace the dashes with your guesses, green can not be changed</li>
              <li>If you make an invalid guess the board will turn red</li>
              <li>Paste the printed string below into input below it to solve it.</li>
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
                  onClick={this.handlePuzzle}
                  >Easy</MenuItem>
                <MenuItem
                  className="btn btn-info"
                  name={"create hard puzzle"}
                  onClick={this.handlePuzzle}
                  >Hard</MenuItem>
                <MenuItem
                  className="btn btn-info"
                  name={"create genius puzzle"}
                  onClick={this.handlePuzzle}
                  >Genius</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>

        <Timer
          timerState={this.state.timerOn}
          handleSudokuApi={this.handleSudokuApi}
          stopTimer={this.stopTimer}
          />

            <div className="board-container">
              {
                this.state.puzzle.map( (ele, i) => {
                  if(!this.state.staticIndex.includes(i)) {
                    return (<InputCell
                      key={i}
                      index={i}
                      ele={ele}
                      color={this.state.color}
                      disabled={''}
                      board={this.state.puzzle}
                      handleParentChange={this.handleParentChange}
                      handleStaticIndex={this.handleStaticIndex}
                      />)
                  } else {
                    return (<InputCell
                      key={i}
                      index={i}
                      ele={ele}
                      color={'#7FFF00'}
                      disabled={'disabled'}
                      board={this.state.puzzle}
                      handleParentChange={this.handleParentChange}
                      handleStaticIndex={this.handleStaticIndex}
                      />)
                  }
              })
            }
        </div>
      </div>
    );
  }
}

export default Sudoku;
