const mongoose = require("mongoose");

const QuoteDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/, // Simple email format validation
  },
  contactNumber: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  quoteFiles: [
    {
      type: String,
      required: true,
    },
  ],
});

export default mongoose.models.QuoteData ||
  mongoose.model("QuoteData", QuoteDataSchema);
