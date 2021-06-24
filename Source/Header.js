import React,{Component} from 'react';
import './Header.css';

function Header(){
 return(
   <div className="links">
        <h1 className="brand"><b className="cp">Central Perk</b></h1>
        <ul className="ul1">
           <li className="li1"><a className="a1" href="/">Home</a></li>
           <li className="li1"><a className="a1" href="order">Order</a></li>
           <li className="li1"><a className="a1" href="cuisine">Cuisine</a></li>
           <li className="li1"><a className="a1" href="contact">Contact</a></li>
       </ul>
   </div>
 )
}
export default Header;