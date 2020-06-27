const { TOKEN_SECRET } = require('../../constants/config');
const jwt = require('jsonwebtoken');

function createNewToken(userId) {
  console.log('JWT_SECRET: ' + TOKEN_SECRET);
  return jwt.sign({ userId }, TOKEN_SECRET, { expiresIn: '30m' })
}

function ifAuthenticated(req, res, next) {
  const token = req.headers['x-access-token'];
  console.log(token);

  if (!token) {
    res.status(401).json({ message: 'Authorization token missing.' });
    next();
    return;
  } else {
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      if (err) res.status(401).json({ message: 'Not authorised. Login or signup first.' });
      else {
        req.userId = decoded.userId;
        next();
      }
    });
  }
}

module.exports = {
  createNewToken,
  ifAuthenticated,
};

