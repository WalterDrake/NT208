import express from "express";

import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import { env } from '../../config/environment'


cloudinary.v2.config({
  cloud_name: env.CLOUDINARY.cloud_name,
  api_key: env.CLOUDINARY.api_key,
  api_secret: env.CLOUDINARY.api_secret,
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: async (req, file) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const randomNumber = Math.floor(Math.random() * 100);

    const randomId = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}_${randomNumber}`;

    return {
      folder: 'sukem-course',
      format: 'jpeg',
      public_id: randomId,
    };
  },
});


const parser = multer({ storage: storage });

const Router = express.Router();

Router.route('/image')
  .post(parser.single('image'), (req, res) => {
    try {
      if (req?.file) {
        // You can access `req.file` here
        res.status(200).json(req?.file);
      } else {
        res.status(400).json({ error: 'No file uploaded' });
      }
    } catch (error) {
      res.status(400).json({ error: error?.message });
    }
  });


Router.route('/').get((req, res) => {
  res.status(200).json({ message: "it work fine" });
});

export const uploadRoute = Router
