const { getUsers, addUser, userAlreadyExists, updateAddress } = require('../../db_service/users_db');
const { createNewToken } = require('../middlewares/jwt');

function signup(req, res) {
  const { name, username, password } = req.body;
  const usernameExists = userAlreadyExists(username);

  if (usernameExists) res.status(401).json({
    message: `User with username: '${username}' already exists`
  });
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
  console.log(req.body);
  const usersList = getUsers();
  const user = usersList.find(user => user.username === username);

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

  const token = createNewToken(user.id);
  if (!token) {
    res.status(401).json({});
  } else {
    res.status(200).json({token, user});
  }
}

function sendUserProfile(req, res){
  const usersList = getUsers();
  const user = usersList.find(user => user.id === req.userId);
  console.log(user);
  res.status(200).json(user);
}

function saveOrUpdateAddress(req, res) {
  const userId = req.userId;
  const { address } = req.body;
  console.log(address);
  updateAddress(userId, address);
  res.status(200).json({
    message: 'Address updated.'
  });
}

module.exports = {
  login,
  signup,
  sendUserProfile,
  saveOrUpdateAddress,
};