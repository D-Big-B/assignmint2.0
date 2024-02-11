import React from "react";
import styles from "./SuccessStory.module.css";
import Image from "next/image";
import CountUp from "react-countup";

const data = [
  {
    id: "1",
    image: "/newStudent.png",
    number: 654,
    title: "Students Approached",
  },
  {
    id: "2",
    image: "/new-order-received.png",
    number: 984,
    title: "Total Orders Received",
  },
  {
    id: "3",
    image: "/new-order-done.png",
    number: 834,
    title: "total orders done",
  },
  {
    id: "4",
    image: "/new-order-process.png",
    number: 150,
    title: "total orders in process",
  },
];
export default function SuccessStory() {
  return (
    <section className={styles.successStories}>
      {data.map((dataItem) => (
        <div className={styles.storyCard} key={dataItem.id}>
          <Image
            src={dataItem.image}
            alt="Assignmint"
            width={100}
            height={100}
          />
          <CountUp
            duration={2}
            className={styles.counter}
            end={dataItem.number}
          />
          <span>{dataItem.title}</span>
        </div>
      ))}
    </section>
  );
}
