function isCool(text) {
    text = text.toLowerCase();
    if (text === 'y') {
        return true;
    } else if (text === 'yes') {
        return true;
    } else if (text === 'yellow') {
        return true;
    } else {
        return false;
    }
}

export default isCool;