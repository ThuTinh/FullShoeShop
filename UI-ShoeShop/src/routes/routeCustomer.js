import React from 'react'
import CustomHomePage from '../pages/customerPage'
import { Route, Switch } from 'react-router-dom';
import ProductDetailPage from '../pages/customerPage/productDetailPage';
import Navbars from '../components/customer/navbars';
import Footer from '../components/Footer';
import CartPage from '../pages/customerPage/cartPage';
import InfoPurchasePage from '../pages/customerPage/inforPurchasePage'
import ProfilePage from '../pages/customerPage/profilePage';


function CustomerRoute() {
  return (
    <div >
      <Navbars></Navbars>
      <Switch>
        <Route path="/product/cart" component={CartPage} />
        <Route path = "/product/purchase" component = {InfoPurchasePage}/>
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path = "/info" component = {ProfilePage} />
        <Route path="/" component={CustomHomePage} exact={true} />
        <Route path="**" component={CustomHomePage} exact={true} />
      </Switch>
      <div className="mt-2">
        <Footer></Footer>
      </div>
    </div>


  );
}



export default CustomerRoute;