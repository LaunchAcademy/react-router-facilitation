import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import BarShowContainer from './BarShowContainer'
import BarsIndexContainer from './BarsIndexContainer'
// import Layout from "./Layout"
// import CoffeeLayout from "./CoffeeLayout"

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
