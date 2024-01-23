// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import style from "./navbar.module.css";

export default function navbar() {
  return (
    <header className={style.navbar}>
      <h1 className="logo">
        <Link href="/">Srish's Website</Link>
      </h1>
      <ul className={style.navlist}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}



