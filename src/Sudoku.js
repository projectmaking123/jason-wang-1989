import React, { Component } from 'react';
import InputCell from './InputCell';
import StaticCell from './StaticCell'
import { DropdownButton, MenuItem, ButtonGroup } from 'react-bootstrap';
import {MediaQuery} from 'react-responsive'
const axios = require('axios');

class Sudoku extends Component {
  constructor(props) {
         super(props);

      this.state = {
        puzzle: ("---------------------------------------------------------------------------------").split(""),
        value: 'generate',
        changedPuzzle: '',
        color: "white",
        staticIndex: []
      };
      this.handleParentChange = this.handleParentChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSudokuApi = this.handleSudokuApi.bind(this);
      this.handlePuzzleApi = this.handlePuzzleApi.bind(this);
      this.handleValidation = this.handleValidation.bind(this);
      this.handlePuzzle = this.handlePuzzle.bind(this);
      this.handleStaticIndex = this.handleStaticIndex.bind(this);
  }

  componentDidMount() {
    axios.get('http://sudoku-api.herokuapp.com/api/v1/sudoku')
    .then(response => {
      this.setState({ value: response.data.data })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleStaticIndex(){
    this.setState({staticIndex: []})
    this.state.puzzle.forEach( (ele, i) => {
      if (/[1-9:]/.test(ele)){
        this.state.staticIndex.push(i)
      }
    })
  }

    handleSudokuApi(e) {
       e.preventDefault();
       axios.get("http://sudoku-api.herokuapp.com/api/v1/sudoku/" + `${this.state.value}`)
       .then(response => {
         this.setState({ puzzle: response.data.data})
        })
        .catch(function (error) {
          console.log('error', error);
        });
     }

     handlePuzzleApi(name) {
       axios.get("http://sudoku-api.herokuapp.com/api/v1/sudoku/" + name)
       .then(response => {
         this.setState({ puzzle: response.data.data})
         this.handleStaticIndex()
        })
        .catch(function (error) {
          console.log('error', error);
        });
     }

     handleValidation(changedPuzzle) {
       axios.get("http://sudoku-api.herokuapp.com/api/v1/sudoku/validate" + changedPuzzle)
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
        this.handlePuzzleApi(e.target.name)
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
              <li>begin replacing the dashes with your guesses</li>
              <li>If you make an incorrect guess the board will turn red</li>
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
            <div className="board-container">
              {
                this.state.puzzle.map( (ele, i) =>
                  <InputCell
                      key={i}
                      index={i}
                      ele={ele}
                      color={this.state.color}
                      board={this.state.puzzle}
                      handleParentChange={this.handleParentChange}
                      handleStaticIndex={this.handleStaticIndex}
                      />)
                    }
          </div>
          <h3>{this.state.puzzle}</h3>
            <div id="container">
              <div id="form">
              <form onSubmit={this.handleSudokuApi} className="entypo-search">
                <fieldset><input id="search" placeholder="Search" onChange={this.handleChange}/></fieldset>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default Sudoku;

// <h1 className="titles"> Enter a puzzle string or type generate to generate a new puzzle:</h1>
// <h3>Here is an example of a string </h3>
// <h3>1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--</h3>
//   <div className="inputbox">
//     <form onSubmit={this.handleSudokuApi}>
//       <input type="text" value={this.state.value} onChange={this.handleChange} />
//       <input type="submit" value="Submit" />
//     </form>
//   </div>
//
// {
//   this.state.puzzle.map( (ele, i) => {
//     if((ele === '-') || (ele === '') || this.state.color === '#FFBABA') {
//       return (<InputCell
//         key={i}
//         index={i}
//         ele={ele}
//         color={this.state.color}
//         board={this.state.puzzle}
//         handleParentChange={this.handleParentChange}
//         handleStaticIndex={this.handleStaticIndex}
//         />)
//     } else {
//       return (<StaticCell
//         key={i}
//         ele={ele}
//         color={this.state.color}
//         />)
//     }
// })
// }
