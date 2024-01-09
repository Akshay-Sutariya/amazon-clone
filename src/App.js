import React,{useEffect} from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home1";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

    const [{},dispatch] = useStateValue();
  //will only run once when app component loads...
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      // console.log("user is :",authUser);


      if(authUser){
        //the user is logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
        
      }
    })
  },[])

  return (
      <Router>
        <div className="app">
        <Switch>
        <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Checkout">
          <Header />
             <Checkout />
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
        </div>  
      </Router>
  );
}

export default App;
