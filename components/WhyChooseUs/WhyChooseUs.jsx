import Image from "next/image";
import React from "react";
import styles from "./WhyChooseUs.module.css";
export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.whyChooseUsLeft}>
        <h1>Why Choose Us ?</h1>
        <p>
          At Assignmint, we specialize in coding assignments across all
          languages and platforms. Our team comprises skilled developers and
          programmers with extensive experience in the field. We offer bespoke
          solutions for all your coding challenges, ensuring accuracy,
          efficiency, and adherence to your requirements. With Assignmint, you
          can expect flawless code, comprehensive documentation, and timely
          delivery, empowering you to excel in your programming endeavors. Our
          streamlined process, transparent pricing, and round-the-clock support
          make working with us seamless and hassle-free. Choose Assignmint for
          top-notch coding assistance and take your projects to the next level.
          Whether you're a student facing academic deadlines, a professional
          navigating complex coding tasks, or a business seeking tailored
          solutions, our expertise and dedication ensure that your projects are
          completed with precision and proficiency. Trust Assignmint to be your
          reliable partner in coding success, and let's turn your coding
          challenges into triumphs together.
        </p>
      </div>
      <div className={styles.whyChooseUsRight}>
        <Image src="/logoOnly.png" alt="assignmint" width={200} height={400} />
      </div>
    </section>
  );
}
