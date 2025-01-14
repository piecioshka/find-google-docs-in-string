# find-google-docs-in-string

[![cli-available](https://badgen.net/static/cli/available/?icon=terminal)](https://runkit.com/npm/find-google-docs-in-string)
[![node version](https://img.shields.io/node/v/find-google-docs-in-string.svg)](https://www.npmjs.com/package/find-google-docs-in-string)
[![npm version](https://badge.fury.io/js/find-google-docs-in-string.svg)](https://badge.fury.io/js/find-google-docs-in-string)
[![downloads count](https://img.shields.io/npm/dt/find-google-docs-in-string.svg)](https://www.npmjs.com/package/find-google-docs-in-string)
[![size](https://packagephobia.com/badge?p=find-google-docs-in-string)](https://packagephobia.com/result?p=find-google-docs-in-string)
[![license](https://img.shields.io/npm/l/find-google-docs-in-string.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/find-google-docs-in-string/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/find-google-docs-in-string/actions/workflows/testing.yml)

🔨 Find links from **Google Docs** in string or file

## Usage

Installation

```bash
npm install find-google-docs-in-string
```

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

```bash
find-google-docs-in-string /path/to/text/file
```

## Related

* [find-emails-in-string-cli](https://github.com/piecioshka/find-emails-in-string-cli)

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2019
