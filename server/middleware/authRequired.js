/* const User = require("../models/user.model"); */

const requireAuth = async (req, res, next) => {
  console.log("auth", req.headers); //cookies ligger i header

  if (req.session && req.session.userId) {
    //ok - Godkendt
    return next();
  } else {
    console.log("LOGIN afvist");
    res
      .set("connection", "close")
      .status(401)
      .json({ message: "Du har ikke adgang" });
  }
};

module.exports = requireAuth;
