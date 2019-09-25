import React from 'react';
import { Switch, Route, Link } from "react-router-dom"

const CoffeeLayout = (props) => {
  return(
    <div className="layout">
      <div className="top-bar-coffee grid-x">
        <div className="top-bar-left">
          <Link className="site-title" to="/bars">Coffee of Boston</Link>
        </div>
      </div>

      <div className="main-body">
        <Switch>
          <Route exact path="/coffees" component={BarsIndexContainer} />
          <Route exact path="/coffees/:id" component={BarShowContainer} />
        </Switch>
      </div>

      <div className="top-bar-coffee">
        FOOTER
      </div>
    </div>
  )
}

export default CoffeeLayout;


// <Route exact path="/" component={BarsIndexContainer} />
// <Route exact path="/bars" component={BarsIndexContainer} />
// <Route exact path="/bars/:id" component={BarShowContainer} />
