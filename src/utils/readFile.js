const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, '../resources');

const contentFiles = fs.readdirSync(directoryPath);

const [front, back] = contentFiles;

const frontContent = fs.readFileSync(`src/resources/${front}`, 'utf8');
const backContent = fs.readFileSync(`src/resources/${back}`, 'utf8');

const frontCrews = frontContent.split('\n')[1].split(',');
const backCrews = backContent.split('\n')[1].split(',');

module.exports = {
  frontCrews,
  backCrews,
};
