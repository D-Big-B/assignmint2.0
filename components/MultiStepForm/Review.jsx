import { Button, Col, Row } from "antd";
import React, { useContext, useEffect } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import styles from "./MultiStepForm.module.css";

const Review = () => {
  const { assignmentDetails, referenceDetails, next, prev, setIsSubmitted } =
    useContext(MultiStepFormContext);

  const handleClick = () => {
    setIsSubmitted(true);
  };
  useEffect(() => {
    console.log(assignmentDetails);
    console.log(referenceDetails);
  });
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewDetails}>
        <h1>Assignment Details</h1>
        <p>
          <span>Name: </span>
          {assignmentDetails.name}
        </p>
        <p>
          <span>Email: </span>
          {assignmentDetails.email}
        </p>
        <p>
          <span>Contact Number:</span> {assignmentDetails.contactNumber}
        </p>
        <p>
          <span>Deadline: </span>
          {assignmentDetails.deadline}
        </p>
        <p>
          <span>Assignment Files: </span>
          <ul>
            {assignmentDetails.files.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </p>
      </div>

      <div className={styles.reviewDetails}>
        <h1>Reference Details</h1>
        <p>
          <span>Remarks:</span> {referenceDetails.remarks}
        </p>
        <p>
          <span>Reference Files:</span>{" "}
          <ul>
            {referenceDetails.supportingDocuments.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </p>
      </div>

      <div>
        <button
          className={styles.submitForm}
          type="submit"
          onClick={handleClick}
        >
          Create Order
        </button>
        <button className={styles.submitForm} onClick={prev}>
          Back
        </button>
      </div>
    </div>
  );
};
export default Review;
