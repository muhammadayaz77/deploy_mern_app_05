import express from 'express'
import { uploadController } from '../controllers/upload.controllers.mjs';

let routes = express.Router();

routes.get('/',uploadController)

export default routes