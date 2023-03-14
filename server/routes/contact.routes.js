const express = require("express");
const router = express.Router();

//Hvis man ikke bruger multer(billeder) skal nedestående bruges
const formData = require("express-form-data");
router.use(formData.parse());

const requireAuth = require("../middleware/authRequired");

/* import controllers - her skal der routes til controllers */
const {
  getAllcontact,
  getContact,
  postContact,
  deletecontact,
} = require("../controllers/contact.controller");

router.post("/", postContact);

/* Admin - her skal du være login for at tilgå - derfor requireAuth */
router.get("/", requireAuth, getAllcontact);
router.get("/:id", requireAuth, getContact);
router.delete("/:id", requireAuth, deletecontact);

module.exports = router;
