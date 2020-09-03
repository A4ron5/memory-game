export const compareCards = (first, second) => {
    const keys = Object.keys(first);

    for (const key of keys) {
        if (key === 'id') {
            if (first[key] !== second[key]) {
                return {
                    status: 'success',
                    cards: [first, second]
                };
            }
        }
        if (first[key] !== second[key]) {
            return {
                status: 'failed',
                cards: [first, second]
            };
        }
    }

    return {
        status: 'success',
        cards: [first, second]
    };
}
