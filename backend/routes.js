import express from 'express';
import {
  getArticle,
  getArticles,
  getLimitedArticles,
  getSpeech,
  getSpeeches,
  getTagedArticles,
  postSignin,
  postSignup,
  postVerifyEmail,
} from './controllers/index.js';
import { body } from 'express-validator';

const router = express.Router();

router.get('/articles/:articleTitle', getArticle);

router.get('/articles', getArticles);

router.get('/limitedArticles', getLimitedArticles);

router.get('/speeches/:speechTitle', getSpeech);

router.get('/speeches', getSpeeches);

router.get('/tags/:tag', getTagedArticles);

router.post(
  '/signup',
  [
    body('username')
      .trim()
      .notEmpty()
      .withMessage(
        'Please fill in all the required fields.'
      )
      .isLength({ min: 3 })
      .withMessage(
        'Username must be at least 3 characters long'
      ),
    body('email')
      .trim()
      .normalizeEmail()
      .notEmpty()
      .withMessage(
        'Please fill in all the required fields.'
      )
      .isEmail()
      .withMessage('Please enter a valid email address.'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage(
        'Please fill in all the required fields.'
      )
      .isLength({ min: 8 })
      .withMessage(
        'Password must be at least 8 characters long'
      ),
    body('confirmPassword')
      .custom((value, { req }) => {
        if (value != req.password) {
          return true;
        }
        return false;
      })
      .withMessage(`Passwords don't match`),
  ],
  postSignup
);

router.post('/signin', [
  body('email')
    .notEmpty()
    .withMessage('Please fill in all the required fields.')
    .isEmail()
    .withMessage('Please enter a valid email'),
  body('password').notEmpty(
    'Please fill all required fields'
  ),
  postSignin,
]);

router.post(
  '/verify',
  // [
  //   body('verificationCode').notEmpty(
  //     'Please enter a code we sent you'
  //   ),
  // ],
  postVerifyEmail
);

export default router;
