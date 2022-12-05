import { cp, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folderPath = dirname(fileURLToPath(import.meta.url));
const destFolderName = "files-copy";
const destPath = join(folderPath, destFolderName);
const srcPath = join(folderPath, "files");

const copy = async () => {
    try {
        await mkdir(destPath);
        await cp(srcPath, destPath, { recursive: true });
    } catch {
        throw new Error("FS operation failed");
    }
};

copy();