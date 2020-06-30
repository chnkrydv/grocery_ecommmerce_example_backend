const AUTH_TOKEN_MISSING_OR_INVALID_MESSAGE = "Authorization token missing or invalid. You might need to login or register.";

const BAD_SIGNUP_REQ_MESSAGE = "'name', 'username' or 'password' is missing in request";
const BAD_LOGIN_REQ_MESSAGE = "'username' or 'password' missing in request";
const INVALID_USERNAME_MESSAGE = 'This username is not registered. Please sign up if you are a new user.';
const INVALID_PASSWORD_MESSAGE = 'Access denied. Incorrect password.';
const USER_ADDED_MESSAGE = 'User added successfully.';
const BAD_ADDRESS_REQ_MESSAGE = 'Address is missing or not in correct format.';
const ADDRESS_UPDATE_MESSAGE = 'Address updated successfully.';
const exisitingUserMessage = (username) => `User with username: '${username}' already exists`;

const NO_REQ_IDS_MESSAGE = 'Request does not contains list of requested product ids';
const categoryNotFoundMessage = (category) => `Requested category: ${category} does not exist.` ;

const BAD_CREATE_ORDER_REQ_MESSAGE = "'itemsList' in request is either missing or not in correct format";
const SOME_ITEMS_LIMITED_MESSAGE = 'Some of the items are out of stock or not in requested numbers';
const ORDER_PLACED_MESSAGE = 'order placed';


module.exports = {
  AUTH_TOKEN_MISSING_OR_INVALID_MESSAGE,

  BAD_SIGNUP_REQ_MESSAGE,
  BAD_LOGIN_REQ_MESSAGE,
  INVALID_USERNAME_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
  USER_ADDED_MESSAGE,
  BAD_ADDRESS_REQ_MESSAGE,
  ADDRESS_UPDATE_MESSAGE,
  exisitingUserMessage,

  NO_REQ_IDS_MESSAGE,
  categoryNotFoundMessage,

  BAD_CREATE_ORDER_REQ_MESSAGE,
  SOME_ITEMS_LIMITED_MESSAGE,
  ORDER_PLACED_MESSAGE,
};