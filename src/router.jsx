import React from 'react';
import { Router, Route, browserHistory} from 'react-router';

import App from './Components/App';
import Home from './Components/Home';
import Courses from './Components/Courses';
import About from './Components/About';
import Team from './Components/Team';
import prof from './Components/prof';

const routes = (
  <Router history={browserHistory}>
      <Route path='/' component={Home}/>
      <Route path='courses' component={Courses}/>
      <Route path='about' component={About}></Route>
      <Route path='team' component={Team}></Route>
      <Route path='prof' component={prof}></Route>
  </Router>
);

export default routes;
