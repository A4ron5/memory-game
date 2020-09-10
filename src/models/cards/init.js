import {sample, guard, attach, forward} from 'effector';
import {history} from "../../lib/routing";

import {
    initedCards,
    cardClicked,
    cardSelected,
    cardCompared,
    cardComparingFinishedFx,
    $cards,
    $isCardsLessThanTwo,
    $isPairOfCards,
    $comparingCards,
    $isGameOver,
    GamePageGate
} from "./index";

import {compareCards} from "../../lib/compareCards";

const attachedInitedCards = attach({
    effect: initedCards,
    source: $cards,
    mapParams: (_, cards) => {
        const openedCards = cards.map(card => ({...card, open: true}))
        const closedCards = cards.map(card => ({...card, open: false}))

        setTimeout(() => {
            return closedCards;
        }, 5000)
        return openedCards;
    }
})

forward({
    from: GamePageGate.open,
    to: attachedInitedCards
})

cardComparingFinishedFx.use(res => new Promise((resolve, reject) => {
        setTimeout(() => {
            const {status, cards} = res;

            if (status === 'success') {
                resolve(cards)
            } else {
                reject(cards)
            }
        }, 1000)
    })
)

export const attachedCardComparingFinishedFx = attach({
    effect: cardComparingFinishedFx,
    source: $cards,
    mapParams: (comparingCards, cards) => {
        const {cards: [firstCard, secondCard], status} = comparingCards;

        const newCards = cards.map((card) => {
            if (firstCard.id === card.id) {
                return firstCard
            }
            if (secondCard.id === card.id) {
                return secondCard
            }
            return card
        })

        return {
            cards: newCards,
            status
        }
    }
})

$comparingCards
    .on(cardSelected, (selected, card) => [...selected, card])
    .reset(attachedCardComparingFinishedFx.finally)

$cards
    .on(attachedInitedCards, (_, cards) => cards)
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
    .on(
        [attachedCardComparingFinishedFx.doneData, attachedCardComparingFinishedFx.failData],
        (_, cards) => cards
    )

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
    target: attachedCardComparingFinishedFx
})

$isGameOver.watch(isOver => {
    if (isOver) {
        history.push('/end');
    }
})
