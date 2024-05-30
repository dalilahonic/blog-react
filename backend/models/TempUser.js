import mongoose from 'mongoose';

const tempUserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 200,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 100,
  },
  verificationCode: String,
  tokenExpiry: Date,
});

const TempUser = mongoose.model('TempUser', tempUserSchema);

export default TempUser;
