import React from 'react'
import CustomHomePage from '../pages/customerPage'
import {  Route, Switch } from 'react-router-dom';

function CustomerRoute() {
    return (
      <Switch>
      <Route path="/" component={CustomHomePage} />
      <Route path="**" component={CustomHomePage} />
  </Switch>
  
  
    );
  }
  
  
  
  export default CustomerRoute;