import * as fs from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const filesDir = path.join(path.dirname(__filename), 'files')


const list = async () => {
    fs.readdir(path.join(filesDir), (err, files) => {
        if (err) {
          throw 'folder doesn`t exists'
        } else {
            files.forEach(file => {
                console.log(file);
              });
        }
})
};

await list();