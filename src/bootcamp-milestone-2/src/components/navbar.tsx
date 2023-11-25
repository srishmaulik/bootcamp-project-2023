import React from "react";
import Link from "next/link"; // Make sure to import Link from Next.js

import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.navbarContainer}>
      <h1> Jesus' Personal Website </h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/resume">Resume</Link>
      </nav>
    </header>
  );
}
