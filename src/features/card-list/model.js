import {createStore, sample} from "effector";

import {cardSelected} from "../card/model";
import {comparedCardsFailed} from "../comparator/model";

import {history} from "../../lib/routing";
import {createDeck} from "../../api";
import {getMarkedCard, getUnmarkedCards} from "../../lib/getCards";

export const $cards = createStore(createDeck());

const cardMarked = sample($cards, cardSelected, getMarkedCard)
const cardsUnmarked = sample($cards, comparedCardsFailed, getUnmarkedCards);

$cards
    .on(cardMarked, (_, payload) => payload)
    .on(cardsUnmarked, (_, payload) => payload)
;
$cards.watch(cards => {
    const isGameOver = cards.every(card => card.open === true)

    if (isGameOver) {
        history.push('/end')
    }
})
