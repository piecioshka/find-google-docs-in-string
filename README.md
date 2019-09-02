# find-google-docs-in-string

[![npm version](https://badge.fury.io/js/find-google-docs-in-string.svg)](https://badge.fury.io/js/find-google-docs-in-string)
[![downloads count](https://img.shields.io/npm/dt/find-google-docs-in-string.svg)](https://www.npmjs.com/~piecioshka)
[![travis](https://img.shields.io/travis/piecioshka/find-google-docs-in-string.svg)](https://travis-ci.org/piecioshka/find-google-docs-in-string)
[![coveralls](https://coveralls.io/repos/github/piecioshka/find-google-docs-in-string/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/find-google-docs-in-string?branch=master)
[![snyk](https://snyk.io/test/github/piecioshka/find-google-docs-in-string/badge.svg?targetFile=package.json)](https://snyk.io/test/github/piecioshka/find-google-docs-in-string?targetFile=package.json)

:hammer: Find links from **Google Docs** in string or file

## Installation

```bash
npm install -g find-google-docs-in-string
```

## Usage

```javascript
const findGoogleDocs = require('find-google-docs-in-string');
const links = findGoogleDocs(
    `
    <https://docs.google.com/document/d/super-uniq-id/edit>
    https://docs.google.com/document/d/super-uniq-id-2/edit
    https://google.com/search?q=cookie
    `
);

console.log(links);
// - https://docs.google.com/document/d/super-uniq-id/edit
// - https://docs.google.com/document/d/super-uniq-id-2/edit
```

## CLI

```bash
find-google-docs-in-string /path/to/text/file
```

## Unit tests

```bash
npm test
```

## Code coverage

```bash
npm run coverage
```

## Related

* [find-emails-in-string-cli](https://github.com/piecioshka/find-emails-in-string-cli)

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019
