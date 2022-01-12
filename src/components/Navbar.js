import React from "react";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Riot_Games_wordmark.svg"
            alt=""
          />
        </div>
        <div className="navbar__navigation">
          <a href="/">CHAMPIONS</a>
        </div>
        <div className="navbar__login">
          <button className="navbar__button" type="submit">CONNEXION</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
