const mongoose = require("mongoose");

const OrderDataSchema = new mongoose.Schema({
  quote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuoteData",
    required: true,
  },
  remarks: {
    type: String,
    required: false,
  },
  referenceFiles: [
    {
      type: String,
    },
  ],
  paymentCompleted: {
    type: Boolean,
    default: false,
    required: true,
  },
});

export default mongoose.models.OrderData ||
  mongoose.model("OrderData", OrderDataSchema);
