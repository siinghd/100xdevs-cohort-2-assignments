const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27107/testweek3db');

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username is required'],
  },
  password: {
    type: String,
    required: [true, 'passwor is required'],
  },
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username is required'],
  },
  password: {
    type: String,
    required: [true, 'passwor is required'],
  },
});

const CourseSchema = new mongoose.Schema({
    
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
