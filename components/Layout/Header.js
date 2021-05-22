import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="btn">
        <img src="./icons/user.png" alt="profile" />
      </div>
      <div className="logo">
        <img src="./icons/logo.png" alt="Logo" />
      </div>
      <div className="btn">
        <img src="./icons/messages.png" alt="messages" />
      </div>
    </div>
  );
}

export default Header;
