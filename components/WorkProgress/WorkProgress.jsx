import Image from "next/image";
import React from "react";
import styles from "./WorkProgress.module.css";

export default function WorkProgress() {
  return (
    <section className={styles.workProgress}>
      <Image
        src="/workProgress.png"
        alt="assignmint"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "80%", height: "60%" }}
      />
    </section>
  );
}
