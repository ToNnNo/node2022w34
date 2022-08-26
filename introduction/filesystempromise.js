const fs = require('fs').promises;
const path = require('path');
require('colors');

const pathfile = path.join(__dirname, 'assets', 'content', 'promise.txt');
const content = 'Hello World\r\n';

fs.mkdir(path.dirname(pathfile), {recursive: true}).then(() => {
    console.log('Les répertoires ont bien été créés'.yellow);

    return fs.writeFile(pathfile, content, {flag: 'a'});

}).then(() => {
    // réussite de writeFile
    console.log('Ecriture terminé'.bgBlack.green);

    return fs.readFile(pathfile);

}).then((result) => {
    // réussite de readFile
    console.log(`${result}`);

}).catch((err) => {
    console.error(err);
});