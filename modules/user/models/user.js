const Sequelize = require('sequelize');
const connection = require('../../../util/database').connection1;

const User = connection.define(
  'User',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'all_users',
  }
);

module.exports = User;
