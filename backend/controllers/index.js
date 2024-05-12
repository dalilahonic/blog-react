import Article from '../models/Article.js';

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

    res.json({ article });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
