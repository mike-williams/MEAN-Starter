var exports = module.exports = {};
const logger = require('../utils/logger');

var users = [{"email":"mike.williams@atos.net"}, {"email":"email@test.com"}];

// Return Users
exports.getUsers = function(onSuccess, onFailure) {
  logger.debug('userService.getUsers()');

  onSuccess(users);
};

// Add a user
exports.addUser = function(user, onSuccess, onFailure) {
  logger.debug('userService.addUser()');
  users.push(user);
  onSuccess(user);
};
