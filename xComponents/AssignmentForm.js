import React, { useState, useRef } from "react";
import Box from "./Box";
import { TextField, Grid, Button } from "@mui/material";
import CustomButton from "./CustomButton";
import FileUpload from "./file-upload/FileUpload";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CustomPhoneNumber from "./PhoneNumber";
import axios from "axios";
import styles from "./AssignmentForm.module.css";
import SuccessPanel from "./SuccessPanel";

const AssignmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [deadline, setDeadline] = useState("");
  const [subject, setSubject] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const buttonRef = useRef(null);
  const [fileCheck, setFileCheck] = useState("");
  const [city, setCity] = useState("");
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle form submission here
    if (selectedFiles.length === 0) {
      setFileCheck("Please select one or more files");
    } else {
      setLoading(true);
      const formData = new FormData();

      try {
        for (let i = 0; i < selectedFiles.length; ++i) {
          formData.append("attachments", selectedFiles[i]);
        }
        const values = {
          name,
          deadline,
          subject,
          contactNumber,
          description,
          email,
          city,
        };
        formData.append("emailObject", JSON.stringify(values));
        try {
          // axios.post("/api/sendResponse", { email });

          axios.post("/api/sendMail", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          setSuccess(true);

          // console.log("Response : ", response.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    }
  };
  const handleCustomButtonClick = () => {
    buttonRef.current.click();
  };

  if (success) {
    return <SuccessPanel />;
  }
  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <PhoneInput
                value={contactNumber}
                onChange={setContactNumber}
                inputComponent={CustomPhoneNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="date"
                label="Deadline"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="City"
                variant="outlined"
                required
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Subject"
                variant="outlined"
                required
                fullWidth
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description (optional)"
                variant="outlined"
                fullWidth
                multiline
                minRows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <div>
                <label htmlFor="file-upload" className={styles.selectFileLabel}>
                  Select files
                </label>
                <Button
                  variant="outlined"
                  onClick={handleCustomButtonClick}
                  style={{ color: "black", borderColor: "black" }}
                >
                  Choose Assignment Files
                </Button>
                <input
                  className={styles.selectFileInput}
                  id="file-upload"
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  ref={buttonRef}
                />
                <p className={styles.fileCheck}>{fileCheck}</p>
                <ul>
                  {selectedFiles.map((file, index) => (
                    <li key="{index}" className={styles.selectedFiles}>
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
            <Grid item xs={12}>
              <CustomButton fullWidth></CustomButton>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default AssignmentForm;
