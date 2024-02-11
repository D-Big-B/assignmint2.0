import Image from "next/image";
import React from "react";
import styles from "./AssignmentType.module.css";
export default function AssignmentType() {
  return (
    <section className={styles.assignmentType}>
      <div className={styles.assignmentTypeLeft}>
        <h1>Our Services</h1>
        <p>
          Unlock your coding potential with our premier services tailored to
          meet your programming needs! If you're grappling with challenging
          programming assignments, worry no more! Our seasoned team is here to
          offer expert coding solutions across a spectrum of languages and
          domains, including Java, Data Structures, Algorithms, JAVA EE, C#
          .NET, and Web programming. Say goodbye to the stress of looming
          deadlines and complex coding tasks as we guarantee timely delivery and
          budget-friendly prices. With our dedicated experts at the helm, you
          can rest assured that your coding projects are in capable hands,
          leaving you free to focus on what truly matters. Whether you're a
          student striving for academic excellence or a professional navigating
          intricate coding challenges, we're committed to providing top-notch
          solutions tailored to your specific needs. Experience the difference
          with our reliable and efficient services – let us handle the coding
          while you seize the opportunities that await!
        </p>
      </div>
      <div className={styles.assignmentTypeRight}>
        <Image
          src="/languages.png"
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
