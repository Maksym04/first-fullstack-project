const yup = require('yup');

module.exports.PAGINATION_VALIDATION_SCHEMA = yup.object().shape({
  limit: yup
    .number()
    .min(1)
    .max(24)
    .required(),
  offset: yup
    .number()
    .min(1)
    .required(),
});

const NAME_SCHEMA = yup.string().matches(/^[A-Z][a-z]{1,39}$/);

const EMAIL_SCHEMA = yup.string().email();

module.exports.NEW_USER_VALIDATION_SCHEMA = yup.object().shape({
  firstName: NAME_SCHEMA.required(),
  lastName: NAME_SCHEMA.required(),
  email: EMAIL_SCHEMA.required(),
  passwordHash: yup.string().required(),
  gender: yup.string(),
  birthday: yup.date(),
  image: yup.string(),
});

module.exports.UPDATED_USER_VALIDATION_SCHEMA = yup.object().shape({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  passwordHash: yup.string(),
  gender: yup.string(),
  birthday: yup.date(),
  image: yup.string(),
});
