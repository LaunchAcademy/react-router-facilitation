import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout'
import BarContainer from './containers/BarContainer'
import BarsIndexContainer from './containers/BarsIndexContainer'

const App = () => {

  return(
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={BarsIndexContainer} />
        <Route path="/bars" component={BarsIndexContainer} />
        <Route path="/bars/:id" component={BarContainer} />
      </Route>
    </Router>
  )
}

export default App;

// <Router history={browserHistory}>
//   <Route path="/bars" component={BarsIndexContainer} />
//   <Route path="/bars/:id" component={BarContainer} />
// </Router>

 
