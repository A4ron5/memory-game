import {createStore, sample} from "effector";

import {cardSelected} from "../card/model";
import {comparedCardsFailed, comparedCardsSuccess} from "../comparator/model";

import {history} from "../../lib/routing";
import {createDeck} from "../../api";
import {getMarkedCard, getComparedFailed, getComparedSuccess} from "../../lib/getCards";

export const $cards = createStore(createDeck());

const cardMarked = sample($cards, cardSelected, getMarkedCard)
const comparedFailed = sample($cards, comparedCardsFailed, getComparedFailed);
const comparedSucccess = sample($cards, comparedCardsSuccess, getComparedSuccess)

$cards
    .on(cardMarked, (_, payload) => payload)
    .on(comparedFailed, (_, payload) => payload)
    .on(comparedSucccess, (_, payload) => payload)
;
$cards.watch(cards => {
    const isGameOver = cards.every(card => card.open === true)

    if (isGameOver) {
        history.push('/end')
    }
})

$cards.watch(console.log)
