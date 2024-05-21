import Article from '../models/Article.js';
import Speaking from '../models/Speaking.js';
import User from '../models/User.js';

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

export const postSignUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  console.log(username);

  const user = new User({ username, password, email });

  await user.save();

  // const doesUsernameExist = await User.findOne({
  //   username,
  // });

  // if (doesUsernameExist) {
  //   throw new Error(
  //     'An account with this username already exists. Please sign in or use a different email.'
  //   );
  // }

  // const doesAccountExist = await User.findOne({ email });

  // if (doesAccountExist) {
  //   throw new Error(
  //     'An account with this email already exists. Please sign in or use a different email.'
  //   );
  // }

  // const hashedPassword = await bcrypt.hash(password, 12);

  // const newUser = new User({
  //   email,
  //   username,
  //   password: hashedPassword,
  // });

  // await newUser.save();
  // console.log(username, password, email);

  res.json({ message: 'User created' });
};

export const postSignIn = async (req, res, next) => {
  const { email, password } = req.body;

  console.log(email, password);

  const user = await User.findOne({ email });

  if (user) {
    // copare password
    // set logged in user
    // return user
  } else {
    //error
  }

  res.json({ emm: 'da' });
};
