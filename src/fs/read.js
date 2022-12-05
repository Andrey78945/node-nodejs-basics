import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folderPath = dirname(fileURLToPath(import.meta.url));
const folderName = "files";
const fileName = "fileToRead.txt";
const filePath = join(folderPath, folderName, fileName);

const read = async () => {
    try {
        const data = await readFile(filePath, "utf8");
        console.log(data);
    } catch {
        throw new Error("FS operation failed");
    }
};

await read();