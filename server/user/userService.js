var exports = module.exports = {};

var users = [{"email":"mike.williams@atos.net"}, {"email":"email@test.com"}];

// Return Users
exports.getUsers = function(onSuccess, onFailure) {
  console.log('userService.getUsers()');

  onSuccess(users);
};

// Add a user
exports.addUser = function(user, onSuccess, onFailure) {
  console.log('userService.addUser()');
  users.push(user);
  onSuccess(user);
};
