const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const adminUser = await Admin.create({
    username,
    password,
  });
  return res.status(200).json({
    message: 'Admin created successfully',
  });
});

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
  // todo maybe add middleware save on db to inc the id
  const lastCourse = await Course.findOne().sort({
    createdAt: -1,
  });
  const id = !lastCourse ? 1 : lastCourse.id + 1;
  const course = await Course.create({ id, ...req.body });

  return res.status(200).json({
    message: 'Course created successfully',
    courseId: id,
  });
});

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find().sort({
    createdAt: -1,
  });
  return res.status(200).json({
    courses,
  });
});

module.exports = router;
