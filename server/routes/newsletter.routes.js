const express = require("express");
const router = express.Router();

//Hvis man ikke bruger multer(billeder) skal nedestående bruges
const formData = require("express-form-data");
router.use(formData.parse());

const requireAuth = require("../middleware/authRequired");

/* import controllers - her skal der routes til controllers */
const {
  getAllSubscribers,
  postSubscriber,
  deleteSubscriberId,
  deleteSubscriberEmail,
} = require("../controllers/newsletter.controller");

/* get post put/patch delete - :id er parameter */
router.get("/", getAllSubscribers);

/* Admin - her skal du være login for at tilgå - derfor requireAuth */
router.post("/", postSubscriber);
router.delete("/:id", requireAuth, deleteSubscriberId);
router.delete("/email/:email", requireAuth, deleteSubscriberEmail);

module.exports = router;
