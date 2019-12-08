import React, { useState } from "react";
import CustomHomePage from "../pages/customerPage";
import { Route, Switch } from "react-router-dom";
import ProductDetailPage from "../pages/customerPage/productDetailPage";
import Navbars from "../components/customer/navbars";
import Footer from "../components/Footer";
import CartPage from "../pages/customerPage/cartPage";
import InfoPurchasePage from "../pages/customerPage/inforPurchasePage";
import ProfilePage from "../pages/customerPage/profilePage";
import IntroducePage from "../pages/introducePage";
import productDetail from "../components/customer/productDetail";

function CustomerRoute(props) {
  const [countCarts, setCountCarts] = useState(0);
  const addToCart = () => {
    setCountCarts(countCarts + 1);
  };
  return (
    <div>
      <Navbars countCarts={countCarts}></Navbars>
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/product/purchase" component={InfoPurchasePage} />
        <Route path="/product-detail/:id" component={ProductDetailPage} />
        <Route path="/my-acount" component={ProfilePage} />
        <Route path="/introduce" component={IntroducePage} />
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
