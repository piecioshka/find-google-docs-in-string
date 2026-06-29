const GOOGLE_DOCS_REGEXP = /https?\:\/\/docs\.google\.com\/([\w\/-]*)/gim;

export function find(text: string): string[] {
    if (typeof text !== 'string') {
        throw new Error('text is not a string (passed argument)');
    }
    return text.match(GOOGLE_DOCS_REGEXP) || [];
}
