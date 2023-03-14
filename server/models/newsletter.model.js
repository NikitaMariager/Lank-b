const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscribeSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },

  email: {
    type: String,
    require: [true],
  },
});

module.exports = mongoose.model("subscriber", subscribeSchema, "Subscribers");
