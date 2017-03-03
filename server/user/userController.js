const userService = require('./userService');
const logger = require('../utils/logger');

var exports = module.exports = {};

exports.getUsers = function(req, res) {

  logger.debug('userController.getUsers()');

  var onErr = (err) => {
    console.log("Error retrieving users: " + err);
    res.status(500).send(err);
  };

  var onSuccess = (data) => {
    var response = res.status(200);
    response.setHeader('Expires', '-1');
    response.send(data);
  };

  userService.getUsers(onSuccess, onErr);
}

exports.addUser = function(req, res) {

  var user = req.body;

  logger.debug('userController.addUser() %j', user);

  var onErr = (err) => {
    console.log("Error saving users: " + err);
    res.status(500).send(err);
  };

  var onSuccess = (data) => {
    var response = res.status(200);
    response.setHeader('Expires', '-1');
    response.send(data);
  };

  userService.addUser(user, onSuccess, onErr);
}
