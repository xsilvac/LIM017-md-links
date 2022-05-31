// import { process } from 'process';
import { mdLinks } from './index.js';
// import { totalLinks, uniqueLinks, brokenLinks } from './md-links.js';

const arg = process.argv.slice(2);
switch (arg.length) {
    case 1:
        mdLinks(arg[0], { validate: false })
        .then((v) => {
            v.forEach((link) => console.log('porque', link.href, link.text, link.file))
        });
        .catch((err) => console.log(err));
        break;
    case 2:
        mdLinks(arg[0], { validate: true })
        .then((v) => {
            v.forEach((link) => console.table('hola', link.href, link.text, link.file, link.status, link.ok))
        });
        .catch((err) => console.log(err));
        break;
}
