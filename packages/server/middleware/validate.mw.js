const createError = require('http-errors');
const {
  NEW_USER_VALIDATION_SCHEMA,
  UPDATED_USER_VALIDATION_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateNewUser = async (req, res, next) => {
  // тут обработка перенаправляется в специализированный обработчик
  // для отсылки более детальной инфы по ошибке
  const { body } = req;
  try {
    if (await NEW_USER_VALIDATION_SCHEMA.validate(body)) {
      return next();
    }
  } catch (e) {
    next(e);
  }
};

module.exports.validateUpdatedUser = async (req, res, next) => {
  // тут генерируется общая вадилационная ошибка на месте
  const { body } = req;
  if (await UPDATED_USER_VALIDATION_SCHEMA.isValid(body)) {
    return next();
  }
  next(createError(422, 'Validation Error'));
};
