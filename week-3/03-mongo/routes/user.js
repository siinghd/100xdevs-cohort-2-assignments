const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');
const { Course, User } = require('../db');

// User Routes
router.post('/signup', async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  const adminUser = await User.create({
    username,
    password,
  });
  return res.status(200).json({
    message: 'User created successfully',
  });
});

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find().sort({
    createdAt: -1,
  });
  return res.status(200).json({
    courses,
  });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const course = await Course.findOne({ id: req.params.courseId });
  const updatedUser = await User.findOneAndUpdate(
    { _id: course._id },
    {
      $push: {
        purchasedCourses: course,
      },
    },
    {
      new: true,
    }
  );
  return res.status(200).json({
    message: 'Course purchased successfully',
  });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
  return res.status(200).json({
    purchasedCourses: req.user.purchasedCourses,
  });
});
module.exports = router;
