const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/api/ingredients', (req, res) => {
  db.Ingredients.findAll({ attributes: ['ingredient_name', 'id'] })
    .then(data => {
      res.json(data);
    })
})

router.post('/api/ingredients', (req, res) => {
  db.Ingredients.create({ ingredient_name: req.body.name })
    .then(data => { res.json(data) })
})

module.exports = router;