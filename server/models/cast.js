"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cast.belongsTo(models.Movie, { foreignKey: "movieId" });
    }
  }
  Cast.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: `Name required.`,
          },
          notNull: {
            args: true,
            msg: `Name required.`,
          },
        },
      },
      profilePict: DataTypes.STRING,
      movieId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cast",
    }
  );
  return Cast;
};
