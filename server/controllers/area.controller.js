const Area = require("../models/area.model");
const Farmshop = require("../models/farmshop.model");

/* hent alle */
module.exports.getAllAreas = async (req, res) => {
  console.log("GET - all areas");

  try {
    const area = await Area.find();
    return res.status(200).json({ area });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

module.exports.getArea = async (req, res) => {
  console.log("GET - area by id");

  try {
    const area = await Area.findById(req.params.id);
    if (area == null) {
      return res.status(404).json({ message: "no area found" });
    }
    return res.status(200).json({ area });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Post -  Opret et product */
module.exports.postArea = async (req, res) => {
  console.log(req.body);

  try {
    const area = new Area(req.body);

    await area.save();
    res.status(201).json({ message: "area er oprettet", area });
  } catch (error) {
    res.status(400).json({ message: "Der er sket en fejl" });
  }
};

/* Delete - Slet en kategori */
module.exports.deleteArea = async (req, res) => {
  console.log("DELETE - area by id");

  try {
    const hasShop = await Farmshop.exists({ area: req.params.id });

    if (hasShop) {
      return res.status(400).json({
        message:
          "the area can not be deleted, before shops with the area has been reasigned to a new area or deleted.",
      });
    }

    const area = await Area.findByIdAndDelete(req.params.id);

    if (area == null) {
      return res.status(404).json({ message: "no area found" });
    }
    return res.status(200).json({ message: "area has been deleted" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Put/Patch - ret i et product */
module.exports.putArea = async (req, res) => {
  console.log("PUT - area by id");

  try {
    const area = await Area.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (area == null) {
      return res.status(404).json({ message: "no area match the id" });
    }
    return res.status(200).json({ message: "area has been updated", area });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};
