const express = require('express');
const burger = require('../models/burger');
const ingredients = require('../models/ingredient')

const router = express.Router();

router.get('/', (req, res) => {
  const hbObj = {};
  burger.view(data => {
    hbObj.burgers = data;
    ingredients.view(data => {
      hbObj.ingredients = data;
      res.render('index', hbObj);
    })
  })
})

router.get('/api/burger/:id', (req, res) => {
  burger.ingredients(parseInt(req.params.id), data => {
    res.json(data);
  })
})

router.post('/api/burger', (req, res) => {
  burger.create(req.body.name, (data) => {
    const burgerId = data.insertId;
    burger.setIngredients(burgerId, req.body.ingredients, data => {
      res.json(data);
    })
  })
})

router.put('/api/burger/:id', (req, res) => {
  burger.devour(parseInt(req.params.id), (data) => {
    if (data.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  })
})

module.exports = router;