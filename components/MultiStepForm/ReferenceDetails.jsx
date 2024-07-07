import React, { useContext, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiStepFormContext from "./MultiStepFormContext";

import styles from "./MultiStepForm.module.css";

const fileTypes = ["JPEG", "JPG", "PNG", "PDF", "ZIP"];

export default function ReferenceDetails() {
  const [fileError, setFileError] = useState("");
  const { referenceDetails, setReferenceDetails, next, prev } =
    useContext(MultiStepFormContext);
  const [file, setFile] = useState([]);

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
  const formik = useFormik({
    initialValues: referenceDetails,
    validationSchema: Yup.object({
      remarks: Yup.string().max(200, "Maximum 200 character allowed"),
    }),
    onSubmit: (values) => {
      let referenceDetailsDebug = {
        remarks: values.remarks,
        supportingDocuments: file,
      };
      console.log(referenceDetailsDebug);
      setReferenceDetails(referenceDetailsDebug);
      console.log(referenceDetails);
      next();
    },
  });
  return (
    <div className={styles.landingFormContainer}>
      <form onSubmit={formik.handleSubmit} className={styles.landingForm}>
        <div className={styles.fieldContainer}>
          <label>Remarks(optional)</label>
          <div className={styles.fieldInput}>
            <textarea
              type="text"
              name="remarks"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.remarks && <p>{formik.errors.remarks}</p>}
        </div>

        <div className={styles.fieldContainer}>
          <label>Select Supporting Document File(s)(optional)</label>
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
          <button className={styles.submitForm} onClick={prev}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
