import React from 'react';
import { Link} from 'react-router-dom'
import {ModalTypes} from '../modal/modalType';
import './navbar.css'

export const NavBar = ({match, showModal}) => {
  
    return (
      <div className="nav-bar">
        <div className="nav-bar-logo">
        </div>
        <div className="nav-bar-item-container">
            <div className="menu-option"><Link to="/dashboard">Dashboard</Link></div>
            <div className="menu-option"><Link to="/closet">Your closet</Link></div>
            { match.params[0] === "closet" ||  match.params[0] === "outfits" ? <div className="sub-menu" onClick={()=>showModal(ModalTypes.NEW_ITEM_MODAL)}> &nbsp; - &nbsp; Add Item</div> : null}
            { match.params[0] === "closet" ||  match.params[0] === "outfits" ? <div className="sub-menu" ><Link to="/outfits/new"> &nbsp; - &nbsp; Add Outfit</Link></div> : null}
        </div>

      </div>
    )
  
}

