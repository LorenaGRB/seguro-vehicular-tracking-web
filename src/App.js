import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CarData from './components/CarData/CarData'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

function App() {
  return (
    <Fragment>
        <Header />
        <Switch>
            <Route path='/seguro-vehicular-tracking/CarData'exact>  <CarData /> </Route>
            <Route path='/seguro-vehicular-tracking/Home'exact>     <Home /> </Route>
            
            <Route path='/seguro-vehicular-tracking'exact> <Redirect to= '/seguro-vehicular-tracking/Home'/> </Route> 
            <Route path='/'exact>                          <Redirect to= '/seguro-vehicular-tracking/Home'/> </Route> 
            
        </Switch>
    </Fragment>
  )
}

export default App;
