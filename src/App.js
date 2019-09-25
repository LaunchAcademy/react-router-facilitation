import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import BarShowContainer from './containers/BarShowContainer'
import BarsIndexContainer from './containers/BarsIndexContainer'
import Layout from "./components/Layout"
// import CoffeeLayout from "./components/CoffeeLayout"

const App = props => {
  return (
    <BrowserRouter>
      <Route path="/" component={Layout}/>
    </BrowserRouter>
  )
}

export default App
// <Route path="/" component={Layout} />
// <Route path="/coffees" component={CoffeeLayout} />
