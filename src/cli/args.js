const parseArgs = () => {
    const input = process.argv.slice(2);
    const result = [];
    for (let i = 0; i < input.length; i += 2) {
        result.push(`${input[i].slice(2)} is ${input[i + 1]}`);
    }
    console.log(result.join(", "));
};

parseArgs();