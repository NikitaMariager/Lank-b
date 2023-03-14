const express = require("express");
const app = express();
const cors = require("cors");

/* Routes - require */
const userRoute = require("./routes/user.routes");
const farmshopRoute = require("./routes/farmshop.routes");
const arearRoute = require("./routes/area.routes");
const eventRoute = require("./routes/events.routes");
const contactRoute = require("./routes/contact.routes");
const siteContactInfoRoute = require("./routes/siteContactInfo.routes");
const articleRoute = require("./routes/article.routes");
const newsletterRoute = require("./routes/newsletter.routes");

/* ENV */
require("dotenv").config();

/* APP - Settings */
app.use(cors({ credentials: true, origin: true }));
app.use(express.json()); //send body i json-format
app.use(express.urlencoded({ extended: true })); //send body som url-encoded data
app.use(express.static("public"));

/* Server "root" GET */
app.get("/", async (req, res) => {
  res.status(200).json({ message: "velkommen til serveren" });
});

/* SESSION */
const session = require("express-session");
const MongoStore = require("connect-mongo");

const expire = 1000 * 60 * 60 * 24 * 2; //2 dage

app.use(
  session({
    name: process.env.SESSION_NAME,
    resave: true,
    rolling: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: expire, sameSite: "strict", httpOnly: true },
  })
);

/* Routing */
app.use("/api/user", userRoute);
app.use("/api/farmshops", farmshopRoute);
app.use("/api/area", arearRoute);
app.use("/api/events", eventRoute);
app.use("/api/contact", contactRoute);
app.use("/api/contactinfo", siteContactInfoRoute);
app.use("/api/article", articleRoute);
app.use("/api/newsletter", newsletterRoute);

/* mongo DB */
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("hul igennem til mongo db");

    app.listen(process.env.PORT, () => {
      console.log("lytter løs på  port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
