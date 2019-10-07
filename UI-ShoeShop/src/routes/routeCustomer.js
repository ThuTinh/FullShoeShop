import React from 'react'
import CustomHomePage from '../pages/customerPage/customHomePage'


const routes = [
    {
        path:'/customer/home',
        axect: true,
        main: ({match, history})=> <CustomHomePage match = {match} history = {history}></CustomHomePage>
    }
   

]

export default routes;