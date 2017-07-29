import React, { Component } from 'react';
import InputCell from './InputCell';
import Timer from './Timer';
import { database } from './firebase'
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
        timerOn: false,
        user: null,
        test: null
      };
      this.handleParentChange = this.handleParentChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSudokuApi = this.handleSudokuApi.bind(this);
      this.handlePuzzleApi = this.handlePuzzleApi.bind(this);
      this.handleValidation = this.handleValidation.bind(this);
      this.handlePuzzle = this.handlePuzzle.bind(this);
      this.handleStaticIndex = this.handleStaticIndex.bind(this);
      this.stopTimer = this.stopTimer.bind(this)
      this.databaseUpdate = this.databaseUpdate.bind(this)
      this.databaseRetrieve = this.databaseRetrieve.bind(this)

  }

  componentDidMount() {
      if (this.props.user) {
        this.setState({user: this.props.user})
      }
      axios.get('https://sudoku-api.herokuapp.com/api/v1/sudoku')
      .then(response => {
        this.setState({ value: response.data.data })
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  databaseRetrieve() {
    this.userRef = database.ref(`/${this.props.user.uid}`)
    this.userRef.on('value', (snapshot) => {
      this.setState({
        puzzle: snapshot.val()[0].split(""),
        staticIndex: snapshot.val()[1]
      })
    })
  }

  databaseUpdate() {
    this.userRef = database.ref(`/${this.props.user.uid}`)
    this.userRef.set([this.state.puzzle.join(""), this.state.staticIndex])
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
         this.setState({
           puzzle: response.data.data,
           value: response.data.data.join("")
         })
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

      handlePuzzle(name) {
        this.handlePuzzleApi(name);
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
          <div>
            <Timer
              timerState={this.state.timerOn}
              handleSudokuApi={this.handleSudokuApi}
              stopTimer={this.stopTimer}
              user={this.props.user}
              databaseUpdate={this.databaseUpdate}
              databaseRetrieve={this.databaseRetrieve}
              handlePuzzle={this.handlePuzzle}
              />
          </div>

            <div className="board-container">
              {
                this.state.puzzle && this.state.puzzle.map((ele, i) => {
                  if(!this.state.staticIndex.includes(i)) {
                    return (
                      <InputCell
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
                    return (
                      <InputCell
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
