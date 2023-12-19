const { User } = require('../db');

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.header('username');
  const password = req.header('password');
  const user = await User.findOne({
    username,
    password,
  });
  if (!user) {
    return res.status(401).send('UNAUTHORIZED');
  }
  req.user = user;
  next();
}

module.exports = userMiddleware;
