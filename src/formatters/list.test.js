const listFormatter = require('./list').format;

it('should be a function', () => {
    expect(listFormatter).toEqual(expect.any(Function));
});

it('should returns a string', () => {
    expect(listFormatter()).toEqual(expect.any(String));
});

it('should empty string when call without any params', () => {
    expect(listFormatter()).toEqual('');
});

it('should returns proper list of links', () => {
    const input = listFormatter([
        'https://docs.google.com/document/d/super-uniq-id/edit',
        'https://docs.google.com/document/d/super-uniq-id-2/edit'
    ]);
    const output = '- https://docs.google.com/document/d/super-uniq-id/edit\n\- https://docs.google.com/document/d/super-uniq-id-2/edit';
    expect(input).toEqual(output);
});

it('should handle single item array', () => {
    const input = listFormatter([
        'https://docs.google.com/document/d/single/edit'
    ]);
    const output = '- https://docs.google.com/document/d/single/edit';
    expect(input).toEqual(output);
});

it('should handle array with three or more items', () => {
    const input = listFormatter([
        'https://docs.google.com/document/d/first/edit',
        'https://docs.google.com/document/d/second/edit',
        'https://docs.google.com/document/d/third/edit'
    ]);
    const output = '- https://docs.google.com/document/d/first/edit\n- https://docs.google.com/document/d/second/edit\n- https://docs.google.com/document/d/third/edit';
    expect(input).toEqual(output);
});

it('should handle empty array explicitly passed', () => {
    const input = listFormatter([]);
    expect(input).toEqual('');
});

it('should handle array with empty strings', () => {
    const input = listFormatter(['', '']);
    const output = '- \n- ';
    expect(input).toEqual(output);
});

it('should handle mixed content in array', () => {
    const input = listFormatter([
        'https://docs.google.com/document/d/doc/edit',
        'https://docs.google.com/spreadsheets/d/sheet/edit'
    ]);
    const output = '- https://docs.google.com/document/d/doc/edit\n- https://docs.google.com/spreadsheets/d/sheet/edit';
    expect(input).toEqual(output);
});

it('should preserve special characters in URLs', () => {
    const input = listFormatter([
        'https://docs.google.com/document/d/doc-with-dash_underscore/edit'
    ]);
    const output = '- https://docs.google.com/document/d/doc-with-dash_underscore/edit';
    expect(input).toEqual(output);
});
