const express = require('express');
const router = express.Router();
const { celebrate, Joi, Segments } = require('celebrate');


const PostController = require('../controllers/postController');

router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    image: Joi.string(),
    categories: Joi.array()
  }),
}), PostController.create)
router.put('/:id', celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    image: Joi.string(),
    categories: Joi.array()
  }),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().integer().required()
  }),
}),PostController.update)
router.get('/', PostController.index)
router.delete('/:id', PostController.delete)

module.exports = router;