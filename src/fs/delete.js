import * as fs from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const filesDir = path.join(path.dirname(__filename), 'files')

const remove = async () => {
    fs.unlink(path.join(filesDir, 'fileToRemove.txt'), err => {
        if(err) throw ' FS operation failed';
        console.log('Файл успешно удалён');
     });
};

await remove();