import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folderPath = dirname(fileURLToPath(import.meta.url));
const folderName = "files";
const pathToList = join(folderPath, folderName);

const list = async () => {
    try {
        const array = await readdir(pathToList);
        array.forEach(item => console.log(item));
    } catch {
        throw new Error("FS operation failed");
    }
};

await list();