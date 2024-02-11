import React from "react";
import styles from "./Layout.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h1>Disclaimer</h1>
          <p>
            You agree that the assignments written by Assignmint.com experts are
            intended to be used only for further individual research, reference
            or study purposes.
          </p>
          <Image src="/logo.png" alt="assignmint" width={280} height={80} />
        </div>
        <div className={styles.footerSection}>
          <h1>Useful Links</h1>
          <div className={styles.usefulLinks}>
            <ul>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Reviews</li>
            </ul>
            <ul>
              <li>Our Services</li>
              <li>Discount</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h1>Address</h1>
          <p>3 Bellbridge Dr, Hoppers Crossing, Melbourne VIC 3029</p>
          <p>Whats App</p>
          <p>support@assignmint.com</p>
        </div>
      </div>
      <p className={styles.footerText}>
        Copyright © 2023 All rights reserved by
      </p>
    </footer>
  );
}
