export const getMarkedCard = (cards, selectedCard) => {
    return cards.map((card) => {
        if (card.id === selectedCard.id) {
            return {
                ...card,
                open: true
            }
        }
        return card;
    })
}

export const getComparedFailed = (deck, {cards}) => {
    const [firstCard, secondCard] = cards;

    return deck.map(card => {
        if (card.id === firstCard.id || card.id === secondCard.id) {
            return {
                ...card,
                open: false
            }
        }
        return card
    })
}

export const getComparedSuccess = (deck, {cards}) => {
    const [firstCard, secondCard] = cards;

    return deck.map(card => {
        if (card.id === firstCard.id || card.id === secondCard.id) {
            return {
                ...card,
                open: true,
                disable: true
            }
        }
        return card
    })
}
