const {
    readdir,
    readFile,
    writeFile
} = require('fs');
const {
    join
} = require('path');

const inbox = join(__dirname, 'inbox');
const outbox = join(__dirname, 'outbox');

const reverseText = str => 
    str
    .split('')
    .reverse()
    .join('');

//----------CALLBACK HELL------------
readdir(inbox, (err, files) => {
    if(err) return console.log(err);
    
    files.forEach(file => {
        readFile(join(inbox, file), 'utf-8', (err, data) => {
            if(err) return console.log(err);

            writeFile(join(outbox, file), reverseText(data), (err, result) => {
                if(err) return console.log(err);

                console.log(`${file} was saved in the outbox!`);
            });
        });
    });
});