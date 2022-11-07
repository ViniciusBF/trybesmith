import Joi from 'joi';

const checkLogin = Joi.object({
  username: Joi.string().required().messages({
    'any.required': '"username" is required',
  }),
  password: Joi.string().required().messages({
    'any.required': '"password" is required',
  }),
});

export default checkLogin;
