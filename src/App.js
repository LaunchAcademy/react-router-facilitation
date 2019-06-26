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
        <Route path="/bars" component={Layout} />
        <Route path="/coffees" component={CoffeeLayout} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
