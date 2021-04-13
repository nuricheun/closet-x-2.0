import React from "react";
import './banner.css';

const Banner = ({logout}) => {

    return (
      <div className="user-banner">
        <div>CLOSET-X</div>
        <div className="banner-sign-out" onClick={logout}>sign out</div>
      </div>
    )
  
}

export default Banner;