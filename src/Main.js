import React, { Component, PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe'
import Projects from './Projects'
import Home from './Home'

class MainApp extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
       <Switch>
         <Route path='/aboutme' component={AboutMe}/>
         <Route path='/projects' component={Projects}/>
         <Route path='/' component={Home}/>
       </Switch>
     </div>
    );
  }
}

export default MainApp;
