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
    models.Task.hasMany(models.Task);
    models.Task.belongsTo(models.User);
  };
  return Task;
};
