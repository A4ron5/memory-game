import {createEvent, createStore, sample, guard, split} from "effector";

import {$selectedCards, selectedCardsCleared, cardSelected} from "../card/model";
import {createDeck} from "../../api";
import {compareCards} from "../../lib/compareCards";
import {getMarkedCards} from '../../lib/getMarkedCards';

export const $cards = createStore(createDeck());
export const $isCardPair = $selectedCards.map(cards => cards.length === 2);
export const $isGameOver = $cards.map(card => !card.open)

export const recreatedDeck = createEvent();
const comparedCards = createEvent();
const comparedCardsFinished = createEvent();
const comparedCardsSuccess = createEvent();
const comparedCardsFailed = createEvent();
const cardSelectedSampled = sample($cards, cardSelected, getMarkedCards)

$cards
    .on(recreatedDeck, () => createDeck())
    .on(cardSelectedSampled, (_, payload) => payload);

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
    filter: value => value,
    target: [comparedCardsSuccess, selectedCardsCleared]
})

guard({
    source: comparedCardsFinished,
    filter: value => !value,
    target: [selectedCardsCleared]
})

$cards.watch(console.log)
