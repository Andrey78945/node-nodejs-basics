import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folderPath = dirname(fileURLToPath(import.meta.url));
const folderName = "files";
const fileName = "fileToRemove.txt";
const filePath = join(folderPath, folderName, fileName);


const remove = async () => {
    try {
        await rm(filePath);
    } catch {
        throw new Error("FS operation failed");
    }
};

await remove();