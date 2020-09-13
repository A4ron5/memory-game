import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import { createDeck } from '../../api';

export const cardsOpenedInit = createEvent();
export const cardClicked = createEvent();
export const cardSelected = createEvent();
export const cardCompared = createEvent();

export const cardsClosedInitFx = createEffect();
export const cardComparingFinishedFx = createEffect();

export const $cards = createStore(createDeck());
export const $comparingCards = createStore([]);

export const $isCardsLessThanTwo = $comparingCards.map((cards) => cards.length < 2);
export const $isPairOfCards = $comparingCards.map((cards) => cards.length === 2);
export const $isGameOver = $cards.map((cards) => cards.every((card) => card.disable === true));

export const GamePageGate = createGate();

$cards.watch(console.log);
