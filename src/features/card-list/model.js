import {createEvent, createStore, sample, guard, split} from "effector";

import {$selectedCards, selectedCardsCleared} from "../card/model";
import {createDeck} from "../../api";
import {cardsEqual} from "../../lib/cardsEqual";

export const $cards = createStore(createDeck());
export const $isCardPair = $selectedCards.map(cards => cards.length === 2);
export const $isCardPairSimilar= createStore(false);

export const recreateDeck = createEvent();
export const comparedCards = createEvent();
export const comparedCardsFinished = createEvent();

$cards.on(recreateDeck, () => createDeck());

guard({
    source: $selectedCards,
    filter: $isCardPair,
    target: comparedCards
})

sample({
    source: $selectedCards,
    clock: comparedCards,
    fn: source => cardsEqual(...source),
    target: comparedCardsFinished
})

guard({
    source: comparedCardsFinished,
    filter: value => value,
    target: selectedCardsCleared
})

// guard({
//     source: comparedCardsFinished,
//     filter: value => !value
// })

$cards.watch(console.log)
