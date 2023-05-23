import React, { useState } from "react";
import AssignmintLogo from "../public/AssignmintLogo";
import Link from "next/link";
import styles from "./MainNavbar.module.css";
import NavbarButtons from "./NavbarButtons";

const MainNavbar = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <>
      <nav id={styles.nav}>
        <Link href="/">
          <AssignmintLogo />
        </Link>
        <div>
          <ul
            id={styles.navbar}
            className={sideMenuOpen ? styles.navbar_active : ""}
          >
            <NavbarButtons>Whatsapp logo</NavbarButtons>
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
    </>
  );
};

export default MainNavbar;
