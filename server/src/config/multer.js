import multer from 'multer';
import multerS3 from 'multer-s3';

import AWS from 'aws-sdk';

import crypto from 'crypto';
import { extname, resolve } from 'path';

const storageType = {
  local: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        file.key = res.toString('hex') + extname(file.originalname);
        return cb(null, file.key);
      });
    },
  }),
  s3: multerS3({
    s3: new AWS.S3(),
    bucket: 'uploadavatarsignature',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        const fileName = res.toString('hex') + extname(file.originalname);

        return cb(null, fileName);
      });
    },
  }),
};

export default {
  storage: storageType[process.env.STORAGE_TYPE],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png'];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
};
