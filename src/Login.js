import React, { useState } from "react";
import "./Login.css";
import { Link,useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const register = e =>{ 
        e.preventDefault();
       
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{  
          if(auth){   
            history.push('/')
          }
        })
      .catch(error => alert(error.message))
        
    }
    const signIn = e =>{ 
        e.preventDefault();
         //it create new user 
        auth.signInWithEmailAndPassword(email,password)
       
        .then(auth=>{
           
          history.push('/')
       
      })
    .catch(error => alert(error.message))

    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

           <button  type='submit'className="login-signInButton" onClick={signIn}>Sign in</button>
        </form>

        <p>
          By signing-in you agree to Amazon's Condition of use & Sale . Please
          see our Privacy Notice , our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button className="login-registerButton" onClick={register}>Create New Account</button>
      </div>
    </div>
  );
}

export default Login;
