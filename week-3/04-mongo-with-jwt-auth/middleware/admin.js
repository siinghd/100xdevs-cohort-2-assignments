// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    const decode = jwt.verify(token, SECRET);
    if (decode) {
      const user = await Admin.findOne(decode.username);
      if (!user) {
        return res.status(401).send('UNAUTHORIZED');
      }
      req.user = user;
      next();
    } else {
      return res.status(401).send('UNAUTHORIZED');
    }
  } catch (e) {
    return res.status(401).send('UNAUTHORIZED');
  }
}

module.exports = adminMiddleware;
