import { rename as giveProperName } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folderPath = dirname(fileURLToPath(import.meta.url));
const folderName = "files";
const wrongName = "wrongFilename.txt";
const properName = "properFilename.md";
const wrongPath = join(folderPath, folderName, wrongName);
const properPath = join(folderPath, folderName, properName);


const rename = async () => {
    try {
        await giveProperName(wrongPath, properPath);
    } catch {
        throw new Error("FS operation failed");
    }
};

await rename();