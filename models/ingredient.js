module.exports = (sequelize, DataTypes) => {
  const Ingredients = sequelize.define('Ingredients', {
    ingredient_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });
  Ingredients.associate = function (models) {
    Ingredients.belongsToMany(models.Burgers, {
      through: 'Burger_Ingredients',
      foreignKey: 'ingredientID'
    });
  }
  return Ingredients;
}