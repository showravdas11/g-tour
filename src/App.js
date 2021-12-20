import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import SeeAllServices from './components/SeeAllServices/SeeAllServices';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SeeSingleService from './components/SeeSingleService/SeeSingleService';
import { useState } from 'react';

function App() {

  const [isPreLoader, setIsPreLoader] = useState(true)
  setTimeout(() => {
    setIsPreLoader(false)
  }, 5000)

  return (
    <div>
      {
        isPreLoader ? <PreLoader /> : <HomePage />
      }
    </div>
  );
}

export default App;

const HomePage = () => {
  return (
    <AuthProvider>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/seeall">
            <SeeAllServices></SeeAllServices>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

const PreLoader = () => {
  return <h1> <div class="loader">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
    <div class="five"></div>
    <div class="six"></div>
    <div class="seven"></div>
    <div class="eight"></div>
  </div>
    <div class="open_grepper_editor" title="Edit & Save To Grepper"></div></h1>
}