import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import BarShowContainer from './BarShowContainer'
import BarsIndexContainer from './BarsIndexContainer'
import CoffeeShop from "./CoffeeShop"
import Layout from "./Layout"
import CoffeeLayout from "./CoffeeLayout"

const App = props => {
  return (
    <BrowserRouter>
      <Route path="/" component={Layout}/>
    </BrowserRouter>
  )
}

export default App


