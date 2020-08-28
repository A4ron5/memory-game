import {createStore, sample} from "effector";

import {cardSelected} from "../card/model";
import {comparedCardsFailed, comparedCardsSuccess} from "../comparator/model";

import {createDeck} from "../../api";
import {getMarkedCards} from "../../lib/getMarkedCards";

export const $cards = createStore(createDeck());

const cardMarked = sample($cards, cardSelected, getMarkedCards)

$cards
    .on(cardMarked, (_, payload) => payload)
    .on(comparedCardsSuccess, () => {})
    .on(comparedCardsFailed, () => {})
;

$cards.watch(console.log)
