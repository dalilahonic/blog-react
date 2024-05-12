import express from 'express';
import {
  getArticle,
  getArticles,
} from './controllers/index.js';

const router = express.Router();

router.get('/articles/:articleTitle', getArticle);

router.get('/articles', getArticles);

export default router;
