import { appendFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const filePath = join("./files/", "fresh.txt");
const data = `I am fresh and young`;

const create = async () => {
    try {
        const itemStats = await stat(filePath);
    } catch {
        await appendFile(filePath, data);
        return;
    }
    throw Error("FS operation failed");
};

await create();