import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo-wrap">
        <div className="logo-icon">S</div>
        <div className="logo-text">
          <span className="logo-main">Shop</span>
          <span className="logo-accent">Smart</span>
        </div>
      </div>

      {props.children}
    </div>
  );
};

export default Header;
