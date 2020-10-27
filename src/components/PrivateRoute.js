import React from 'react'
import {Redirect,Route} from "react-router-dom"

const PrivateRoute = ({children,...restProps}) => {

  const isProfile = false;
  if(!isProfile){
    return <Redirect to="/signin" />
  }

  return (
    <Route {...restProps}>
      {children}
    </Route>
  )
}

export default PrivateRoute;
