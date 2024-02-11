import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";

import styles from "./MultiStepForm.module.css";

const Details = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.address1) errors.address1 = "Address is required";
        if (!values.city) errors.city = "City is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={styles.details__wrapper}>
            <div className={`form__item ${errors.address1 && "input__error"}`}>
              <label>Address-1 *</label>
              <input type="text" name={"address1"} />
              <p className={styles.error__feedback}>{errors.address1}</p>
            </div>
            <div className={styles.form__item}>
              <label>Address-2</label>
              <input type="text" name={"address2"} />
            </div>
            <div className={`form__item ${errors.city && "input__error"}`}>
              <label>City *</label>
              <input type="text" name={"city"} />
              <p className={styles.error__feedback}>{errors.city}</p>
            </div>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              <Button type={"default"} onClick={prev}>
                Back
              </Button>
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Details;
