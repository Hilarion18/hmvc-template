const User = require('../models/user');

exports.getAllUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.send(users);
};
