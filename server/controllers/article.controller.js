const Article = require("../models/article.model");

/* hent alle */
module.exports.getAllArticles = async (req, res) => {
  console.log("GET - all articles");

  try {
    const article = await Article.find();
    return res.status(200).json({ article });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Sorter efter dato  */
module.exports.getArticleByDate = async (req, res) => {
  console.log("GET - get newset article");

  try {
    const article = await Article.find().sort({ created: 1 });
    return res.status(200).json({ article });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Get article udfra id - Hent et udvalgt product */
module.exports.getArticleById = async (req, res) => {
  console.log("GET - article by id");

  try {
    const article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: "no article found" });
    }
    return res.status(200).json({ article });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Post -  Opret en article */
module.exports.postArticle = async (req, res) => {
  console.log(req.body);

  try {
    const article = new Article(req.body);
    article.articleimage = req.file.filename;
    await article.save();
    res.status(201).json({ message: "event has been created", article });
  } catch (error) {
    res.status(400).json({ message: "Der er sket en fejl" });
  }
};

/* Delete - Slet en article */
module.exports.deleteArticle = async (req, res) => {
  console.log("DELETE - article by id");

  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: "no article found" });
    }
    return res.status(200).json({ message: "article has been deleted" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};

/* Put/Patch - ret i en article */
module.exports.putArticle = async (req, res) => {
  console.log("PUT - article by id");

  try {
    //OBS på img - måske er der uploadet et nyt, måske er der ikke ( men kun tekst rettelser)
    if (req.file) {
      //brugeren vil have et nyt product billede + evt. andre rettelser
      req.body.articleimage = req.file.filename;
    }

    const article = await Article.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (article == null) {
      return res.status(404).json({ message: "no article match the id" });
    }
    return res.status(200).json({ message: "Article er rettet", article });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Der er sket en fejl", error: error.message });
  }
};
