import React from 'react';

const NavBar = (props) => {
  return (
    <nav>
      <div className="nav-container">
        <div className="back-container">
        <span className="glyphicon glyphicon-arrow-left icon"></span>
          <u>Back</u>
        </div>
        <ol className="nav-list">
          <li><u>Home</u></li><span>/</span>
          <li><u>Men</u></li><span>/</span>
          <li><u>Shoes</u></li><span>/</span>
          <li><u>UltraBoost</u></li>
        </ol>
      </div>
    </nav>
  )
}

export default NavBar;