import React from 'react';
import {Link} from 'react-router-dom'

export const NavBar = ({match, logout}) => {
  const handleClick = () => {
    let clicker = document.getElementById("modal-text");
    clicker.click();
  }

  
    return (
      <div className="nav-bar">
        <div className="nav-bar-logo">
  
        </div>
        <div className="nav-bar-item-container">
            <div><Link to="/dashboard">Dashboard</Link></div>
            <div className="your-closet"><Link to="/closet">Your closet</Link></div>
            { match.params[0] === "closet" ||  match.params[0] === "outfits" ? <div onClick={handleClick}> &nbsp; • &nbsp; Add Item</div> : null}
            { match.params[0] === "closet" ||  match.params[0] === "outfits" ? <div><Link to="/outfits/new"> &nbsp; • &nbsp; Add Outfit</Link></div> : null}
        </div>
        <div className="sign-out-container">
          <div onClick={logout}>Sign Out</div>
        </div>
      </div>
    )
  
}

