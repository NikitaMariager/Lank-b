const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  titel: {
    type: String,
    required: [true, "Name of shop is required"],
  },

  article: {
    type: String,
    required: [true, "please paste article here"],
  },
  articleimage: {
    type: String,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Article", articleSchema, "article");
