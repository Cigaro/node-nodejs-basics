import * as fs from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const filesDir = path.join(path.dirname(__filename), 'files')


const read = async () => {
    fs.readFile(path.join(filesDir, 'fileToRead.txt'), 'utf-8', (err, data) => {
        if (err) {
          throw 'FS operation failed'
        }
        console.log(data)
    }) 
};

await read();