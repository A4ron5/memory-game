export const compareCards = (first, second) => {
    const omitCardID = (card) => {
        const {id, ...left} = card;
        return left;
    }

    const firstCard = omitCardID(first)
    const secondCard = omitCardID(second)

    if (JSON.stringify(firstCard) === JSON.stringify(secondCard)) {
        return {
            status: 'success',
            cards: [{...first, disable: true}, {...second, disable: true}]
        }
    }

    return {
        status: 'failed',
        cards: [{...first, open: false}, {...second, open: false}]
    }
}
