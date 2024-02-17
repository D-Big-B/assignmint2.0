import React from "react";
import { TextField, Grid, Button } from "@mui/material";
import Box from "./Box";
import Lottie from "lottie-react";
import success from "../../public/success.json";
import styles from "./SuccessPanel.module.css";
export default function SuccessPanel() {
  return (
    <>
      <Box>
        <div className={styles.container}>
          <Lottie animationData={success} style={{ width: "250px" }} />
          <h4>Hurray!</h4>
          <h6>We have received your Order. </h6>
          <p>
            Our Team will shortly reach back to you. If you are in hurry you can
            instantly connect with us through whatsApp or Gmail.
          </p>
        </div>
      </Box>
    </>
  );
}
