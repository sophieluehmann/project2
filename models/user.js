/* eslint-disable camelcase */
"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      password: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      firstName: DataTypes.STRING(30),
      lastName: DataTypes.STRING(30),
      email: {
        type: DataTypes.STRING(75),
        allowNull: false,
        validate: { isEmail: true }
      },
      challenge_response: DataTypes.STRING(50),
      challenge_question: DataTypes.STRING(100)
    },
    {
      underscored: true
    }
  );
  // eslint-disable-next-line no-unused-vars
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Task);
  };
  return User;
};
