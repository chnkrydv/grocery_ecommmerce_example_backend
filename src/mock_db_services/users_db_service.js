let usersList = [
  u(0, 'Harnit Bakshi', 'harnit', '0000'),
  u(1, 'Chandan Kumar', 'chandan', '1111'),
];

function u(id, name, username, password){
  return { id, name, username, password };
}

function getUsers() {
  return usersList;
}

function addUser(name, username, password) {
  const newUserId = usersList.length;
  const newUser = u(newUserId, name, username, password);
  usersList.push(newUser);
  return newUserId;
}

function userAlreadyExists(username) {
  return usersList.some(u => u.username === username);
}

function updateAddress(userId, address) {
  const newUsersList = usersList.map(user => {
    if (user.id === userId) user.address = address;
    return user
  });
  usersList = [...newUsersList];
}

module.exports = {
  getUsers,
  addUser,
  userAlreadyExists,
  updateAddress,
};