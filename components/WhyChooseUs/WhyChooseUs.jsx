import Image from "next/image";
import React from "react";
import styles from "./WhyChooseUs.module.css";
export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.whyChooseUsLeft}>
        <h1>Why Choose Us ?</h1>
        <ul>
          <li>
            <span>Comprehensive Coding Expertise: </span>Specializing in coding
            assignments across all languages and platforms, handled by our
            skilled developers and programmers with extensive experience.
          </li>
          <li>
            <span>Bespoke Solutions: </span>Offering tailored solutions for all
            your coding challenges, ensuring accuracy, efficiency, and adherence
            to your specific requirements.
          </li>
          <li>
            <span>Flawless Execution: </span>Expect flawless code, comprehensive
            documentation, and timely delivery to empower your programming
            endeavors.
          </li>
          <li>
            <span>Seamless Process: </span>Benefit from our streamlined process,
            transparent pricing, and round-the-clock support for a seamless and
            hassle-free experience.
          </li>
          <li>
            <span>Top-Notch Assistance: </span>Choose Assignmint for top-notch
            coding assistance to elevate your projects, whether you're a
            student, a professional, or a business seeking tailored solutions.
          </li>
          <li>
            <span>Dedicated Expertise: </span>Trust our expertise and dedication
            to ensure your projects are completed with precision and
            proficiency, turning your coding challenges into triumphs.
          </li>
        </ul>
      </div>
      <div className={styles.whyChooseUsRight}>
        <Image src="/logoOnly.png" alt="assignmint" width={200} height={400} />
      </div>
    </section>
  );
}
