"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: DataTypes.TEXT,
      status: DataTypes.STRING,
      minutesSpent: DataTypes.INTEGER
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  Task.associate = function(models) {
    // associations can be defined here
    models.Task.belongsTo(models.User);
  };
  return Task;
};
