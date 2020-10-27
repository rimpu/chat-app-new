import React from 'react'
import {Redirect,Route} from "react-router-dom"
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';


const PublicRoute = ({children,...restProps}) => {

  const {profile,isLoading} = useProfile();
  if(isLoading && !profile){
    return <Container>
        <Loader center vertical size="md" content = "Loading" speed="slow" />
      </Container>
  }
  if(!isLoading && profile){
    return <Redirect to="/" />
  }

  return (
    <Route {...restProps}>
      {children}
    </Route>
  )
}

export default PublicRoute;
