const find = require('../src').find;

it('should be a function', () => {
    expect(find).toEqual(jasmine.any(Function));
});

it('should inform that non-string is passed', () => {
    expect(() => {
        find(null)
    }).toThrowError();
    expect(() => {
        find(undefined)
    }).toThrowError();
    expect(() => {
        find([])
    }).toThrowError();
    expect(() => {
        find({})
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
    const output = [
        'https://docs.google.com/document/d/super-uniq-id/edit'
    ];

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
