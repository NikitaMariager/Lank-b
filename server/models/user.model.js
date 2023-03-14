const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* til at hjælpe */
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

userSchema.statics.signup = async function (email, password, name) {
  /* valider for tomme felter og valider password og valider email */
  if (!email || !password || !name) throw Error("All fields must be filled!");
  if (!validator.isEmail(email)) throw Error("Email not valid");
  if (!validator.isStrongPassword(password)) throw Error("Password not valid");

  /* findes mail i forvejen = error */
  const exists = await this.findOne({ email: email });
  if (exists) throw Error("Email already exists");

  /* krypter password */
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  /* Gem bruger i DB */
  const user = await this.create({ email: email, name: name, password: hash });

  return user;
};

/* login - tjek om email findes og om password (krypteret) matcher */
userSchema.statics.signin = async function (email, password) {
  if (!email || !password) throw Error("All fields must be filled!");

  /* tjek, findes bruger ud fra email */
  const user = await this.findOne({ email: email });
  if (!user) throw Error("Incorrect email");

  /* matcher password? */
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw Error("Incorrect password");

  /* bruger der matcher sendes retur */
  return user;
};

module.exports = mongoose.model("User", userSchema, "users");
