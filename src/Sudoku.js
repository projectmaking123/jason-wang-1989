import React, { Component, PropTypes } from 'react';
import Cell from './Cell.js';
import PlaySudoku from './PlaySudoku'
const axios = require('axios');

class Sudoku extends Component {
  constructor(props) {
         super(props);

         this.state = {
           puzzle: [],
           value: ''
         };

         this.handleChange = this.handleChange.bind(this);
         this.solvePuzzle = this.solvePuzzle.bind(this);
     }

     componentDidMount() {
         axios.get('https://sudoku-api.herokuapp.com/api/v1/sudoku/')
         .then(response => {
            this.setState({ value: response.data.data })
          })
          .catch(function (error) {
            console.log(error);
          });
     }

     solvePuzzle(e) {
       e.preventDefault();
       axios.get("https://sudoku-api.herokuapp.com/api/v1/sudoku/" + `${this.state.value}`)
       .then(response => {
         this.setState({ puzzle: response.data.data})
        })
        .catch(function (error) {
          console.log('error', error);
        });
     }

     handleChange(event) {
        this.setState({value: event.target.value});
      }

     render() {
      return(
        <div>
            <form onSubmit={this.solvePuzzle}>
                <h1 className="titles"> Enter a puzzle string or type generate to generate a new puzzle:</h1>
                <h3>Here is an example of a string </h3>
                  <h3>1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--</h3>
              <div className="inputbox">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
              </div>
            </form>
            <div className="colleft">
                  {
                    this.state.puzzle.map( arr =>
                      <Cell arr={arr}/>
                    )
                  }
            </div>
            <div>
              <PlaySudoku />
            </div>
      </div>
    );
  }
}

export default Sudoku;
// <ReactInterval timeout={1000} enabled={true} callback={
// {
//   this.state.puzzle.map( puzzle =>
//    <div className="box">
//      { puzzle }
//    </div>
//   )
// }

// <div id="colleft" >
//   <div className="box">{this.state.puzzle[0]}</div>
//   <div className="box">{this.state.puzzle[1]}</div>
//   <div className="box">{this.state.puzzle[2]}</div>
//   <div className="box">{this.state.puzzle[3]}</div>
//   <div className="box">{this.state.puzzle[4]}</div>
//   <div className="box">{this.state.puzzle[5]}</div>
//   <div className="box">{this.state.puzzle[6]}</div>
//   <div className="box">{this.state.puzzle[7]}</div>
//   <div className="box newline">{this.state.puzzle[8]}</div>
//
//   <div className="box">{this.state.puzzle[9]}</div>
//   <div className="box">{this.state.puzzle[10]}</div>
//   <div className="box">{this.state.puzzle[11]}</div>
//   <div className="box">{this.state.puzzle[12]}</div>
//   <div className="box">{this.state.puzzle[13]}</div>
//   <div className="box">{this.state.puzzle[14]}</div>
//   <div className="box">{this.state.puzzle[15]}</div>
//   <div className="box">{this.state.puzzle[16]}</div>
//   <div className="box newline">{this.state.puzzle[17]}</div>
//
//   <div className="box">{this.state.puzzle[18]}</div>
//   <div className="box">{this.state.puzzle[19]}</div>
//   <div className="box">{this.state.puzzle[20]}</div>
//   <div className="box">{this.state.puzzle[21]}</div>
//   <div className="box">{this.state.puzzle[22]}</div>
//   <div className="box">{this.state.puzzle[23]}</div>
//   <div className="box">{this.state.puzzle[24]}</div>
//   <div className="box">{this.state.puzzle[25]}</div>
//   <div className="box newline">{this.state.puzzle[26]}</div>
//
//   <div className="box">{this.state.puzzle[27]}</div>
//   <div className="box">{this.state.puzzle[28]}</div>
//   <div className="box">{this.state.puzzle[29]}</div>
//   <div className="box">{this.state.puzzle[30]}</div>
//   <div className="box">{this.state.puzzle[31]}</div>
//   <div className="box">{this.state.puzzle[32]}</div>
//   <div className="box">{this.state.puzzle[33]}</div>
//   <div className="box">{this.state.puzzle[34]}</div>
//   <div className="box newline">{this.state.puzzle[35]}</div>
//
//   <div className="box">{this.state.puzzle[36]}</div>
//   <div className="box">{this.state.puzzle[37]}</div>
//   <div className="box">{this.state.puzzle[38]}</div>
//   <div className="box">{this.state.puzzle[39]}</div>
//   <div className="box">{this.state.puzzle[40]}</div>
//   <div className="box">{this.state.puzzle[41]}</div>
//   <div className="box">{this.state.puzzle[42]}</div>
//   <div className="box">{this.state.puzzle[43]}</div>
//   <div className="box newline">{this.state.puzzle[44]}</div>
//
//   <div className="box">{this.state.puzzle[45]}</div>
//   <div className="box">{this.state.puzzle[46]}</div>
//   <div className="box">{this.state.puzzle[47]}</div>
//   <div className="box">{this.state.puzzle[48]}</div>
//   <div className="box">{this.state.puzzle[49]}</div>
//   <div className="box">{this.state.puzzle[50]}</div>
//   <div className="box">{this.state.puzzle[51]}</div>
//   <div className="box">{this.state.puzzle[52]}</div>
//   <div className="box newline">{this.state.puzzle[53]}</div>
//
//   <div className="box">{this.state.puzzle[54]}</div>
//   <div className="box">{this.state.puzzle[55]}</div>
//   <div className="box">{this.state.puzzle[56]}</div>
//   <div className="box">{this.state.puzzle[57]}</div>
//   <div className="box">{this.state.puzzle[58]}</div>
//   <div className="box">{this.state.puzzle[59]}</div>
//   <div className="box">{this.state.puzzle[60]}</div>
//   <div className="box">{this.state.puzzle[61]}</div>
//   <div className="box newline">{this.state.puzzle[62]}</div>
//
//   <div className="box">{this.state.puzzle[63]}</div>
//   <div className="box">{this.state.puzzle[64]}</div>
//   <div className="box">{this.state.puzzle[65]}</div>
//   <div className="box">{this.state.puzzle[66]}</div>
//   <div className="box">{this.state.puzzle[67]}</div>
//   <div className="box">{this.state.puzzle[68]}</div>
//   <div className="box">{this.state.puzzle[69]}</div>
//   <div className="box">{this.state.puzzle[70]}</div>
//   <div className="box newline">{this.state.puzzle[71]}</div>
//
//   <div className="box">{this.state.puzzle[72]}</div>
//   <div className="box">{this.state.puzzle[73]}</div>
//   <div className="box">{this.state.puzzle[74]}</div>
//   <div className="box">{this.state.puzzle[75]}</div>
//   <div className="box">{this.state.puzzle[76]}</div>
//   <div className="box">{this.state.puzzle[77]}</div>
//   <div className="box">{this.state.puzzle[78]}</div>
//   <div className="box">{this.state.puzzle[79]}</div>
//   <div className="box newline">{this.state.puzzle[80]}</div>
