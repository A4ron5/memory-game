import {createEvent, createEffect, createStore, guard, sample, forward} from "effector";

import {cardClicked, cardSelected} from "../card/model";

import {compareCards} from "../../lib/compareCards";

export const selectedCardsCleared = createEvent();
const comparedCards = createEvent();
export const comparedCardsFinished = createEvent();
export const comparedCardsSuccess = createEvent();
export const comparedCardsFailed = createEvent();


const $isComparing = createStore(false);
const $selectedCards = createStore([]);

const $isCardPair = $selectedCards.map(cards => cards.length === 2);
const $isCardsLessThanTwo = $selectedCards.map(cards => cards.length < 2)

$selectedCards
    .on(cardSelected, (state, card) => [...state, card])
    .reset(selectedCardsCleared);

$isComparing
    .on(comparedCards, () => true)
    .reset(comparedCardsFinished)

guard({
    source: cardClicked,
    filter: sample({
        source: $isCardsLessThanTwo,
        clock: $isComparing,
        fn: (source, clock) => source && !clock
    }),
    target: cardSelected
})

guard({
    source: $selectedCards,
    filter: $isCardPair,
    target: comparedCards
})

sample({
    source: $selectedCards,
    clock: comparedCards,
    fn: source => compareCards(...source),
    target: comparedCardsFinished
})

guard({
    source: comparedCardsFinished,
    filter: value => Array.isArray(value),
    target: [comparedCardsFailed, selectedCardsCleared]
})

guard({
    source: comparedCardsFinished,
    filter: value => !Array.isArray(value),
    target: [comparedCardsSuccess, selectedCardsCleared]
})

// forward({
//     from: [comparedCardsSuccess, comparedCardsFailed],
//     to: delayedAfterCompared
// })
