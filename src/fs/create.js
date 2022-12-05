import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folderPath = dirname(fileURLToPath(import.meta.url));
const fileName = "fresh.txt";
const filePath = join(folderPath, "/files/", fileName);
const data = `I am fresh and young`;

const create = async () => {
    try {
        await writeFile(filePath, data, { flag: "wx" });
    } catch {
        throw new Error("FS operation failed");
    }
};

await create();