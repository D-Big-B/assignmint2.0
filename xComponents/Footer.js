import { Grid } from "@mui/material";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>Copyright © 2023 All rights reserved by</p>

      <p>
        <span>Assignmint</span>
      </p>
    </div>
  );
};

export default Footer;
