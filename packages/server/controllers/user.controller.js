const _ = require('lodash');
const createError = require('http-errors');
const { User } = require('./../models');

module.exports.getUsers = async (req, res, next) => {
  try {
    const foundUsers = await User.findAll({
      raw: true,
      attributes: {
        exclude: ['id', 'passwordHash', 'createdAt', 'updatedAt'],
      },
      limit: 5,
    });
    res.status(200).send({ data: foundUsers });
  } catch (e) {
    next(e);
  }
};

// req.params
module.exports.getUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  try {
    const [foundUser] = await User.findAll({
      raw: true,
      where: { id: userId },
      attributes: {
        exclude: ['id', 'passwordHash', 'createdAt', 'updatedAt'],
      },
    });
    if (foundUser) {
      return res.status(200).send({ data: foundUser });
    }
    // res.status(404).send('User not found');
    next(createError(404, 'User not Found'));
  } catch (e) {
    next(e);
  }
};

module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);

    const preparedUser = _.omit(createdUser.get(), [
      'id',
      'passwordHash',
      'createdAt',
      'updatedAt',
    ]);

    res.status(201).send({ data: preparedUser });
  } catch (e) {
    next(e);
  }
};

module.exports.updateUser = async (req, res, next) => {
  const {
    params: { userId },
    body,
  } = req;

  try {
    // const foundUser = await User.findByPk(userId);
    // if (foundUser) {
    //   const updatedUser = await foundUser.update(body);
    //   const preparedUser = _.omit(updatedUser.get(), [
    //     'id',
    //     'createdAt',
    //     'updatedAt',
    //     'passwordHash',
    //   ]);
    //   return res.status(200).send(preparedUser);
    // }
    // res.status(404).send('User not found');
    // or

    const [updatedUserCount, [updatedUser]] = await User.update(body, {
      where: { id: userId },
      returning: true,
    });
    if (updatedUserCount > 0) {
      const preparedUser = _.omit(updatedUser.get(), [
        'id',
        'createdAt',
        'updatedAt',
        'passwordHash',
      ]);
      return res.status(200).send({ data: preparedUser });
    }
    // res.status(404).send('User not found');
    next(createError(404, 'User not Found'));
  } catch (e) {
    next(e);
  }
};

module.exports.updateOrCreateUser = async (req, res, next) => {
  const {
    params: { userId },
    body,
  } = req;

  try {
    const [updatedUserCount] = await User.update(body, {
      where: { id: userId },
      returning: true,
    });
    if (updatedUserCount > 0) {
      return res.status(204).send();
    }

    req.body.id = userId;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  try {
    const deletedCount = await User.destroy({ where: { id: userId } });
    if (deletedCount) {
      return res.status(204).send();
    }
    // res.status(404).send('Not found');
    next(createError(404, 'User not Found'));
  } catch (e) {
    next(e);
  }
};

module.exports.getUserTasks = async (req, res) => {
  console.log(`getUserTasks`);
};
