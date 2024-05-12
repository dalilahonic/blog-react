import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  body: { type: String, required: true },
  tags: [String],
  isFromExternalSource: Boolean,
  sourceBlogName: String,
  linkToArticle: String,
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
