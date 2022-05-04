require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, user) {
      if (err) return reject(err);
      return resolve(user);
    });
  });
};

module.exports = async (req, res, next) => {
  const bearer_Token = req?.headers?.authenticate;

  if (!bearer_Token) {
    return res.status(400).json({
      status: "Error",
      message: "send the bearer Token",
    });
  }

  if (!bearer_Token.startsWith("Bearer ")) {
    return res.status(400).json({
      status: "Error",
      message: "send correct bearer token",
    });
  }

  const token = bearer_Token.split(" ")[1];

  try {
    // First verify the token
    const user = await verifyToken(token);
    req.user = user.user;
    return next();
  } catch (err) {
    return res.status(400).send("ERROR", err);
  }
};
