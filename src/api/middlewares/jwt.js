const { JWT_SECRET } = require('../../constants/config');
const jwt = require('jsonwebtoken');

function getToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '30m' })
}

function verifyToken(token, errorCallback, successCallback) {
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) errorCallback();
    else successCallback(decoded);
  });
}

module.exports = {
  getToken,
  verifyToken,
};

