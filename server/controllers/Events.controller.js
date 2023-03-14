const Event = require("../models/events.model");

/* hent alle */
module.exports.getAllevents = async (req, res) => {
  console.log("GET - all events");

  try {
    const events = await Event.find();
    return res.status(200).json({ events });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

module.exports.getAllEventsByShop = async (req, res) => {
  console.log("GET - all events by shop");

  try {
    const events = await Event.find({
      farmshop: req.params.farmshopId,
    }).populate("farmshop");
    return res.status(200).json({ events });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Sorter efter dato  */
module.exports.getupcominevents = async (req, res) => {
  console.log("GET - all events");

  try {
    const events = await Event.find().sort({ datestart: 1 });
    return res.status(200).json({ events });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Get product udfra id - Hent et udvalgt product */
module.exports.getEvent = async (req, res) => {
  console.log("GET - event by id");

  try {
    const event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: "no event found" });
    }
    return res.status(200).json({ event });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Post -  Opret et product */
module.exports.postEvent = async (req, res) => {
  console.log(req.body);

  try {
    const event = new Event(req.body);
    event.eventimage = req.file.filename;
    await event.save();
    res.status(201).json({ message: "event has been created", event });
  } catch (error) {
    res.status(400).json({ message: "Der er sket en fejl" });
  }
};

/* Delete - Slet et product */
module.exports.deleteEvent = async (req, res) => {
  console.log("DELETE - event by id");

  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: "no event found" });
    }
    return res.status(200).json({ message: "event has been deleted" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Put/Patch - ret i et product */
module.exports.putEvent = async (req, res) => {
  console.log("PUT - event by id");

  try {
    //OBS på img - måske er der uploadet et nyt, måske er der ikke ( men kun tekst rettelser)
    if (req.file) {
      //brugeren vil have et nyt product billede + evt. andre rettelser
      req.body.eventimage = req.file.filename;
    }

    const event = await Event.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (event == null) {
      return res.status(404).json({ message: "no event match the id" });
    }
    return res.status(200).json({ message: "Event er rettet", event });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};
