const orm = require('../config/orm');

const ingredient = {
  view: function (cbfunc) {
    orm.selectAll('ingredients', cbfunc);
  },
  create: function (ingredientName, cbfunc) {
    const newingredient = { ingredient_name: ingredientName };
    orm.insertOne('ingredients', newingredient, cbfunc);
  }
}

module.exports = ingredient;