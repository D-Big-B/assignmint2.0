import React, { useContext, useRef, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiStepFormContext from "./MultiStepFormContext";

import styles from "./MultiStepForm.module.css";

const fileTypes = ["JPEG", "JPG", "PNG", "PDF", "ZIP"];

export default function AssignmentDetails() {
  const { assignmentDetails, setAssignmentDetails, next } =
    useContext(MultiStepFormContext);
  const [file, setFile] = useState([]);
  const [contactNumber, setContactNumber] = useState("");
  const [contactError, setContactError] = useState("");
  const [fileError, setFileError] = useState("");
  // const contactField = useRef("");

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
    if (regex.test(contactNumber)) setContactNumber(contactNumber);
    else {
      setContactError("Please Enter Valid Phone Number");
    }
  };
  const formik = useFormik({
    initialValues: assignmentDetails,
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
    onSubmit: (values) => {
      if (contactNumber && file.length > 0) {
        let assignmentDetailsDebug = {
          name: values.name,
          email: values.email,
          contactNumber: contactNumber,
          deadline: values.deadline,
          files: file,
        };

        setAssignmentDetails(assignmentDetailsDebug);

        next();
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
              value={contactNumber}
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
              <div className={styles.fileName} key={fileEle.name}>
                {fileEle.name}
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
          <button className={styles.submitForm} type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
