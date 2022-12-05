import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Unzip } from 'node:zlib';

const folderPath = dirname(fileURLToPath(import.meta.url));
const folderName = "files";
const fileFromName = "fileCompressed.gz";
const fileFromPath = join(folderPath, folderName, fileFromName);
const fileToName = "fileDecompressed.txt";
const fileToPath = join(folderPath, folderName, fileToName);

const decompress = async () => {
    createReadStream(fileFromPath).pipe(Unzip()).pipe(createWriteStream(fileToPath));
};

await decompress();