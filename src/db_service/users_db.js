const usersList = [
  getUserMap('admin', 0, 'Harnit Bakshi', 'harnit', '0000'),
  getUserMap('admin', 1, 'Chandan Kumar', 'chandan', '1111'),
];

function getUserMap(type, id, name, username, password) {
  return {
    type, id, name, username, password
  };
}

function getUsers() {
  return usersList;
}

function addUser(type, name, username, password) {
  const newUserId = usersList.length;
  const newUser = getUserMap(type, newUserId, name, username, password);
  usersList.push(newUser);
  return newUserId;
}

function userAlreadyExists(username){
  return usersList.some(u => u.username === username);
}

module.exports = {
  getUsers,
  addUser,
  userAlreadyExists,
};