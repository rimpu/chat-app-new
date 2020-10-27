import React from 'react'
import {Redirect,Route} from "react-router-dom"

const PublicRoute = ({children,...restProps}) => {

  const isProfile = false;
  if(isProfile){
    return <Redirect to="/" />
  }

  return (
    <Route {...restProps}>
      {children}
    </Route>
  )
}

export default PublicRoute;
