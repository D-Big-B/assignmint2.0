import React from "react";
import styles from "./IntroPanel.module.css";
import { Grid } from "@mui/material";

const IntroPanel = () => {
  return (
    <div id={styles.container}>
      <h2>Assignment Help, Just One Click Away!</h2>

      <p>
        Struggling with programming assignments? Look no further! Our skilled
        team provides expert coding solutions for Java, Data Structures,
        Algorithms, JAVA EE, C# .NET, and Web programming. Enjoy peace of mind
        with timely delivery and budget-friendly prices. Let us handle the
        coding while you focus on what matters most.
      </p>
    </div>
  );
};

export default IntroPanel;
