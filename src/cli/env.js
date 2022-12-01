const parseEnv = () => {
    const envVariables = Object.entries(process.env).filter(item => item[0].startsWith("RSS_")).map(item => `${item[0]}=${item[1]}`);
    console.log(envVariables.join("; "));
};

parseEnv();