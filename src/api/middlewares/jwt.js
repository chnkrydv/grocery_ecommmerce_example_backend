const { TOKEN_SECRET } = require('../../constants/config');
const jwt = require('jsonwebtoken');
const { AUTH_TOKEN_MISSING_OR_INVALID_MESSAGE } = require('../../constants/messages');

function createNewToken(userId) {
  return jwt.sign({ userId }, TOKEN_SECRET, { expiresIn: '30m' })
}

function ifAuthenticated(req, res, next) {
  const token = req.headers['x-access-token'];

  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err)
      res.status(401).json({ message:  AUTH_TOKEN_MISSING_OR_INVALID_MESSAGE});
    else {
      req.body.userId = decoded.userId;
      next();
    }
  });
}

module.exports = {
  createNewToken,
  ifAuthenticated,
};

