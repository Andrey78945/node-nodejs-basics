import { createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folderPath = dirname(fileURLToPath(import.meta.url));
const folderName = "files";
const fileName = "fileToWrite.txt";
const filePath = join(folderPath, folderName, fileName);
const outStream = createWriteStream(filePath);

const write = async () => {
    (process.stdin).pipe(outStream);
};

await write();