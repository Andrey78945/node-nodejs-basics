import { cpus } from 'os';
import { Worker } from 'node:worker_threads';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folderPath = dirname(fileURLToPath(import.meta.url));
const fileName = "worker.js";
const filePath = join(folderPath, fileName);

export const performCalculations = async () => {
    const coreNumber = cpus();
    const start = 10;

    const threadResults = await Promise.allSettled(coreNumber.map((_, index) => {
        return new Promise((resolve, reject) => {
            const data = start + index;
            const worker = new Worker(filePath, { workerData: data });
            worker.on("message", message => resolve(message));
            worker.on("error", error => reject(error));
        });
    }));

    const results = threadResults.map((item) => {
        if (item.status === "fulfilled") {
            return {
                status: "resolved",
                data: item.value,
            }
        }
        return {
            status: "error",
            data: null,
        }
    });
    console.log(results);

    return results;
};

await performCalculations();