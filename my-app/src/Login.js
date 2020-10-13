import withRoot from './withRoot';
import React from "react";
import "./Login.css";
import { BrowserRouter as Router, Link as RouterLink, Switch, Route } from "react-router-dom";
import { Link } from "@material-ui/core";
import Register from "./Register";
import AppAppBar from "./views/AppAppBar";
function Login() 
{
  return(
    <div className="login">

      <Link to="./">
        <img
        className="login_logo"
        src=""
        alt=""
        />
      </Link>
     
      <div className="login_container">
      <AppAppBar/>
      <h1>Sign in</h1>
      <form>
      <h5>Email-id</h5>
      <input type="email"/>
      <h5>Password</h5>
      <input type="password"/>
      <button a href="./Register"
      type="submit" className="login_SignInButton">
        Sign In 
        </button>
      </form>
      <p>
        By Signing-in you agree to Get-Fit's conditions of use.
      </p>
      <button className="login_registerButton">
        Create your Get-fit Account
      </button>

      </div>
      </div> 
    
    
  );
}

export default withRoot(Login);