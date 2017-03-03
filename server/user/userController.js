const userService = require('./userService');

var exports = module.exports = {};

exports.getUsers = function(req, res) {

  console.log('userController.getUsers()');

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

  console.log('userController.addUser()');

  var onErr = (err) => {
    console.log("Error saving users: " + err);
    res.status(500).send(err);
  };

  var onSuccess = (data) => {
    var response = res.status(200);
    response.setHeader('Expires', '-1');
    response.send(data);
  };

  var user = req.body;

  userService.addUser(user, onSuccess, onErr);
}
