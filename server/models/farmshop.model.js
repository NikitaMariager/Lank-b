const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmshopSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name of shop is required"],
  },

  lat: {
    type: String,
  },
  long: {
    type: String,
  },

  openinghours: {
    type: String,
    required: [true, "Openinghours is required"],
  },
  adress: {
    type: String,
    required: [true, "adress is required"],
  },

  city: {
    type: String,
    required: [true, "city is required"],
  },

  zip: {
    type: String,
  },
  area: {
    type: mongoose.Schema.ObjectId,
    ref: "Area",
    required: [true, "area must be selected"],
  },
  short: {
    type: String,
  },
  description: {
    type: String,
  },
  shopimage: {
    type: String,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Farmshop", farmshopSchema, "farmshops");
