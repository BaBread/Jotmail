const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vibetype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contentbody: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 1000], // Adjust the minimum and maximum length as needed
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

Post.belongsTo(User, {
  foreignKey: "user_id", // The field in the Post model that references User
});

module.exports = Post;
