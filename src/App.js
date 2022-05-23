import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CarData from './views/CarData'
import ArmaPlan from './views/ArmaPlan'
import Gracias from './views/Gracias'
import Login from './views/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment>
        <ToastContainer />
        <Switch>
            <Route path='/Gracias' exact>  <Gracias />   </Route>
            <Route path='/ArmaPlan' exact> <ArmaPlan />  </Route>
            <Route path='/CarData' exact>  <CarData />   </Route>
            <Route path='/Login' exact>     <Login />      </Route>

            <Route path='/'exact>  <Redirect to = '/Login' /> </Route> 
        </Switch>
    </Fragment>
  )
}

export default App;
