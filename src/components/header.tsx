"use client";
import Link from "next/link";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import "../../style/header.css";

function Header() {
  // State to toggle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div>
        <IoMdMenu className="menuIcon" onClick={() => handleMenuToggle()} />
      </div>

      <nav className="navbar">
        <div>
          <h1>Code Books</h1>
        </div>
        <div className={"Navigation"}>
          <Link href={"/"}>Home</Link>
          <Link href={"/books"}>Books</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact us</Link>
        </div>

        <div
          className={`navigationPages`}
          style={{ display: isMenuOpen ? "flex" : "none" }}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/books"}>Books</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact us</Link>
        </div>
        <div>
         <Link href={'/cart'}><RiShoppingCartFill  style={{color : 'white'}}/> </Link> 
        </div>
      </nav>
    </header>
  );
}

export default Header;
