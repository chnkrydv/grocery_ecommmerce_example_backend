const { getUsers, addUser, userAlreadyExists, updateAddress } = require('../../mock_db_services/users_db_service');
const { createNewToken } = require('../middlewares/jwt');
const {
  BAD_SIGNUP_REQ_MESSAGE,
  exisitingUserMessage,
  BAD_LOGIN_REQ_MESSAGE,
  INVALID_USERNAME_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
  USER_ADDED_MESSAGE,
  ADDRESS_UPDATE_MESSAGE,
  BAD_ADDRESS_REQ_MESSAGE,
} = require('../../constants/messages');

function signup(req, res) {
  const { name, username, password } = req.body;
  const usernameExists = userAlreadyExists(username);

  if (!name || !username || !password) {
    res.status(400).json({ message: BAD_SIGNUP_REQ_MESSAGE });
    return;
  }

  if (usernameExists) res.status(401).json({ message: exisitingUserMessage(username) });
  else {
    const newUserId = addUser(name, username, password);
    const token = createNewToken(newUserId);

    res.status(200).json({
      message: USER_ADDED_MESSAGE,
      userId: newUserId,
      token,
    });
  }
}

function login(req, res) {
  const { username, password } = req.body;
  const usersList = getUsers();
  const user = usersList.find(user => user.username === username);

  if (!username || !password) {
    res.status(400).json({ message: BAD_LOGIN_REQ_MESSAGE });
    return;
  }

  if (!user) {
    res.status(401).json({ message: INVALID_USERNAME_MESSAGE });
    return;
  }

  if (user.password !== password) {
    res.status(401).json({
      message: INVALID_PASSWORD_MESSAGE
    });
    return;
  }

  const token = createNewToken(user.id);
  if (!token) {
    res.status(401).json({});
  } else {
    res.status(200).json({ token, user });
  }
}

function sendUserProfile(req, res) {
  const usersList = getUsers();
  const user = usersList.find(user => user.id === req.userId);
  res.status(200).json(user);
}

function saveOrUpdateAddress(req, res) {
  const userId = req.userId;
  const { address } = req.body;

  if (!address) {
    res.status(400).json({ message: BAD_ADDRESS_REQ_MESSAGE });
  } else {
    if (!address.line1 && !address.line2 && !address.line3) {
      res.status(400).json({ message: BAD_ADDRESS_REQ_MESSAGE });
    } else {
      updateAddress(userId, address);
      res.status(200).json({ message: ADDRESS_UPDATE_MESSAGE });
    }
  }
}

module.exports = {
  login,
  signup,
  sendUserProfile,
  saveOrUpdateAddress,
};