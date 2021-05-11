import React from "react";
import './banner.css';

const Banner = ({logout}) => {


    const handleSignout = async () => {
      await logout()
      window.location.href = "/";
    }

    return (
      <div className="user-banner">
        <div>CLOSET-X</div>
        <div className="banner-sign-out" onClick={handleSignout}>sign out</div>
      </div>
    )
}

export default Banner;