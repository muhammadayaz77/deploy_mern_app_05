import dotenv from 'dotenv'
dotenv.config()
import ImageKit from "imagekit";
const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY
});

export const uploadController = (req,res) => {
    try {
      var result = imagekit.getAuthenticationParameters();
      res.send(result);
    } catch (error) {
      res.json({
        message : error.message,
        success : false
      })
    }
}