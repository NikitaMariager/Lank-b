const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const areaSchema = new Schema({
  area: {
    type: String,
    required: [true, "area is required"],
  },
  description: {
    type: String,
    require: [true, "pleas enter af description for this area"],
  },
  areaimage: {
    type: String,
  },
});

module.exports = mongoose.model("Area", areaSchema, "areas");
