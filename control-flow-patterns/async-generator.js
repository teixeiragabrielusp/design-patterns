const {
    readdir,
    readFile,
    writeFile
} = require('fs');
const {
    join
} = require('path');
const {
    promisify
} = require('util');

const inbox = join(__dirname, 'inbox');
const outbox = join(__dirname, 'outbox');

const reverseText = str =>
    Promise.resolve(str
        .split('')
        .reverse()
        .join(''));

//------------Async-Await-----------------
const readdirAsync = promisify(readdir); // Promisified version of readdir
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

async function* getFilesIterator() {
    try {
        const readDirectory = await readdirAsync(inbox);
        for (const file of readDirectory) {
            yield file;
        }
    } catch (err) {
        throw Error(err);
    }
}

async function process() {
    try {
        const allFiles = await getFilesIterator();
        for await (const file of allFiles) {
            const read = await readFileAsync(join(inbox, file), 'utf-8');
            const reverse = await reverseText(read);
            await writeFileAsync(join(outbox, file), reverse);
            console.log(`${file} has been processed!`);
        }
    } catch(err) {
        console.log(err);
    } finally {
        console.log('All files processed!');
    }
}

process();