import express from 'express';
import {
  getArticle,
  getArticles,
  getLimitedArticles,
  getSpeech,
  getSpeeches,
  postSignIn,
  postSignUp,
} from './controllers/index.js';
import { body } from 'express-validator';

const router = express.Router();

router.get('/articles/:articleTitle', getArticle);

router.get('/articles', getArticles);

router.get('/limitedArticles', getLimitedArticles);

router.get('/speeches/:speechTitle', getSpeech);

router.get('/speeches', getSpeeches);

router.post(
  '/signup',
  // [
  //   body('email')
  //     .notEmpty()
  //     .withMessage(
  //       'Please fill in all the required fields.'
  //     )
  //     .isEmail()
  //     .withMessage('Please enter a valid email address.'),
  //   body('password')
  //     .isLength({ min: 8 })
  //     .withMessage(
  //       'Password must be at least 8 characters long'
  //     ),
  //   body('confirmPassword')
  //     .custom((value, { req }) => {
  //       if (value != req.password) {
  //         return false;
  //       }
  //       return true;
  //     })
  //     .withMessage(`Passwords don't match`),
  // ],
  postSignUp
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
  postSignIn,
]);

export default router;
