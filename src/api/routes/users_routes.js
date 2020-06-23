const { getUsers, addUser } = require('../../db_service/users_db');
const { getToken } = require('../middlewares/jwt');

function signup(req, res) {
  const { name, email, password } = req.body;
  const newUserId = addUser('consumer', name, email, password);
  res.status(200).json({
    message: 'user added',
    userId: newUserId,
  });
}

function login(req, res) {
  const { email, password } = req.body;
  const user = getUsers().find(user => user.email === email);

  if (!user) {
    res.status(401).json({
      message: 'This email is not registered. Please sign up if you are a new user.',
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

function logout() { }

module.exports = {
  signup,
  login,
  logout,
};