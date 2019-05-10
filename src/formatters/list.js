module.exports = {
    format(array = []) {
        return array.map(i => `- ${i}`).join('\n');
    }
};
