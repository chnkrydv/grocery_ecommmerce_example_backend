const { getUsers, addUser, userAlreadyExists } = require('../../db_service/users_db');
const { getToken } = require('../middlewares/jwt');

function signup(req, res) {
  const { name, username, password } = req.body;
  const usernameExists = userAlreadyExists(username);

  if (usernameExists) res.status(401).json({ message: `User with username: "${username}" already exists` });
  else {
    const newUserId = addUser('consumer', name, username, password);
    res.status(200).json({
      message: 'user added',
      userId: newUserId,
    });
  }
}

function login(req, res) {
  const { username, password } = req.body;
  const user = getUsers().find(user => user.username === username);

  if (!user) {
    res.status(401).json({
      message: 'This username is not registered. Please sign up if you are a new user.',
    });
    return;
  }

  if (user.password !== password) {
    res.status(401).json({
      message: 'Access denied. Incorrect password.'
    });
    return;
  }

  const token = getToken(user.id);
  res.status(200).json(token);
}

module.exports = {
  signup,
  login,
};