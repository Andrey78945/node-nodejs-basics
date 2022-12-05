import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const folderPath = dirname(fileURLToPath(import.meta.url));
const folderName = "files";
const fileFromName = "fileToCompress.txt";
const fileFromPath = join(folderPath, folderName, fileFromName);
const fileToName = "fileCompressed.gz";
const fileToPath = join(folderPath, folderName, fileToName);


const compress = async () => {
    createReadStream(fileFromPath).pipe(createGzip()).pipe(createWriteStream(fileToPath));
};

await compress();