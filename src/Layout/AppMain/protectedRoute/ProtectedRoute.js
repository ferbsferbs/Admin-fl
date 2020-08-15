import React from 'react'
import { Route, Redirect } from 'react-router-dom'


export  const ProtectedRoute = ({component: Component,authed, ...rest}) =>{
   
    return (
       
       
        <Route {...rest} 
        render={(props) => authed === true
            ? (  <Component {...props} />)
            : <Redirect to='/auth/login' />}
        />
   
    )
}


