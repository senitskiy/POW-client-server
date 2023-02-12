import * as fs from "node:fs"

const getRandomString = () => {
    const getRandomInt = () => {
        return Math.floor(Math.random() * 5353);
    }

    const numRandom = getRandomInt()
    console.log(numRandom);

    const filePath = "./words.txt";

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');

    const lineNumber = numRandom
    const output = lines[lineNumber - 1]; // Subtract 1 as array index starts at 0

    console.log(output);
    return output
}


export default getRandomString

  