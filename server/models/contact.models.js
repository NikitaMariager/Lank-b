const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name of shop is required"],
  },

  email: {
    type: String,
    required: [true, "Email of shop is required"],
  },
  topic: {
    type: String,
  },

  message: {
    type: String,
    required: [true, "Openinghours is required"],
  },

  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contactSchema, "contact");
