import Image from "next/image";
import React from "react";
import styles from "./AssignmentType.module.css";
export default function AssignmentType() {
  return (
    <section className={styles.assignmentType}>
      <div className={styles.assignmentTypeLeft}>
        <h1>Our Services</h1>
        <ul>
          <li>
            Unlock your coding potential with expert solutions in Java, Data
            Structures, Algorithms, JAVA EE, C# .NET, and Web Programming.
          </li>
          <li>
            Enjoy timely delivery of your projects, meeting even the tightest
            deadlines with our reliable service.
          </li>
          <li>
            Take advantage of our budget-friendly prices, offering high-quality
            coding solutions without breaking the bank.
          </li>

          <li>
            Experience a stress-free process as we handle your coding
            challenges, allowing you to focus on what truly matters.
          </li>
          <li>
            Receive dedicated customer support with top-notch, customized
            solutions to ensure your complete satisfaction.
          </li>
        </ul>
      </div>
      <div className={styles.assignmentTypeRight}>
        <div className={styles.servicesImage}>
          <Image
            src="/languages.png"
            alt="assignmint"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "90%" }}
          />
        </div>
      </div>
    </section>
  );
}
