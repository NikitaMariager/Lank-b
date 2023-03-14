const Contact = require("../models/contact.models");

/* hent alle */
module.exports.getAllcontact = async (req, res) => {
  console.log("GET - all contact mails");

  try {
    const contact = await Contact.find();
    return res.status(200).json({ contact });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

module.exports.getContact = async (req, res) => {
  console.log("GET - contact by id");

  try {
    const contact = await Contact.findById(req.params.id);
    if (contact == null) {
      return res.status(404).json({ message: "no contact msg found" });
    }
    return res.status(200).json({ contact });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Post -  Opret et product */
module.exports.postContact = async (req, res) => {
  console.log(req.body);

  try {
    const contact = new Contact(req.body);

    await contact.save();
    res.status(201).json({ message: "contact er oprettet", contact });
  } catch (error) {
    res.status(400).json({ message: "Der er sket en fejl" });
  }
};

/* Delete - Slet en contact */
module.exports.deletecontact = async (req, res) => {
  console.log("DELETE - contact by id");

  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (contact == null) {
      return res.status(404).json({ message: "no contact found" });
    }
    return res.status(200).json({ message: "contact has been deleted" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Put/Patch - ret i et product */
module.exports.putcontact = async (req, res) => {
  console.log("PUT - contact by id");

  try {
    const contact = await Contact.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (contact == null) {
      return res.status(404).json({ message: "no contact match the id" });
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
