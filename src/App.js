import React from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss'
import {Switch} from "react-router-dom"
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';

const App = () => {
  return (
    <Switch>
      <PublicRoute path="/signin" exact>
        <SignIn/>
      </PublicRoute>
      <PrivateRoute path="/" exact>
        <Home/>
      </PrivateRoute>
    </Switch>
  )
}

export default App
