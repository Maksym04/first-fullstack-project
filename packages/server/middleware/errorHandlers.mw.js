const {
  Sequelize: { BaseError },
} = require('./../models');
const { ValidationError } = require('yup');

module.exports.validationErrorHandler = (err, req, res, next) => {
  // Возможная обработка яповской ошибки с добавлением
  // более датальной инфы по ошибке в ответ
  if (err instanceof ValidationError) {
    return res
      .status(422)
      .send({ errors: [{ title: 'Validation Error', ditails: err.errors }] });
  }
  next(err);
};

module.exports.sequelizeErrorHandler = (err, req, res, next) => {
  if (err instanceof BaseError) {
    // ToDo handler
  }
  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  res
    .status(err?.status ?? 500)
    .send({ errors: [{ title: err?.message ?? 'Internal server error' }] });
};
