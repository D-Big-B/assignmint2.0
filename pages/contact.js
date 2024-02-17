import Layout from "@/components/Layout/Layout";
import React from "react";
import styles from "../styles/Contact.module.css";
import Contact from "@/components/Contact/Contact";

export default function contact() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1>Contact Us</h1>
        <Contact />
      </main>
    </Layout>
  );
}
