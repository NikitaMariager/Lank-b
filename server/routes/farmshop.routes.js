const express = require("express");
const router = express.Router();

/* Håndtere billeder */
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images");
    },
    filename: function (req, file, cb) {
      //cb(null, Date.now() + '-' + file.originalname)
      cb(null, file.originalname);
    },
  }),

  //fil størelse
  limits: { fileSize: 100000 }, //bytes

  //fil format
  fileFilter: function (req, file, cb) {
    let filename = file.originalname.toLocaleLowerCase(); //filnavnet med små bogstaver, så der ikke er forskel på .JPG og .jpg
    if (
      filename.endsWith(".jpg") ||
      filename.endsWith(".gif") ||
      filename.endsWith(".png") ||
      filename.endsWith(".webp") ||
      filename.endsWith(".jpeg")
    ) {
      return cb(null, true);
    }
    //hvis forkert filformat
    cb("Error: kun jpg, gif, png, webp, og jpeg er tilladt");
  },
});

const requireAuth = require("../middleware/authRequired");

/* import controllers - her skal der routes til controllers */
const {
  getAllshops,
  getAllshopsByArea,
  getSearchShops,
  getShop,
  postShop,
  deleteShops,
  putShop,
} = require("../controllers/farmshops.controller");

/* get post put/patch delete - :id er parameter */
router.get("/", getAllshops);
router.get("/:id", getShop);
router.get("/area/:areaId", getAllshopsByArea);
router.get("/search/:searchkey", getSearchShops);

/* Admin - her skal du være login for at tilgå - derfor requireAuth */
router.post("/", requireAuth, upload.single("shopimage"), postShop);
router.delete("/:id", requireAuth, deleteShops);
router.put("/:id", requireAuth, upload.single("shopimage"), putShop);

module.exports = router;
