import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folderPath = dirname(fileURLToPath(import.meta.url));
const folderName = "files";
const fileName = "fileToCalculateHashFor.txt";
const filePath = join(folderPath, folderName, fileName);
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    try {
        const data = await readFile(filePath)
        const hash = createHash('sha256')
            .update(data)
            .digest('hex');
        console.log(hash);
    } catch (err) {
        throw err;
    }

};

await calculateHash();