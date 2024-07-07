import { Button, Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import styles from "./MultiStepForm.module.css";
import Lottie from "lottie-react";
import loading from "@/public/loading.json";

const Review = () => {
  const { assignmentDetails, referenceDetails, next, prev, setIsSubmitted } =
    useContext(MultiStepFormContext);
  const [quoteId, setQuoteId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let quoteIdResponse = "";
  const createQuote = async () => {
    const formData = new FormData();
    formData.append("name", assignmentDetails.name);
    formData.append("email", assignmentDetails.email);
    formData.append("contactNumber", assignmentDetails.contactNumber);
    formData.append("deadline", assignmentDetails.deadline);
    assignmentDetails.files.forEach((singleFile, index) => {
      formData.append("files", singleFile); // Append each file with the same key 'files'
    });

    const response = await fetch("/api/quote", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      //  console.log(response);
      throw new Error("Failed to upload files");
    }
    const data = await response.json();
    console.log("Quote Data : ", data);
    quoteIdResponse = data.quoteId;
    setQuoteId(data.quoteId);
  };
  const handleCreateOrder = async () => {
    try {
      setIsLoading(true);
      await createQuote();
      const formData = new FormData();
      formData.append("quoteId", quoteIdResponse);
      formData.append("remarks", referenceDetails.remarks);
      referenceDetails.supportingDocuments.forEach((singleFile, index) => {
        formData.append("files", singleFile); // Append each file with the same key 'files'
      });
      const response = await fetch("/api/order", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload files");
      }
      await response.json();
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    // setIsSubmitted(true);
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
          onClick={handleCreateOrder}
        >
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Lottie
                animationData={loading}
                style={{ width: "20px", marginRight: "20px" }}
              />
              <span style={{}}>Please Wait...</span>
            </div>
          ) : (
            " Create Order"
          )}
        </button>
        <button className={styles.submitForm} onClick={prev}>
          Back
        </button>
      </div>
    </div>
  );
};
export default Review;
