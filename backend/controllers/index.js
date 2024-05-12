import Article from '../models/Article.js';
import Speaking from '../models/Speaking.js';

export const getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.status(200).json({ articles });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getArticle = async (req, res, next) => {
  try {
    const articleTitle = req.params.articleTitle.replace(
      /-/g,
      ' '
    );
    const article = await Article.findOne({
      title: {
        $regex: new RegExp(articleTitle, 'i'),
      },
    });

    res.status(200).json({ article });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLimitedArticles = async (
  req,
  res,
  next
) => {
  try {
    const articles = await Article.find().limit(3);

    res.status(200).json({ articles });
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getSpeeches = async (req, res, next) => {
  try {
    const speeches = await Speaking.find();

    res.status(200).json({ speeches });
  } catch (error) {
    console.log(error);
  }
};

export const getSpeech = async (req, res, next) => {
  try {
    const speechTitle = req.params.speechTitle.replace(
      /-/g,
      ' '
    );

    const speech = await Speaking.findOne({
      title: {
        $regex: new RegExp(speechTitle, 'i'),
      },
    });

    res.status(200).json({ speech, omg: 'da' });
  } catch (error) {
    console.log(error);
  }
};

export const postSignup = async (req, res, next) => {
  const { username, email, password, confirmPassword } =
    req.body;
};
