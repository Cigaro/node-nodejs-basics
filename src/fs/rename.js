import * as fs from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);

const rename = async () => {
    const filesDir = path.join(path.dirname(__filename), 'files')
    fs.open(path.join(filesDir, 'wrongFilename.txt'), 'r', (err,fd) => {
        if (err){
            throw ' FS operation failed: file doesn`t exist'
        }
    });
    fs.open(path.join(filesDir, 'properFilename.md'), 'r', (err,fd) => {
        if (fd != undefined){
            throw ' FS operation failed: file already exist'
        }
        fs.rename(path.join(filesDir, 'wrongFilename.txt'),path.join(filesDir, 'properFilename.md'), (err) => {
            if (err) throw err;
            console.log('Файл переименован');
        });
    });
};

await rename();