const { v4: uuidv4 } = require('uuid');

const generateRandomeFilename = (filename) => {
  const extensionIndex = filename.lastIndexOf('.');
  return uuidv4() + filename.substring(extensionIndex);
}

module.exports = generateRandomeFilename;