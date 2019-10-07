import React from 'react'
import LoginPage from '../pages/loginPage/loginPage'
import AppAdminPage from '../pages/appAdminPage/appAdminPage'
import AppCustomerPage from '../pages/appCustommerPage/AppCustomerPage'

const routes = [
    
    {
        path:'/admin',
        axect: true,
        main : ()=> <AppAdminPage></AppAdminPage>,
    },
    {
        path:'/customer',
        axect: true,
        main: ({match, history})=> <AppCustomerPage match = {match} history = {history}></AppCustomerPage>
    },
    {
        path: '/login',
        axect: false,
        main: ({match, history})=> <LoginPage match = {match} history = {history}></LoginPage>
    }

]

export default routes;