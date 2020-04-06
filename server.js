const express = require('express');
const fileUpload = require('express-fileupload');
const futils = require('./utils/futils');
const app = express();

app.use(fileUpload());

//Upload Endpoint
app.post('/upload', (req, res) => {
  if(req.files === null) {
    return res.status(400).json({msg: 'No file uploaded'});
  }

  const file = req.files.file;
  const generatedFileName = futils(file.name);
  // eslint-disable-next-line no-undef
  file.mv(`${__dirname}/client/public/uploads/${generatedFileName}`, err => {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${generatedFileName}` });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
})