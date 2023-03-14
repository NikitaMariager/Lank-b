const express = require("express");
const router = express.Router();

//Hvis man ikke bruger multer(billeder) skal nedestående bruges
const formData = require("express-form-data");
router.use(formData.parse());

const requireAuth = require("../middleware/authRequired");

/* import controllers - her skal der routes til controllers */
const {
  getAllsiteContactInfo,
  putSiteContact,
} = require("../controllers/siteContactInfo.controller");

/* Admin - her skal du være login for at tilgå - derfor requireAuth */
router.get("/", getAllsiteContactInfo);
router.put("/:id", putSiteContact);

module.exports = router;
