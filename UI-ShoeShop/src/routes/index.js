import React from 'react';
import 'antd/dist/antd.css';
import AdminRoute from './routeAdmin';
import CustomerRoute from './routeCustomer';
import Login from '../pages/loginPage';
import { Route, Switch } from 'react-router-dom';

// css
import 'react-id-swiper/lib/styles/css/swiper.css';




function App() {
  return (
    <Switch>
      <Route path="/admin" component={AdminRoute} />
      <Route path="/login" component={Login} />
      <Route path="/" component={CustomerRoute} />
      <Route path="**" component={CustomerRoute} />
    </Switch>


  );
}



export default App;
