import Image from "next/image";
import React from "react";
import styles from "./GlobalPresence.module.css";

export default function GlobalPresence() {
  return (
    <section className={styles.globalPresence}>
      <h1>
        Assignmint Experts Bring to You Quality Coding Services at Unbelievable
        Prices!
      </h1>
      <span>
        Why spend all that time completing your homework when you can get it
        done by your very own Assignmint Expert. Assignmint is premium
        assignment providing service that can help you get your desired grades.
      </span>
      <div className={styles.globalBtn}>Order Now</div>
      <div className={styles.globalImage}>
        <Image
          src="/global.gif"
          alt="assignmint"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "90%" }}
        />
      </div>
    </section>
  );
}
