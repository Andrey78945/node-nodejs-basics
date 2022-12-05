import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';

const folderPath = dirname(fileURLToPath(import.meta.url));
const folderName = "files";
const fileName = "script.js";
const filePath = join(folderPath, folderName, fileName);

const spawnChildProcess = async (args) => {
    const child = fork(filePath, args);
    child.send(process.stdin);

    child.on("message", message => process.stdout);
    child.on("error", error => process.stdout);
};

spawnChildProcess();