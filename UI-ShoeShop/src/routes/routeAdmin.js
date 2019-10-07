import React from 'react'
import AdminHomePage from '../pages/adminPage/adminHomePage'


const routes = [
    
    {
        path:'/admin/home',
        axect: true,
        main : ()=> <AdminHomePage></AdminHomePage>,
    }
   
]

export default routes;