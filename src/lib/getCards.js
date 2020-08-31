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

export const getUnmarkedCards = (cards, [firstCard, secondCard]) => {
    return cards.map(card => {
        if (card.id === firstCard.id || card.id === secondCard.id) {
            return {
                ...card,
                open: false
            }
        }
        return card
    })
}
