import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CarData from './views/CarData'
import Home from './views/Home'
import Header from './components/Header'
import ArmaPlan from './views/ArmaPlan'
import Gracias from './views/Gracias'
import Login from './views/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment>
        <ToastContainer />
        <Header />
        <Switch>
            <Route path='/seguro-vehicular-tracking/Gracias' exact>  <Gracias />   </Route>
            <Route path='/seguro-vehicular-tracking/ArmaPlan' exact> <ArmaPlan />  </Route>
            <Route path='/seguro-vehicular-tracking/CarData' exact>  <CarData />   </Route>
            <Route path='/seguro-vehicular-tracking/Login' exact>     <Login />      </Route>

            <Route path='/seguro-vehicular-tracking' exact> <Redirect to = '/seguro-vehicular-tracking/Login' /> </Route> 
            <Route path='/'exact>                          <Redirect to = '/seguro-vehicular-tracking/Login' /> </Route> 
        </Switch>
    </Fragment>
  )
}

export default App;
