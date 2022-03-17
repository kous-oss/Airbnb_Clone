import React from 'react';
import './CSS/Header.css';
import {Link} from 'react-router-dom';

import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header(props) {
    return (
      <header>
        <Link to='/'>
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
        </Link>
        
        <div className="search-container">
          <input type="search" className="search-data" />
          <SearchIcon style={{paddingLeft:'0.5rem'}}/>
           </div>

        <div className="login-credentials">
          <p>Become a Host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>
      </header>
    );
}

export default Header;