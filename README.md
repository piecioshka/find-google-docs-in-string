# find-google-docs-in-string

[![npm version](https://badge.fury.io/js/find-google-docs-in-string.svg)](https://badge.fury.io/js/find-google-docs-in-string)
[![downloads count](https://img.shields.io/npm/dt/find-google-docs-in-string.svg)](https://www.npmjs.com/~piecioshka)
[![travis-ci](https://api.travis-ci.com/piecioshka/find-google-docs-in-string.svg?branch=master)](https://app.travis-ci.com/github/piecioshka/find-google-docs-in-string)

:hammer: Find links from **Google Docs** in string or file

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

Installation

```bash
npm install -g find-google-docs-in-string
```

Usage:

```bash
find-google-docs-in-string /path/to/text/file
```

## Related

* [find-emails-in-string-cli](https://github.com/piecioshka/find-emails-in-string-cli)

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019
