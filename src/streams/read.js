import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folderPath = dirname(fileURLToPath(import.meta.url));
const folderName = "files";
const fileName = "fileToRead.txt";
const filePath = join(folderPath, folderName, fileName);

const read = async () => {
    const stream = new createReadStream(filePath);
    stream.pipe(process.stdout);
};

await read();