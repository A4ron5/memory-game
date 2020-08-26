export const getMarkedCards = (cards, selectedCard) => {
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
