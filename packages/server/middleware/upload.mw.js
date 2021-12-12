const multer = require('multer');
const { staticPath } = require('../config/config');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(staticPath, 'images'));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const fileFilter = (req, file, cb) => {
  const MIMETYPE_REGEXP = /^image\/(jpeg|gif|png)$/;

  if (MIMETYPE_REGEXP.test(file.mimetype)) {
    return cb(null, true);
  }
  cb(null, false);
};

module.exports.uploadUserPhoto = multer({
  storage: storage,
  fileFilter: fileFilter,
});
