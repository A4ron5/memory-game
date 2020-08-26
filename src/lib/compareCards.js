export const compareCards = (first, second) => {
    const keys = Object.keys(first);

    for (const key of keys) {
        if (key === 'id') {
            return first[key] !== second[key]
        }
        if (first[key] !== second[key]) {
            return false;
        }
    }

    return true;
}
