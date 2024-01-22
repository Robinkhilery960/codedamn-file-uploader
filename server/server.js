
const express = require('express');
const multer = require('multer')
const app = express(); 

// Serve static files from the 'public' folder
app.use(express.static('../client'));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
const upload = multer({ storage: storage })
  
app.listen(1337, () => {
    console.log('Server is running on port 1337');
});