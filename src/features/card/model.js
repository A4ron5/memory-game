import {createStore, createEvent, guard} from "effector";

export const $selectedCards = createStore([]);
export const $isCardsLessThanTwo = $selectedCards.map(cards => cards.length < 2)

export const selectedCardsCleared = createEvent();
export const cardClicked = createEvent();
export const cardSelected = createEvent();

guard({
    source: cardClicked,
    filter: $isCardsLessThanTwo,
    target: cardSelected
})

$selectedCards
    .on(cardSelected, (state, card) => [...state, card])
    .reset(selectedCardsCleared);

$selectedCards.watch(console.log)
