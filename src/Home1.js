import React from "react";
import "./Home.css";
import Product from "./Product";

function Home1() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="00001"
          title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback"
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          price={26.95}
          rating={5}
        />
        <Product 
        id="00002"
          title="Kenwood kMix Stand Mixer for Baking , Stylish Kitchen Mixer with K-beater , Dough Hook and Whisk, 5 Liter Glass Bowl"
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          price={239.0}
          rating={4}/>
      </div>
      <div className="home-row">
        <Product  
        id="00003"
        title="Samsung LC48RG90SS UXEN 49' Curved LED Gaming Mniter "
        price={199.99}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
        <Product 
        id="00004"
        title="Amazon Echo (3rd generation) | Smart speaker with Alexa , Charcoal Fabric"
        price={98.99}
        rating={5}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retnamobilex2$.jpg "/>
        <Product
        id="00005"
        title="New Apple iPad Pro (12.9-inch, Wi-Fi,128GB) - Silver (4th Generation)"
        price={588.99} 
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
      </div>
      <div className="home-row">
        <Product 
        id="00006"
        title=" Samsung LC49RG90SSUXEN 49' LED Gming Moniter - Super Ultra Wide Dual WQHD 5120 x 1440"
        price={1094.97}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"  />
      </div>
    </div>
  );
}

export default Home1;
