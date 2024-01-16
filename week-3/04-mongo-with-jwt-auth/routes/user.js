const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');
const jwt = require('jsonwebtoken');
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

app.post('/signin', async (req, res) => {
  const user = await Admin.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).json({
      error: 'no user found',
    });
  }
  const token = jwt.sign(req.body, SECRET);
  return res.status(200).json({
    token,
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
    { _id: req.user._id },
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

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const userWithPopulatedCourses = await User.findById(req.user._id)
    .populate('purchasedCourses')
    .lean();
  return res.status(200).json({
    purchasedCourses: userWithPopulatedCourses.purchasedCourses,
  });
});

module.exports = router