import { validationResult } from 'express-validator';
import Article from '../models/Article.js';
import Speaking from '../models/Speaking.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import TempUser from '../models/TempUser.js';

dotenv.config();

export const getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.status(200).json({ articles });
  } catch (error) {
    // next(error);
    // res.status(500).json({ error: error.message });
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
    // next(error);
    // res.status(500).json({ error: error.message });
  }
};

export const getSpeeches = async (req, res, next) => {
  try {
    const speeches = await Speaking.find();

    res.status(200).json({ speeches });
  } catch (error) {
    // next(error);
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
    // next(error);
  }
};

export const getTagedArticles = async (req, res, next) => {
  try {
    const { tag } = req.params;

    const articles = await Article.find({ tags: tag });
    console.log(articles);

    res.status(200).json({ articles });
  } catch (err) {
    next(err);
  }
};

export const postSignup = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const newError = new Error();
      newError.statusCode = 400;
      newError.errors = errors.array();
      throw newError;
    }

    const { username, email, password } = req.body;

    const doesUsernameExist = await User.findOne({
      username,
    });

    if (doesUsernameExist) {
      const newError = new Error();
      newError.statusCode = 409;
      newError.errors = [
        {
          msg: 'An account with this username already exists. Please sign in or use a different email.',
        },
      ];
      throw newError;
    }

    const doesAccountExist = await User.findOne({ email });

    if (doesAccountExist) {
      const newError = new Error();
      newError.statusCode = 409;
      newError.errors = [
        {
          msg: 'An account with this email already exists. Please sign in or use a different email.',
        },
      ];
      throw newError;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const verificationCode = crypto
      .randomBytes(3)
      .toString('hex');

    const newTempUser = new TempUser({
      username,
      email,
      password: hashedPassword,
      tokenExpiry: Date.now() + 3600000,
      verificationCode,
    });

    await newTempUser.save();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'dalilahonic1@gmail.com',
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'dalilahonic1@gmail.com',
      to: email,
      subject: 'Verify your email address',
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="text-align: center; color: #4CAF50;">Verify your email address</h2>
          <p>To finish setting up your account, we just need to make sure this email address is yours.</p>

          <p>To verify your email address use this security code: <strong>${verificationCode}</strong> </p>
          <p>If you didn't request this code you can safely ignore this email. Someone else might have typed your email address by mistake </p>
          <p>Thank you.</p>
        </div>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message:
        'Enter a code that has been sent to your email',
    });
  } catch (error) {
    next(error);
  }
};

export const postVerifyEmail = async (req, res, next) => {
  try {
    const { verificationCode } = req.body;

    const userData = await TempUser.findOne({
      verificationCode,
    });

    if (!userData) {
      const newError = new Error();
      newError.statusCode = 404;
      newError.errors = [
        {
          msg: 'Invalid verification code',
        },
      ];
      throw newError;
    }

    if (Date.now() > userData.tokenExpiry) {
      const newError = new Error();
      newError.statusCode = 400;
      newError.errors = [
        {
          msg: 'Code has expired.',
        },
      ];
      throw newError;
    }

    const { username, email, password } = userData;

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    await TempUser.deleteOne({ verificationCode });

    res.status(201).json({ username });
  } catch (error) {
    next(error);
  }
};

export const postSignin = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const validationError = new Error();
    validationError.statusCode = 400;
    validationError.errors = errors;
    throw validationError;
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    const newError = new Error('Wrong email or password');
    newError.statusCode = 401;
    throw newError;
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    const newError = new Error('Wrong email or password');
    newError.statusCode = 401;
    throw newError;
  }

  res.status(200).json({ message: 'Signin successful' });
};
