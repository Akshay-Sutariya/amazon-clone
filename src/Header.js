import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {
    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () =>{
      if(user){
        auth.signOut();
      }else{

      }
    }
  return (
    <div className="header">
      <Link to="/">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="header-logo" 
      />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchicon" />
      </div>

      <div className="header-nav">
      <Link to={!user && '/login'}>
        <div className="header-option" onClick={handleAuthentication} >
          <span className="option-one">Hello {user ? user.email : "Guest"}</span>
          <span className="option-two">{user ? 'Sign Out' : 'Sign In'} </span>
        </div>
      </Link>
        <div className="header-option">
          <span className="option-one">Returns</span>
          <span className="option-two">& Orders</span>
        </div>
        <div className="header-option">
          <span className="option-one">Your </span>
          <span className="option-two">Prime</span>
        </div>
        <Link to="/Checkout">
          <div className="header-optionBasket">
          <ShoppingBasketIcon  />
          <span className="option-two header-optionCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
