#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const readfile = util.promisify(fs.readFile);

const minimist = require('minimist');
const pkg = require('../package.json');
const finder = require('../dist/index').find;
const formatter = require('../dist/formatters/list').format;

const argv = minimist(process.argv.slice(2));

const filename = (argv._[0] || '').toString().trim();

function showHelp() {
    console.log(`${pkg.description}\n\n  $ ${pkg.name} /path/to/text/file`);
}

(async () => {
    if (!filename) {
        showHelp();
        return;
    }

    try {
        const contentBuffer = await readfile(filename);
        const content = contentBuffer.toString('utf-8');

        const links = finder(content);
        const result = formatter(links);
        console.log(result);
    } catch (err) {
        console.error(err.message);
    }
})();
