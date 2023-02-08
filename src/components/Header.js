import { useState } from "react";

const TitleComponent = () => (
    <a href="/"><img 
    alt="logo"
    className="logo" 
    src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=360" />
    </a>
  );

  const HeaderComponent =() => {

    const [IsVisible,setIsvisible]=useState(false);
    return (
      <div className="header">
        <TitleComponent/>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
        { IsVisible === false? <button className="btn-login" onClick={() =>setIsvisible(true)}>Login</button> : <button onClick={() =>setIsvisible(false)} className="btn-login">Logout</button> }
      </div>
    );
  
  }

export default HeaderComponent;  