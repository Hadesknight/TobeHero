import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


export default function Routes(){
return(
  
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={SignIn} />
      <Route path="/register" component={SignUp}/>
    </Switch>
  </BrowserRouter>
  
  )
}