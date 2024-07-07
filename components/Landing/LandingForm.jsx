import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FileUploader } from "react-drag-drop-files";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import styles from "./Landing.module.css";
import axios from "axios";
import Lottie from "lottie-react";
import loading from "@/public/loading.json";

const fileTypes = ["JPEG", "JPG", "PNG", "PDF", "ZIP"];
export default function LandingForm({ setIsSubmitted }) {
  const [file, setFile] = useState([]);
  const [contactError, setContactError] = useState("");
  const [fileError, setFileError] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (file) => {
    if (file.length > 0) {
      setFile([]);
    }
    if (file.length > 5) {
      setFileError("Maximum 5 files are allowed at once");
    } else {
      setFileError("");
      const filesArray = Array.from(file);

      setFile(filesArray);
    }
  };
  const handleContactChange = (contactNumber) => {
    const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (regex.test(contactNumber)) {
      setContactNumber(contactNumber);
      setContactError("");
    } else {
      setContactError("Please Enter Valid Phone Number");
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      deadline: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      deadline: Yup.date()
        .nullable()
        .required("Date is required")
        .min(new Date(), "Please Select Valid Date"),
    }),
    onSubmit: async (values) => {
      if (contactNumber && file.length > 0) {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("contactNumber", contactNumber);
        formData.append("deadline", values.deadline);
        file.forEach((singleFile, index) => {
          formData.append("files", singleFile); // Append each file with the same key 'files'
        });
        // formData.append("files", file);
        setIsLoading(true);
        try {
          const response = await fetch("/api/quote", {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            console.log(response);
            throw new Error("Failed to upload files");
          }
          const data = await response.json();
          alert(data.message);
          setIsSubmitted(true);
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      } else {
        if (!contactNumber) {
          setContactError("Required");
        }
        if (file.length === 0) {
          setFileError("Required");
        }
      }
    },
  });
  return (
    <div className={styles.landingFormContainer}>
      <h1 className={styles.formHeading}>Free Quote </h1>
      <form onSubmit={formik.handleSubmit} className={styles.landingForm}>
        <div className={styles.fieldContainer}>
          <label>Name*</label>
          <div className={styles.fieldInput}>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.name && <p>{formik.errors.name}</p>}
        </div>
        <div className={styles.fieldContainer}>
          <label>Email*</label>
          <div className={styles.fieldInput}>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.email && <p>{formik.errors.email}</p>}
        </div>
        <div className={styles.fieldContainer}>
          <label>Contact Number*</label>
          <div className={styles.fieldInput}>
            <PhoneInput
              name="contactNumber"
              value={formik.values.contactNumber}
              onChange={handleContactChange}
            />
          </div>
          {contactError && <p>{contactError}</p>}
        </div>
        <div className={styles.fieldContainer}>
          <label>Deadline*</label>
          <div className={styles.fieldInput}>
            <input
              type="date"
              name="deadline"
              value={formik.values.deadline}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.deadline && <p>{formik.errors.deadline}</p>}
        </div>
        <div className={styles.fieldContainer}>
          <label>Select Assignment File(s)*</label>
          {file.length > 0 &&
            file.map((fileEle) => (
              <div className={styles.fileNameContainer} key={fileEle.name}>
                <span className={styles.fileName}>{fileEle.name}</span>
              </div>
            ))}
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          >
            <div className={styles.dropZone}>Upload Here</div>
          </FileUploader>
          {fileError && <p>{fileError}</p>}
        </div>
        <div>
          <button
            className={styles.submitForm}
            type="submit"
            disabled={isLoading}
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
              "Get Your Free Quote"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
