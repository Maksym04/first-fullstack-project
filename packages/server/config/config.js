const path = require('path');

module.exports = {
  staticPath: path.join(__dirname, '..', process.env.STATIC_PATH),
};
