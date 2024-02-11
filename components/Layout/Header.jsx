import Image from "next/image";
import React from "react";
import styles from "./Layout.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="assignmint" width={180} height={50} />
      </div>
      <ul className={styles.navItems}>
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
    </header>
  );
}
