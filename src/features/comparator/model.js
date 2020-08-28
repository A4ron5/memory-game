import {createEvent, createStore, guard, sample} from "effector";

import {cardClicked, cardSelected} from "../card/model";

import {compareCards} from "../../lib/compareCards";

export const selectedCardsCleared = createEvent();
const comparedCards = createEvent();
export const comparedCardsFinished = createEvent();
export const comparedCardsSuccess = createEvent();
export const comparedCardsFailed = createEvent();

const $selectedCards = createStore([]);

const $isCardPair = $selectedCards.map(cards => cards.length === 2);
const $isCardsLessThanTwo = $selectedCards.map(cards => cards.length < 2)

$selectedCards
    .on(cardSelected, (state, card) => [...state, card])
    .reset(selectedCardsCleared);

$selectedCards.watch(console.log)

guard({
    source: cardClicked,
    filter: $isCardsLessThanTwo,
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
    filter: value => !value,
    target: [comparedCardsFailed, selectedCardsCleared]
})

guard({
    source: comparedCardsFinished,
    filter: value => value,
    target: [comparedCardsSuccess, selectedCardsCleared]
})


