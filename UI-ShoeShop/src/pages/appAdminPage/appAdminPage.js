import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../../routes/routeCustomer';
import Navbar from '../../components/admin/navbar';

function AppAdminPage() {
    return (
        <Navbar></Navbar>
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
export default AppAdminPage;
