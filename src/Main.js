import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe'
import Projects from './Projects'
import Home from './Home'

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
    const MyProjectPage = (props) => {
      return (
        <Projects
          user={this.state.user}
          />
      );
    }
    return (
      <div>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route path='/aboutme' component={AboutMe}/>
         <Route path='/projects' render={MyProjectPage}/>
         <Route default component={FourOhFour} />
       </Switch>
     </div>
    );
  }
}

export default MainApp;
