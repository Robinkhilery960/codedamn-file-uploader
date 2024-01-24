
const express = require('express');
const multer = require('multer')
const app = express(); 

// Serve static files from the 'public' folder
app.use(express.static('../client'));

const storage = multer.diskStorage({
  destination: function (req,res,cb){
      cb(null, "uploads/");   
  },
  filename: function (req,file,cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const filename = file.originalname.split(".")[0];
      cb(null,filename + "-" + uniqueSuffix + ".png");
  },
});
  
const upload = multer({ storage: storage })
app.post("/upload", upload.single('file'), (req, res) => {
    res.json({ file: req.file });
  });
app.listen(1337, () => {
    console.log('Server is running on port 1337');
});