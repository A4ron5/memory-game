import {createEvent, createEffect, createStore} from "effector";
import {createDeck} from "../../api";

export const cardClicked = createEvent();
export const cardSelected = createEvent();
export const cardCompared = createEvent();

export const cardComparingFinishedFx = createEffect({
    handler: res => new Promise((resolve, reject) => {
        setTimeout(() => {
            const {status, cards} = res;

            if (status === 'success') {
                resolve(cards)
            } else {
                reject(cards)
            }
        }, 1000)
    })
});


export const $cards = createStore(createDeck());
export const $comparingCards = createStore([]);

export const $isCardsLessThanTwo = $comparingCards.map(cards => cards.length < 2)
export const $isPairOfCards = $comparingCards.map(cards => cards.length === 2);
export const $isGameOver = $cards.map(cards => cards.every(card => card.disable === true));

$comparingCards.watch(console.log)
$isPairOfCards.watch(console.log)
$isGameOver.watch(console.log)
