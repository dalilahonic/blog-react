import express from 'express';
import {
  getArticle,
  getArticles,
  getLimitedArticles,
  getSpeech,
  getSpeeches,
} from './controllers/index.js';
import { body } from 'express-validator';

const router = express.Router();

router.get('/articles/:articleTitle', getArticle);

router.get('/articles', getArticles);

router.get('/limitedArticles', getLimitedArticles);

router.get('/speeches/:speechTitle', getSpeech);

router.get('/speeches', getSpeeches);

router.post('/signup', [
  body('email')
    .notEmpty()
    .withMessage('Please fill in all the required fields.')
    .isEmail()
    .withMessage('Please enter a valid email address.'),
  body('password')
    .length({ min: 8 })
    .withMesage(
      'Password must be at least 8 characters long'
    ),
]);

export default router;
