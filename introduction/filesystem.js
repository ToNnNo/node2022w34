const fs = require('fs');
const path = require('path');
require('colors');

const pathfile = path.join(__dirname, 'assets', 'content', 'hello.txt');
const content = 'Hello World\r\n';

// callback hell
fs.mkdir(path.dirname(pathfile), {recursive: true}, (error) => {
    if(error) {
        throw error;
    }

    console.log('Les répertoires ont bien été créés'.yellow);

    fs.writeFile(pathfile, content, {flag: 'a'}, (err) => {
        if(err) throw err;

        console.log('Ecriture terminé'.bgBlack.green);

        fs.readFile(pathfile, (err, result) => {
            if(err) throw err;

            //console.log(result.toString());
            console.log(`${result}`);
        });
    });
});