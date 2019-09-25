import React from 'react';
import { Switch, Route, Link } from "react-router-dom"

const CoffeeLayout = (props) => {
  return(

    <div className="layout">
      <div className="top-bar-coffee grid-x">
        <div className="top-bar-left">
          <Link className="site-title" to="/bars">CoffeeEEEE of Boston</Link>
        </div>
      </div>

      <div className="main-body">
        <Switch>
          <Route exact path="/coffees" component={CoffeesIndexContainer} />
          <Route exact path="/coffees/:id" component={CoffeeShowContainer} />
        </Switch>
      </div>

      <div className="top-bar-coffee">
        FOOTER COFFEEE
      </div>
    </div>
  )
}

export default CoffeeLayout;


// <Route exact path="/" component={CoffeesIndexContainer} />
// <Route exact path="/bars" component={CoffeesIndexContainer} />
// <Route exact path="/bars/:id" component={CoffeeShowContainer} />
