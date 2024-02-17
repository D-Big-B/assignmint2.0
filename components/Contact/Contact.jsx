"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const contactConfig = {
    YOUR_EMAIL: "developer@javascript.com",
    YOUR_FONE: "(555)123-4567",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <h2>Get in Touch</h2>
          <p>
            <span>Email : </span>
            {contactConfig.YOUR_EMAIL}
          </p>
          <p>
            <span>Phone : </span>
            {contactConfig.YOUR_FONE}
          </p>
          <p>{contactConfig.description}</p>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Name"
              onChange={setName}
              value={name}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={setEmail}
            />
          </div>
          <div className={styles.textContainer}>
            <textarea placeholder="Message" />
          </div>
          <button>Send</button>
        </div>
      </div>
    </>
  );
}
