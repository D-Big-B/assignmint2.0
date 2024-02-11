import React from "react";
import styles from "./Landing.module.css";
import LandingForm from "./LandingForm";
export default function Landing() {
  return (
    <section className={styles.landing}>
      <div className={styles.landing__left}>
        <div className={styles.left__container}>
          <h3>Discover the magic of hassle-free assignments </h3>
          <h1>Welcome to Assignmint.</h1>
          <span>
            We hold one goal above the others: 100% client satisfaction.
          </span>
          <div className={styles.orderNow}>Create Order</div>
        </div>
      </div>
      <div className={styles.landing__right}>
        <LandingForm />
      </div>
    </section>
  );
}
