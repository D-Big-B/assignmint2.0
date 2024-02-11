import Layout from "@/components/Layout/Layout";
import MultiStepForm from "@/components/MultiStepForm";
import React from "react";
import styles from "../styles/Order.module.css";

export default function order() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.container}>
          <MultiStepForm />
        </div>
      </main>
    </Layout>
  );
}
