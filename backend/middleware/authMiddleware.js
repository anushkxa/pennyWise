const jwt = require("jsonwebtoken");

module.exports.requireAuth = (req, res, next) => {
  try {
    const tokenFromHeader = (() => {
      const authHeader = req.headers.authorization;
      if (!authHeader) return null;
      if (!authHeader.startsWith("Bearer ")) return null;
      return authHeader.slice("Bearer ".length);
    })();

    const token = tokenFromHeader || req.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!process.env.TOKEN_KEY) {
      return res.status(500).json({ message: "Server auth misconfigured" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.userId = decoded?.id;

    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

