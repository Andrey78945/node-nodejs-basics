import { Transform, pipeline } from 'node:stream';

const transform = async () => {
    const myTransform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().replace('\n', '').split('').reverse().join('') + '\n');
        },
    });
    pipeline(
        process.stdin,
        myTransform,
        process.stdout,
        (err) => {
            console.log(err);
        }
    );
};

await transform();