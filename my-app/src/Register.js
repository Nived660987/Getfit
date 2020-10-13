import React from "react";
import "./Login.css";
import { Link } from "@material-ui/core";
import { register } from "./serviceWorker";
import { BrowserRouter as Router, Link as RouterLink, Switch, Route } from "react-router-dom";

function Login() 
{
  return(
    <div className="login">
      <Link to="./">
        <img
        className="login_logo"
        src="https://pngtree.com/freepng/gym-logo_5149987.html"
        alt=""
        />
      </Link>
      <div className="login_container">
      <h1>REGISTER</h1>
      <form>
      <h5>Email-id</h5>
      <input type="email"/>
      <h5>Password</h5>
      <input type="password"/>
      <button  type="submit" className="login_SignInButton">
        Sign In 
        </button>
      </form>
      <p>
        By Signing-in you agree to Get-Fit's conditions of use.Please see our Privacy Notice,our cookies Notice and our Interest-Based Ads Notice.
      </p>
      <button onclick={register} className="login_registerButton">Create your Get-fit Account</button>
      </div>
    
    
    </div>
  );
}

export default Login;