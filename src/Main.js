import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sudoku from './Sudoku';
import Forecast from './Forecast';

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
         <Route exact path='/' render={SudokuGame}/>
         <Route exact path='/forecast' component={Forecast}/>
         <Route default component={FourOhFour} />
       </Switch>
     </div>
    );
  }
}

export default MainApp;
