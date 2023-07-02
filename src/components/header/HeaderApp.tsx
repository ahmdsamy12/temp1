import React from 'react'
import "./headerApp.scss";
import { Link } from 'react-router-dom';

interface divs {
  div: HTMLElement
}

const HeaderApp = () => {

 

  return (
    <div className='header'>
        <div className='logo'>
            <Link to="/">Cryptop</Link>
        </div>
        <div className='navs'>
            <ul className='navs-links'>
                <li className='active'><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/how">how</Link></li>
                <li><Link to="/signIn">sign in</Link></li>
                <li><Link to="/signUp">sign up</Link></li>
                <li><Link to="/search">search</Link></li>
            </ul>
        </div>
        <div className='header-icon' onClick={() => {
          let navsHeader: any = document.querySelector(".navs");
           navsHeader.style.cssText = "opacity: 1; top:20px; transition: .5s;"
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
  )
}

export default HeaderApp;