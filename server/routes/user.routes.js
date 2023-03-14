const express = require("express");
const router = express.Router();

/* import controllers - her skal der routes til controllers */
const { signupUser } = require("../controllers/user.controller");
const { signinUser } = require("../controllers/user.controller");
const { signoutUser } = require("../controllers/user.controller");

/* get post put/patch delete */
router.post("/signup", signupUser);
router.post("/signin", signinUser);
router.get("/signout", signoutUser);

module.exports = router;
