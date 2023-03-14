const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteContactInfoSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name of site is required"],
  },

  adress: {
    type: String,
    required: [true, "adress of site is required"],
  },
  zip: {
    type: String,
    required: [true, "zip is required"],
  },

  city: {
    type: String,
    required: [true, "city is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  cvr: {
    type: String,
    required: [true, "CVR is required"],
  },
});

module.exports = mongoose.model(
  "SiteContact",
  siteContactInfoSchema,
  "siteContact"
);
