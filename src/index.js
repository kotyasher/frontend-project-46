import fs from 'fs';
import path from 'path';
import process from 'process';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
const parseFile = (filepath) => JSON.parse(readFile(filepath));

const genDiff = (filepath1, filepath2) => {
  console.log('Directory:', process.cwd());

  const file1Content = parseFile(filepath1);
  const file2Content = parseFile(filepath2);

  console.log('Contents of file1.json:');
  console.log(file1Content);
  console.log('Contents of file2.json:');
  console.log(file2Content);
};

export default genDiff;
