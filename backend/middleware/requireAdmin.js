const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAdmin = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]; // Assuming the token is sent in the Authorization header as 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken._id);

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    req.user = user; // Store user information in request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = requireAdmin;
