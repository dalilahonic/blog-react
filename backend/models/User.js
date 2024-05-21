import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
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
});

const User = mongoose.model('User', userSchema);

export default User;
