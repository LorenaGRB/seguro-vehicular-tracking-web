import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CarData from './components/CarData/CarData'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import ArmaPlan from './components/ArmaPlan/ArmaPlan'
import Gracias from './components/Gracias/Gracias'
import Login from './views/Login'

function App() {
  return (
    <Fragment>
        <Header />
        <Switch>
            <Route path='/seguro-vehicular-tracking/Gracias' exact>  <Gracias />   </Route>
            <Route path='/seguro-vehicular-tracking/ArmaPlan' exact> <ArmaPlan />  </Route>
            <Route path='/seguro-vehicular-tracking/CarData' exact>  <CarData />   </Route>
            <Route path='/seguro-vehicular-tracking/Home' exact>     <Home />      </Route>
            <Route path='/seguro-vehicular-tracking/Login' exact>     <Login />      </Route>

            <Route path='/seguro-vehicular-tracking' exact> <Redirect to = '/seguro-vehicular-tracking/Login' /> </Route> 
            <Route path='/'exact>                          <Redirect to = '/seguro-vehicular-tracking/Login' /> </Route> 
        </Switch>
    </Fragment>
  )
}

export default App;
