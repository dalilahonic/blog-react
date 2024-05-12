import mongoose from 'mongoose';

const speakingSchema = mongoose.Schema({
  title: String,
  description: String,
  body: String,
  type: String,
});

const Speaking = mongoose.model('Speaking', speakingSchema);

export default Speaking;
