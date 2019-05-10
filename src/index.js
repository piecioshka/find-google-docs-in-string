const GOOGLE_DOCS_REGEXP = (/https?\:\/\/docs\.google\.com\/([\w\/-]*)/gmi);

module.exports = {
    find(text) {
        if (typeof text !== 'string') {
            throw new Error('text is not a string (passed argument)');
        }

        const result = [];
        const docs = text.match(GOOGLE_DOCS_REGEXP);
        result.push(...docs);
        return result;
    }
};
