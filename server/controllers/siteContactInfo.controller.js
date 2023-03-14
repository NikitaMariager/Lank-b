const SiteContact = require("../models/siteContactInfo.models");

/* hent alle */
module.exports.getAllsiteContactInfo = async (req, res) => {
  console.log("GET - all ");

  try {
    const contact = await SiteContact.find();
    return res.status(200).json({ contact });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Put/Patch - ret i et product */
module.exports.putSiteContact = async (req, res) => {
  console.log("PUT - contact by id");

  try {
    const contact = await SiteContact.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (contact == null) {
      return res.status(404).json({ message: "no site contact match the id" });
    }
    return res
      .status(200)
      .json({ message: "contact has been updated", contact });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};
