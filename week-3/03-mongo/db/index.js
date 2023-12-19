const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testdebweek3');

// Define schemas
const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
    },
    password: {
      type: String,
      required: [true, 'passwor is required'],
    },
  },
  {
    timestamps: true,
  }
);

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
    },
    password: {
      type: String,
      required: [true, 'passwor is required'],
    },
    purchasedCourses: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const CourseSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: [true, 'id is required'],
    },
    title: {
      type: String,
      required: [true, 'course title is required '],
    },
    price: {
      type: Number,
      required: [true, 'Course price is required '],
    },
    description: {
      type: String,
    },
    published: {
      type: Boolean,
      default: true,
    },
    imageLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

AdminSchema.index({
  createdAt: -1,
});
UserSchema.index({
  createdAt: -1,
});
CourseSchema.index({
  createdAt: -1,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
