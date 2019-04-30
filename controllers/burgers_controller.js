const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
  Promise.all([
    db.Burgers.findAll({ attributes: ['burger_name', 'id', 'devoured'] }),
    db.Ingredients.findAll({ attributes: ['ingredient_name', 'id'] })
  ]).then(result => { res.render('index', { burgers: result[0], ingredients: result[1] }) })
})

router.get('/api/burger/:id', (req, res) => {
  db.Ingredients.findAll({
    attributes: ['id', 'ingredient_name'],
    include: {
      model: db.Burgers,
      where: { id: req.params.id },
      attributes: ['burger_name', 'id']
    },
  }).then(data => { res.json(data.map(e => e.ingredient_name)) })
})

router.post('/api/burger', (req, res) => {
  db.Burgers.create({ burger_name: req.body.name })
    .then(data => {
      const newBurgerIngredients = [];
      req.body.ingredients.forEach(item => {
        newBurgerIngredients.push({
          burgerID: data.id,
          ingredientID: item
        })
      })
      db.Burger_Ingredients.bulkCreate(newBurgerIngredients)
        .then(result => { res.json(result) })
    })
})

router.put('/api/burger/:id', (req, res) => {
  db.Burgers.update({ devoured: true }, {
    where: { id: req.params.id }
  })
    .then(data => {
      res.end()
    })
})

module.exports = router;