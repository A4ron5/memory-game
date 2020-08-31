export const compareCards = (first, second) => {
    const keys = Object.keys(first);

    for (const key of keys) {
        if (key === 'id') {
            if (first[key] !== second[key]) {
                return true;
            }
        }
        if (first[key] !== second[key]) {
            return [first, second];
        }
    }

    return true;
}
