import {createEvent, createEffect, createStore} from "effector";
import {createDeck} from "../../api";

export const cardClicked = createEvent();
export const cardSelected = createEvent();
export const cardCompared = createEvent();
export const cardComparingFinished = createEvent();

export const cardComparingSuccessFx = createEffect({
    handler: res => new Promise((resolve) => {
        setTimeout(() => resolve(res), 1500)
    })
})
export const cardComparingFailedFx = createEffect({
    handler: res => new Promise((_, reject) => {
        setTimeout(() => reject(res), 1500)
    })
})

export const $cards = createStore(createDeck());
export const $comparingCards = createStore([]);

export const $isCardsLessThanTwo = $comparingCards.map(cards => cards.length < 2)
export const $isPairOfCards = $comparingCards.map(cards => cards.length === 2);

$comparingCards.watch(console.log)
$isPairOfCards.watch(console.log)
