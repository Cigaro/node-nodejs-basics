import * as fs from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);


const copy = async () => {
    const parentDir = path.dirname(__filename)
    const dirForCopy = path.join(parentDir, 'files')
    fs.open(dirForCopy,  'r', (err) => {
        if (err) {
          throw 'folder doesn`t exists'
        } else {
            fs.open(path.join(parentDir, 'files_copy'), 'r', (err,fd) => {
                if (fd != undefined) {
                    throw ' FS operation failed: folder is already exist'
                } else {
                    fs.mkdir(path.join(parentDir, 'files_copy'), { recursive: true }, (err) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                        fs.readdir(dirForCopy, (err, files) => {
                            if (err) {
                              throw 'folder doesn`t exists'
                            }
                            for (let i = 0; i < files.length; i++) {
                                fs.copyFile(path.join(dirForCopy, files[i]), path.join(parentDir,'files_copy', files[i]), err => {
                                    if(err) throw err; // не удалось скопировать файл
                                    console.log('Файл успешно скопирован');
                                 });
                            }
                        })
                        
                    })
                }
        
            });
        }

    })
};

copy();





            