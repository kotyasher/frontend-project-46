import { readFileSync } from 'fs';
import path from 'path';

const genDiff = (filePath1, filePath2) => {
  const pathFile1 = path.resolve(process.cwd(), filePath1);
  const pathFile2 = path.resolve(process.cwd(), filePath2);

  const fileReading1 = readFileSync(pathFile1, 'utf-8');
  const fileReading2 = readFileSync(pathFile2, 'utf-8');

  const json1 = JSON.parse(fileReading1);
  const json2 = JSON.parse(fileReading2);

  return [json1, json2];
};

export default genDiff;
