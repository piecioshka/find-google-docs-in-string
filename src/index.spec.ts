import { describe, it, expect } from 'vitest';
import { find } from '.';

it('should be a function', () => {
    expect(find).toEqual(expect.any(Function));
});

it('should inform that non-string is passed', () => {
    expect(() => {
        find(null);
    }).toThrowError();
    expect(() => {
        find(undefined);
    }).toThrowError();
    expect(() => {
        find([]);
    }).toThrowError();
    expect(() => {
        find({});
    }).toThrowError();
});

it('should return empty collection when string not contain matched url', () => {
    const input = find(
        `
        Wlazł kotek na płotek
        `
    );
    const output = [];

    expect(input).toEqual(output);
});

it('should find one link', () => {
    const input = find(
        `

        Text with link:
        <https://docs.google.com/document/d/super-uniq-id/edit>
        and nothing else!

        Any other link should not be match. Especially that
        https://example.com

        `
    );
    const output = ['https://docs.google.com/document/d/super-uniq-id/edit'];

    expect(input).toEqual(output);
});

it('should find more links', () => {
    const input = find(
        `

        Text with link:
        <https://docs.google.com/document/d/super-uniq-id/edit>
        and nothing else!

        Now, tool should match second link:
        https://docs.google.com/document/d/super-uniq-id-2/edit

        And next one!
        https://docs.google.com/document/d/super-uniq-id-3/edit

        But no more!
        https://google.com/search?q=ciasteczko

        `
    );
    const output = [
        'https://docs.google.com/document/d/super-uniq-id/edit',
        'https://docs.google.com/document/d/super-uniq-id-2/edit',
        'https://docs.google.com/document/d/super-uniq-id-3/edit',
    ];

    expect(input).toEqual(output);
});

it('should find Google Sheets links', () => {
    const input = find(
        `Check out this spreadsheet: https://docs.google.com/spreadsheets/d/abc123/edit`
    );
    const output = ['https://docs.google.com/spreadsheets/d/abc123/edit'];

    expect(input).toEqual(output);
});

it('should find Google Slides links', () => {
    const input = find(
        `Presentation: https://docs.google.com/presentation/d/xyz789/edit`
    );
    const output = ['https://docs.google.com/presentation/d/xyz789/edit'];

    expect(input).toEqual(output);
});

it('should find Google Forms links', () => {
    const input = find(
        `Fill out this form: https://docs.google.com/forms/d/form123/viewform`
    );
    const output = ['https://docs.google.com/forms/d/form123/viewform'];

    expect(input).toEqual(output);
});

it('should find links with http (not https)', () => {
    const input = find(`Old link: http://docs.google.com/document/d/old-doc/edit`);
    const output = ['http://docs.google.com/document/d/old-doc/edit'];

    expect(input).toEqual(output);
});

it('should find mixed http and https links', () => {
    const input = find(
        `
        https://docs.google.com/document/d/doc1/edit
        http://docs.google.com/document/d/doc2/edit
        `
    );
    const output = [
        'https://docs.google.com/document/d/doc1/edit',
        'http://docs.google.com/document/d/doc2/edit',
    ];

    expect(input).toEqual(output);
});

it('should return empty array for empty string', () => {
    const input = find('');
    const output = [];

    expect(input).toEqual(output);
});

it('should return empty array for string with only whitespace', () => {
    const input = find('   \n\t  ');
    const output = [];

    expect(input).toEqual(output);
});

it('should find links case-insensitively', () => {
    const input = find(`HTTPS://DOCS.GOOGLE.COM/document/d/uppercase/edit`);
    const output = ['HTTPS://DOCS.GOOGLE.COM/document/d/uppercase/edit'];

    expect(input).toEqual(output);
});

it('should not match partial google docs domain', () => {
    const input = find(
        `https://fakdocs.google.com/document/d/fake/edit
         https://docs.google.com.fake.com/document/d/fake/edit`
    );
    const output = [];

    expect(input).toEqual(output);
});

it('should find links embedded in text without spaces', () => {
    const input = find(
        `Click here:https://docs.google.com/document/d/doc1/edit!`
    );
    const output = ['https://docs.google.com/document/d/doc1/edit'];

    expect(input).toEqual(output);
});

it('should find links in JSON-like strings', () => {
    const input = find(
        `{"url": "https://docs.google.com/document/d/json-doc/edit"}`
    );
    const output = ['https://docs.google.com/document/d/json-doc/edit'];

    expect(input).toEqual(output);
});

it('should find links in markdown format', () => {
    const input = find(
        `[My Document](https://docs.google.com/document/d/markdown-doc/edit)`
    );
    const output = ['https://docs.google.com/document/d/markdown-doc/edit'];

    expect(input).toEqual(output);
});

it('should handle links with view mode', () => {
    const input = find(`https://docs.google.com/document/d/view-doc/view`);
    const output = ['https://docs.google.com/document/d/view-doc/view'];

    expect(input).toEqual(output);
});

it('should handle links with preview mode', () => {
    const input = find(`https://docs.google.com/document/d/preview-doc/preview`);
    const output = ['https://docs.google.com/document/d/preview-doc/preview'];

    expect(input).toEqual(output);
});

it('should throw error with specific message for non-string', () => {
    expect(() => find(123)).toThrowError('text is not a string (passed argument)');
    expect(() => find(true)).toThrowError('text is not a string (passed argument)');
});

it('should find Google Drawings links', () => {
    const input = find(
        `Drawing: https://docs.google.com/drawings/d/drawing123/edit`
    );
    const output = ['https://docs.google.com/drawings/d/drawing123/edit'];

    expect(input).toEqual(output);
});

it('should find multiple different Google product links', () => {
    const input = find(
        `
        Doc: https://docs.google.com/document/d/doc1/edit
        Sheet: https://docs.google.com/spreadsheets/d/sheet1/edit
        Slide: https://docs.google.com/presentation/d/slide1/edit
        Form: https://docs.google.com/forms/d/form1/viewform
        `
    );
    const output = [
        'https://docs.google.com/document/d/doc1/edit',
        'https://docs.google.com/spreadsheets/d/sheet1/edit',
        'https://docs.google.com/presentation/d/slide1/edit',
        'https://docs.google.com/forms/d/form1/viewform',
    ];

    expect(input).toEqual(output);
});
