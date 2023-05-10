import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.config({
    cloud_name: 'dzawgnpm9',
    api_key: '117913823396648',
    api_secret: 'dSSSHl77q4vTHB1Wc7B6qQxXR9k'
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        // async code using `req` and `file`
        // ...
        return {
          folder: 'hotel_image',
          format: 'jpeg',
          public_id: 'some_unique_id',
        };
      },

});

const uploadCloud = multer({ storage: storage });

export default uploadCloud;


