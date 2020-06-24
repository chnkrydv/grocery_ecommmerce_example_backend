const { JWT_SECRET } = require('../../constants/config');
const jwt = require('jsonwebtoken');

function getToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '30m' })
}

function ifAuthenticated(req, res, next) {
  const token = req.headers['x-access-token'];

  if (!token) res.status(401).json({ message: 'Not authorised. Login or signup first.' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) res.status(401).json({ message: 'Not authorised. Login or signup first.' });
    else {
      req.userId = decoded.userId;
      next();
    }
  });
}

module.exports = {
  getToken,
  ifAuthenticated,
};

