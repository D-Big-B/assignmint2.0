import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";
import styles from "./Reviews.module.css";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <section className={styles.reviews}>
      <article className={styles.review}>
        <div className={styles.imgContainer}>
          <img src={image} alt={name} className={styles.personImg} />
          <span className={styles.quoteIcon}>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className={styles.author}>{name}</h4>
        <p className={styles.job}>{job}</p>
        <p className={styles.info}>{text}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.prevBtn} onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className={styles.nextBtn} onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Review;
