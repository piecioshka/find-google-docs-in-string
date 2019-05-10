#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const readfile = util.promisify(fs.readFile);

const yargs = require('yargs');
const pkg = require('../package.json');
const finder = require('../src').find;
const formatter = require('../src/formatters/list').format;

const argv = yargs
    .usage(`${pkg.description}\n\n  $ $0 /path/to/text/file`)
    .argv;

const filename = String(argv._).trim();

(async () => {
    if (!filename) {
        yargs.showHelp();
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
