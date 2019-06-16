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
      minutesSpent: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      underscored: true
    }
  );
  // eslint-disable-next-line no-unused-vars
  Task.associate = function(models) {
    // associations can be defined here
    models.Task.belongsTo(models.User);
    models.Task.hasMany(models.Task);
  };
  return Task;
};
