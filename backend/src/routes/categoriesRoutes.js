const express = require('express');
const router = express.Router();
const { celebrate, Joi, Segments } = require('celebrate');

const CategoryController = require('../controllers/categoryController');

router.get('/', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    search: Joi.string(),
    id: Joi.number().integer(),
    page: Joi.number().integer().default(1),
    perPage: Joi.number().integer().default(5),
  })
}), CategoryController.index)

router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
  })
}), CategoryController.create)

router.put('/:id', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
  }),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().integer().required()
  })
}), CategoryController.update)

router.delete('/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().integer().required()
  })
}), CategoryController.delete)

module.exports = router;