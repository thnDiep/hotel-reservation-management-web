const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: dzawgnpm9,
    api_key: 117913823396648,
    api_secret: dSSSHl77q4vTHB1Wc7B6qQxXR9k
});

const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png'],
    params: {
        folder: 'Hotel'
    }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
