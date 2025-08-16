const jwt = require("jsonwebtoken");

// Middleware to verify any valid token
const verifyToken = (req, res, next) => {
  const token = req.header("AUTH-TOKEN");

  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    // Attach user info to request
    req.user = decoded;
    // Proceed to the next middleware if any or route handler
    next();
  } catch (ex) {
    return res.status(401).json({ error: "Invalid token." });
  }
};

module.exports = verifyToken;
