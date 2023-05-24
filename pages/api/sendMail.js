import multer from "multer";
import fs from "fs";
import { mailOptions, transporter } from "../../config/nodemailer";
const querystring = require("querystring");
import axios from "axios";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Create an instance of the multer middleware with desired configuration
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
      // Generate a unique filename for the uploaded file
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const filename = file.originalname.replace(/\s/g, "-");
      cb(null, `${uniqueSuffix}-${filename}`);
    },
  }),
}).any();

// Create an API route handler for the file upload
const handler = async (req, res) => {
  //   console.log(req.body);
  if (req.method === "POST") {
    console.log("From send mail");
    upload(req, res, async (err) => {
      if (err) {
        console.log(err);
        res.status(500).end("Something went wrong");
      } else {
        const attachments = [];

        req.files.forEach((file) => {
          attachments.push({ filename: file.originalname, path: file.path });
        });
        const data = JSON.parse(req.body.emailObject);
        console.log(attachments);

        // return res.status(200).json({ data: data, files: req.files });

        try {
          await transporter.sendMail({
            ...mailOptions,
            subject: "Help with Assignment",
            html: `<div style=" width: "100%", backgroundColor: "#f3f9ff", padding: "5rem 0" ">
        <div style=" maxWidth: 700, backgroundColor: "white", margin: "0 auto" ">
          <div style= " width: "100%", backgroundColor: "#00efbc", padding: "20px 0" ">
          <a href="${process.env.CLIENT_URL}"><img src="https://i.ibb.co/59myrrx/logo.png" style= "display: block; width: 600px; height: 283px; border-width: 0px; border-style: none; line-height: 100%; max-width: 100%; outline-width: medium; outline-style: none; text-decoration: none; color: rgb(51, 51, 51); font-size: 20px; font-weight: 700; border-radius: 10px;" /></a> 
          
          </div>
          <div style= " width: "100%", gap: 10, padding: "30px 0", display: "grid" ">
            <p style= " fontWeight: "800", fontSize: "1.2rem", padding: "0 30px" ">
              Form Assignmint
            </p>
            <div style= " fontSize: ".8rem", margin: "0 30px" ">
              <p>FullName: <b>${data.name}</b></p>
              <p>Email: <b>${data.email}</b></p>
              <p>Phone: <b>${data.contactNumber}</b></p>
              <p>Message: <i>${data.description}</i></p>
              <p>Deadline: <i>${data.deadline}</i></p>
            </div>
          </div>
        </div>
      </div>`,
            attachments: attachments,
          });
          req.files.forEach((file) => {
            fs.unlink(file.path, (err) => {
              if (err) {
                return res
                  .status(500)
                  .json({ message: "Something went wrong" });
              }
            });
          });
          console.log("Email sent");

          const response = await axios.post(
            `${process.env.CLIENT_URL}/api/sendResponse`,
            { email: data.email }
          );

          return res.status(200).json({ message: "Email Sent Successfully" });
        } catch (err) {
          console.log(err);
          return res.status(400).json({ message: err.message });
        }
      }
    });
  }
};
export default handler;
