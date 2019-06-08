/* eslint-disable camelcase */
"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userid: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      passwrd: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      first_name: DataTypes.STRING(30),
      last_name: DataTypes.STRING(30),
      email: {
        type: DataTypes.STRING(75),
        allowNull: false
      },
      challenge_response: DataTypes.STRING(50),
      challenge_question: DataTypes.STRING(100)
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
