import { cp, stat } from 'node:fs/promises';

const srcPath = "files";
const destPath = "files_copy";

const dirCreation = await stat(srcPath);

console.log(dirCreation.isDirectory());

// async function makeDirectory(dirPath) {
//     const dirCreation = await mkdir(dirPath, { recursive: true });
//     return dirCreation;
// }

// const copy = async () => {
//     try {
//         await stat(srcPath);
//     } catch {
//         throw Error("FS operation failed");
//     }
//     try {
//         await stat(destPath);
//     } catch {
//         await makeDirectory(destPath);
//         await cp(srcPath, destPath);
//         return;
//     }
//     throw Error("FS operation failed");
// };

// copy();