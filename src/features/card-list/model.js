import {createEvent, createStore, forward, guard} from "effector";

import {$selectedCards, selectedCardsCleared} from "../card/model";
import {createDeck} from "../../api";

export const $cards = createStore(createDeck());
export const $isCardPair = $selectedCards.map(cards => cards.length === 2);
export const $isCardPairSimilar= createStore(false);

export const recreateDeck = createEvent();
export const comparedCards = createEvent();

$cards.on(recreateDeck, () => createDeck());

guard({
    source: $selectedCards,
    filter: $isCardPair,
    target: [selectedCardsCleared, comparedCards]
})


