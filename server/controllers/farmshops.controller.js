const Farmshop = require("../models/farmshop.model");

/* hent alle */
module.exports.getAllshops = async (req, res) => {
  console.log("GET - all shops");

  try {
    const shop = await Farmshop.find().populate("area");
    return res.status(200).json({ shop });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

module.exports.getAllshopsByArea = async (req, res) => {
  console.log("GET - all shops by area");

  try {
    const shop = await Farmshop.find({
      area: req.params.areaId,
    }).populate("area");
    return res.status(200).json({ shop });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Søg i producter */
module.exports.getSearchShops = async (req, res) => {
  console.log("GET - products by searchkey");

  try {
    const shop = await Farmshop.find({
      $or: [
        {
          name: { $regex: req.params.searchkey, $options: "i" },
        },
      ],
    });
    if (shop == null) {
      return res.status(404).json({ message: "no shops found" });
    }
    return res.status(200).json({ shop });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Get product udfra id - Hent et udvalgt product */
module.exports.getShop = async (req, res) => {
  console.log("GET - shop by id");

  try {
    const shop = await Farmshop.findById(req.params.id);
    if (shop == null) {
      return res.status(404).json({ message: "no shop found" });
    }
    return res.status(200).json({ shop });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Post -  Opret et product */
module.exports.postShop = async (req, res) => {
  console.log(req.body);

  try {
    const shop = new Farmshop(req.body);
    shop.shopimage = req.file.filename;
    await shop.save();
    res.status(201).json({ message: "shop has been created", shop });
  } catch (error) {
    res.status(400).json({ message: "Der er sket en fejl" });
  }
};

/* Delete - Slet et product */
module.exports.deleteShops = async (req, res) => {
  console.log("DELETE - shop by id");

  try {
    const shop = await Farmshop.findByIdAndDelete(req.params.id);
    if (shop == null) {
      return res.status(404).json({ message: "no shop found" });
    }
    return res.status(200).json({ message: "shop has been deleted" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Put/Patch - ret i et product */
module.exports.putShop = async (req, res) => {
  console.log("PUT - product by id");

  try {
    //OBS på img - måske er der uploadet et nyt, måske er der ikke ( men kun tekst rettelser)
    if (req.file) {
      //brugeren vil have et nyt product billede + evt. andre rettelser
      req.body.shopimage = req.file.filename;
    }

    const shop = await Farmshop.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (shop == null) {
      return res.status(404).json({ message: "no shop match the id" });
    }
    return res.status(200).json({ message: "produktet er rettet", shop });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};
