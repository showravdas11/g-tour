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

function App() {
  return (
    <div>
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
          <Route path="/seeall">
            <SeeAllServices></SeeAllServices>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
