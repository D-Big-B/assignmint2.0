import React from "react";
import styles from "./IntroPanel.module.css";
import { Grid } from "@mui/material";

const IntroPanel = () => {
  return (
    <div id={styles.container}>
      <h2>Code your way to success - on time, every time.</h2>

      <p>
        Need help with your programming assignments? We have got you covered.
        Our expert team delivers top-notch coding solutions for Java, Data
        Structures and Algorithms, JAVA EE, C# .NET, and Web programming - all
        within your deadline and budget. Leave the coding to us and experience
        the peace of mind that comes with on-time delivery and affordable
        prices.
      </p>
    </div>
  );
};

export default IntroPanel;
