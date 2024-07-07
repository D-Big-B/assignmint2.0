import Image from "next/image";
import React, { useState } from "react";
import styles from "./Layout.module.css";
import Link from "next/link";

export default function Header() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <nav id={styles.nav}>
        {/* <Link href="/"> */}
        <div className={styles.logo}>
          <Image src="/logo.png" alt="assignmint" width={180} height={50} />
        </div>
        {/* </Link> */}
        <div className={styles.navContainer}>
          <ul
            id={sideMenuOpen ? "" : styles.navItems}
            className={sideMenuOpen ? styles.navbar_active : ""}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/order">Order Now</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ(s)</Link>
            </li>
          </ul>
        </div>
        <div id={styles.mobile}>
          {!sideMenuOpen ? (
            <i
              id={styles.bar}
              className="fas fa-bars"
              onClick={() => setSideMenuOpen(true)}
            ></i>
          ) : (
            <i
              className="fas fa-times"
              onClick={() => setSideMenuOpen(false)}
            ></i>
          )}
        </div>
      </nav>
    </header>
  );
}
