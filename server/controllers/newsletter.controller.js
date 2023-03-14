const Subscriber = require("../models/newsletter.model");
/* const { subscribe } = require("../routes/hilsen.routes"); */

/* hent alle */
module.exports.getAllSubscribers = async (req, res) => {
  console.log("GET - subscribers");

  try {
    const subscribe = await Subscriber.find();
    return res.status(200).json({ subscribe: subscribe });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Post -  Opret new subscriber */
module.exports.postSubscriber = async (req, res) => {
  console.log(req.body);

  try {
    const subscribe = new Subscriber(req.body);

    await subscribe.save();
    res
      .status(201)
      .json({ message: "subscriber er oprettet", subscribe: subscribe });
  } catch (error) {
    res.status(400).json({ message: "Der er sket en fejl" });
  }
};

/* Delete - subscriber by id  */
module.exports.deleteSubscriberId = async (req, res) => {
  console.log("DELETE - subscriber by id");

  try {
    const subscribe = await Subscriber.findByIdAndDelete(req.params.id);
    if (subscribe == null) {
      return res.status(404).json({ message: "no subscriber found" });
    }
    return res.status(200).json({ message: "subscriber has been deleted" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Delete - subscriber by email  */
module.exports.deleteSubscriberEmail = async (req, res) => {
  console.log("DELETE - subscriber by email");

  try {
    const subscribe = await Subscriber.findOneAndDelete({
      email: req.params.email,
    });
    if (subscribe == null) {
      return res.status(404).json({ message: "no subscriber found" });
    }
    return res.status(200).json({ message: "subscriber has been deleted" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};
