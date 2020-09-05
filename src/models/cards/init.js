import {sample, guard, split} from 'effector';

import {
    cardClicked,
    cardSelected,
    cardCompared,
    cardComparingFinished,
    cardComparingSuccessFx,
    cardComparingFailedFx,
    $cards,
    $isCardsLessThanTwo,
    $isPairOfCards,
    $comparingCards
} from "./index";

import {compareCards} from "../../lib/compareCards";

$comparingCards
    .on(cardSelected, (selected, card) => [...selected, card])
    .reset([cardComparingSuccessFx.doneData, cardComparingFailedFx.failData])

$cards
    .on(cardSelected, (cards, selectedCard) => {
        return cards.map((card) => {
            if (selectedCard.id === card.id) {
                return {
                    ...card,
                    open: true
                }
            }
            return card;
        })
    })
    .on(cardComparingSuccessFx.doneData, (cards, comparedCards) => {
        const {cards: [firstCard, secondCard]} = comparedCards;

        return cards.map((card) => {
            if (firstCard.id === card.id) {
                return firstCard
            }
            if (secondCard.id === card.id) {
                return secondCard
            }
            return card
        })
    })
    .on(cardComparingFailedFx.failData, (cards, comparedCards) => {
        const {cards: [firstCard, secondCard]} = comparedCards;

        return cards.map((card) => {
            if (firstCard.id === card.id) {
                return firstCard
            }
            if (secondCard.id === card.id) {
                return secondCard
            }
            return card
        })
    })

guard({
    source: cardClicked.filterMap((card) => {
        if (!card.open && !card.disable) {
            return card;
        }
    }),
    filter: $isCardsLessThanTwo,
    target: cardSelected
})

guard({
    source: cardSelected,
    filter: $isPairOfCards,
    target: cardCompared
})

sample({
    source: $comparingCards,
    clock: cardCompared,
    fn: cards => compareCards(...cards),
    target: cardComparingFinished
})

split({
    source: cardComparingFinished,
    match: {
        success: res => res.status === 'success',
        failed: res => res.status === 'failed'
    },
    cases: {
        success: cardComparingSuccessFx,
        failed: cardComparingFailedFx
    }
})
