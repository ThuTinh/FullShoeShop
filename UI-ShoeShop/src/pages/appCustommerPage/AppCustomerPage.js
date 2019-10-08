import React, { useState } from 'react';
import Navbars from '../../components/customer/navbars';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../../routes/routeCustomer';
import Footer from '../../components/Footer';
import './style.css'


function AppCustomerPage() {
    return (
        <>
        <div  className="container">
            <Navbars></Navbars>
            <div >
                <Router >
                    {showPage(routes)}
                </Router>
               
                
            </div>
            
   </div>
   {/* <Footer></Footer> */}
   </>
    )


}

const showPage = (routes) => {
    var result = null;
    if (routes.length > 0) {
        result = routes.map((item, index) => {
            return <Route key={index} path={item.path} exact={item.exact} component={item.main} ></Route>
        });
    }
    return <Switch>{result}</Switch>;

}

export default AppCustomerPage;
