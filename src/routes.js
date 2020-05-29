import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'

const routes = props => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />

        {/* Redirect to Home When a Non Existing Route is Tried */}
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default routes
