import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Layout from "./components/Layout"

const App = props => {
  return (
    <BrowserRouter>
      <Route path="/" component={Layout} />
    </BrowserRouter>
  )
}

export default App
