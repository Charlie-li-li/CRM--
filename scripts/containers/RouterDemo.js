import React from 'react'
import Agency from './AgencyContainer'
import AgencyDetai from './AgencyDetailContainer'
import ListContainer from './ListContainer'
import FormContainer from './FormContainer'
import Test from './Test'
import { Router, Route, hashHistory, IndexLink } from 'react-router'

const routes = (
  <Route >
    <IndexLink path="/" component={Agency} />
    <Route path="agencyDetail/:id" component={AgencyDetai} />
    <Route path="agency" component={Agency} />
    <Route path="form" component={FormContainer} />
    <Route path="list" component={ListContainer} />
    <Route path="test" component={Test} />
  </Route>
)

const RouterDemo = () => (
  <Router history={hashHistory} >
    {routes}
  </Router>
)

export default RouterDemo
