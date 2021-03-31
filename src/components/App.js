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
      <Route path="/">
        <Layout fetchData={data} />
      </Route>
    </BrowserRouter>
  )
}

export default App


