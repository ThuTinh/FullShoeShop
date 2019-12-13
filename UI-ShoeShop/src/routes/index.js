import React from 'react';
import 'antd/dist/antd.css';
import AdminRoute from './routeAdmin';
import CustomerRoute from './routeCustomer';
import loginPage from '../pages/loginPage'
import SignPage from '../pages/SignPage'

import { Route, Switch } from 'react-router-dom';

import 'react-id-swiper/lib/styles/css/swiper.css';
import NotFoundPage from '../pages/notFound';




function App() {
  return (
    <Switch>
      <Route path="/admin" component={AdminRoute} />
      <Route path="/login" component={loginPage} />
      <Route path="/sign" component={SignPage} />
      <Route path="/" component={CustomerRoute} />
      <Route path="**" component={CustomerRoute} />
      <Route path ="" component={NotFoundPage}/>
    </Switch>


  );
}



export default App;
