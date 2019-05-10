const listFormatter = require('../src/formatters/list').format;

it('should be a function', () => {
    expect(listFormatter).toEqual(jasmine.any(Function));
});

it('should returns a string', () => {
    expect(listFormatter()).toEqual(jasmine.any(String));
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
