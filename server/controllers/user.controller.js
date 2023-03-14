const User = require("../models/user.model");

/* Login */
module.exports.signinUser = async (req, res) => {
  const { email, password } = req.body;

  /* Login er godkendt - tilføj session-cookie */

  try {
    const user = await User.signin(email, password);

    req.session.userId = user._id; //gem users _id i session cookie

    res.status(200).json({ id: user._id, name: user.name, email: user.email });
  } catch (error) {
    console.log("LOGIN", error.message);
    res
      .status(401)
      .json({ error: "noget gik galt - måske forkert email/password" });
  }
};

/* Logout */
module.exports.signoutUser = async (req, res) => {
  console.log("Logud");

  req.session.destroy((err) => {
    // hvis der er fejl:
    if (err) return res.status(500).json({ message: "sign out failed" });

    res
      .clearCookie(process.env.SESSION_NAME)
      .json({ message: "sign out succeded " });
  });
};

/* signup */
module.exports.signupUser = async (req, res) => {
  const { email, password, name } = req.body;

  console.log(email, password, name);
  try {
    const user = await User.signup(email, password, name);
    res.status(200).json({ id: user._id, name: user.name, email: user.email });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};
