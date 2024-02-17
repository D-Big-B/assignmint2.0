import Layout from "@/components/Layout/Layout";
import React from "react";
import styles from "../styles/Faq.module.css";
import FAQ from "@/components/FAQ/FAQ";

export default function faq() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1> FAQs</h1>
          <FAQ />
        </div>
      </main>
    </Layout>
  );
}
