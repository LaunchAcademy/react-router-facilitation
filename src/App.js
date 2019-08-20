import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import BarShowContainer from './containers/BarShowContainer'
import BarsIndexContainer from './containers/BarsIndexContainer'
import Layout from "./components/Layout"
import CoffeeLayout from "./components/CoffeeLayout"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BarsIndexContainer} />
        <Route exact path="/bars" component={BarsIndexContainer} />
        <Route exact path="/bars/:id" component={BarShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

// <Route path="/bars" component={Layout} />
