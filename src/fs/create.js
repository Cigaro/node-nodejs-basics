import * as fs from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);

const create = async () => {
    const dirName = path.dirname(__filename)
    const fileName = path.join(dirName, 'files', 'fresh.txt')

    fs.open(fileName, 'r', (err,fd) => {
        if (fd === 3) {
            throw ' FS operation failed: file is already exist'
        }
        if (err) {
          if (err.code === 'ENOENT') {
            const createFile =  fs.appendFile('./src/fs/files/fresh.txt', 'I am fresh and young', (err) =>{
                if(err) throw err;
                console.log('file created')
            })
          }
        }
      });
};

await create();

