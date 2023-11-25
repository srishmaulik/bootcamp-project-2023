// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <h1> Srish's Personal Website </h1>
      <nav className="navbar">
        <Link href="/">    Home    </Link>
        <Link href="/blog">   Blog   </Link>
        <Link href="/resume">   Resume   </Link>
        
      </nav>
    </header>
  );
};

export default Navbar;


