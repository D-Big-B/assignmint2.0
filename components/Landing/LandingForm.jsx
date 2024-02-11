import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FileUploader } from "react-drag-drop-files";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import styles from "./Landing.module.css";

const fileTypes = ["JPEG", "PNG", "GIF"];
export default function LandingForm() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
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
      contactNumber: Yup.string()
        .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Invalid phone number")
        .required("Required"),
      deadline: Yup.date()
        .nullable()
        .required("Date is required")
        .min(new Date(), "Please Select Valid Date"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
              value={formik.values.contactNumber}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.contactNumber && <p>{formik.errors.contactNumber}</p>}
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
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          >
            <div className={styles.dropZone}>Upload Here</div>
          </FileUploader>
        </div>
        <div>
          <button className={styles.submitForm} type="submit">
            Get Your Free Quote
          </button>
        </div>
      </form>
    </div>
  );
}
