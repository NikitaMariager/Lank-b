const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  titel: {
    type: String,
    required: [true, "Name of shop is required"],
  },

  lat: {
    type: String,
  },
  long: {
    type: String,
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
  description: {
    type: String,
  },
  eventimage: {
    type: String,
  },
  datestart: {
    type: Date,
    require: [true, "please enter the start date for the event"],
  },
  dateend: {
    type: Date,
    require: [true, "please enter the end date for the event"],
  },
  starttime: { type: String },
  farmshop: {
    type: mongoose.Schema.ObjectId,
    ref: "Farmshop",
  },

  link: {
    type: String,
    require: [true, "please enter a link for the facebook event"],
  },
});

module.exports = mongoose.model("Event", eventSchema, "events");
