const Joi = require('joi');

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: 'Validation error',
        details: error.details[0].message
      });
    }
    next();
  };
};

const schemas = {
  register: Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  }),

  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }),

  post: Joi.object({
    title: Joi.string().max(200).required(),
    content: Joi.string().required(),
    excerpt: Joi.string().max(300),
    status: Joi.string().valid('draft', 'published'),
    categories: Joi.array().items(Joi.string()),
    tags: Joi.array().items(Joi.string())
  }),

  category: Joi.object({
    name: Joi.string().max(50).required(),
    description: Joi.string().max(200),
    color: Joi.string()
  }),

  comment: Joi.object({
    content: Joi.string().max(1000).required(),
    parentComment: Joi.string()
  })
};

module.exports = { validate, schemas };