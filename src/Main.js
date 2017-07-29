import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './AboutMe'
import Sudoku from './Sudoku'

class MainApp extends Component{
  constructor(props) {
  super(props);
  this.state = {
      user: null
    }
  }


  componentDidUpdate() {
    if(this.props.user && !this.state.user) {
      this.setState({user: this.props.user})
    }
  }


  render() {
    const FourOhFour = () => <h1>404</h1>;
    const SudokuGame = (props) => {
      return (
        <Sudoku
          user={this.state.user}
          />
      );
    }
    return (
      <div>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route path='/sudoku' render={SudokuGame}/>
         <Route default component={FourOhFour} />
       </Switch>
     </div>
    );
  }
}

export default MainApp;

// <Route path='/aboutme' component={AboutMe}/>
