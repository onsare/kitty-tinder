import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="header">
      <Link href="/profile">
        <a>
          <div className="btn">
            <img src="./icons/user.png" alt="profile" />
          </div>
        </a>
      </Link>
      <Link href="/">
        <a>
          <div className="logo">
            <img src="./icons/logo.png" alt="Logo" />
          </div>
        </a>
      </Link>
      <Link href="/chat">
        <a>
          <div className="btn">
            <img src="./icons/messages.png" alt="messages" />
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Header;
