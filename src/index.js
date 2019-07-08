const GOOGLE_DOCS_REGEXP = (/https?\:\/\/docs\.google\.com\/([\w\/-]*)/gmi);

module.exports = {
    find(text) {
        if (typeof text !== 'string') {
            throw new Error('text is not a string (passed argument)');
        }
        
        return text.match(GOOGLE_DOCS_REGEXP) || [];
    }
};
