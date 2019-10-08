import React from 'react'
import LoginPage from '../pages/loginPage/loginPage'
import RouteAdmin from './routeAdmin'
import RouteCustomer from './routeCustomer'
const routes = [
    {
        path: '/login',
        main: ({match, history})=> <LoginPage match = {match} history = {history}></LoginPage>
    }
    
    {
        path:'/admin',
        main : ()=> <RouteAdmin></RouteAdmin>,
    },
    {
        path:'/',
        main: ({match, history})=> <RouteCustomer match = {match} history = {history}></RouteCustomer>
    },
   

]

export default routes;