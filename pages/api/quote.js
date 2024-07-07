import nextConnect from "next-connect";
import multer from "multer";
import { google } from "googleapis";
import fs from "fs";
import connectToDatabase from "../../lib/mongodb";
import QuoteData from "../../models/Quote";

const upload = multer({ dest: "/tmp" });

const handler = nextConnect();

handler.use(upload.array("files"));

handler.post(async (req, res) => {
  const { name, email, contactNumber, deadline } = req.body;

  const files = req.files;

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const drive = google.drive({ version: "v3", auth: oauth2Client });

  const uploadedFilesLinks = [];
  for (const file of files) {
    // //console.log("file : ", file);
    const fileMetadata = {
      name: file.originalname,
      parents: process.env.GOOGLE_DRIVE_FOLDER_ID_QUOTE
        ? [process.env.GOOGLE_DRIVE_FOLDER_ID_QUOTE]
        : [],
    };

    const media = {
      mimeType: file.mimetype,
      body: fs.createReadStream(file.path),
    };

    try {
      const response = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: "id, webViewLink, webContentLink",
      });

      uploadedFilesLinks.push(
        response.data.webViewLink || response.data.webContentLink
      );
      fs.unlinkSync(file.path); // Remove the file from server
      //console.log("Uploaded Files", uploadedFilesLinks);
    } catch (error) {
      console.error("Error uploading file to Google Drive:", error);
    }
  }

  try {
    //console.log("Connecting to Database ......");
    await connectToDatabase();
    //console.log("Connected to Database");
    const quoteData = new QuoteData({
      name,
      email,
      contactNumber,
      deadline,
      quoteFiles: uploadedFilesLinks,
    });
    //console.log(quoteData);
    const savedData = await quoteData.save();
    //console.log("Saved Data : ", savedData);
    res.status(200).json({
      message: "Form data and files uploaded successfully!",
      quoteId: `${savedData._id}`,
    });
  } catch (error) {
    //console.log(error);
    res.status(500).json({ error: "Error saving form data to MongoDB" });
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
