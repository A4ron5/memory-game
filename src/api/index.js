import {shuffle} from "../lib/shuffle";
import {unify} from "../lib/unify";

const suits = [
    {symbol: '♦', color: 'red'},
    {symbol: '♠', color: 'black'},
    {symbol: '♥', color: 'red'},
    {symbol: '♣', color: 'black'}
    ];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const createCard = (rank, suit) => {
    return {
        rank,
        suit,
        open: false,
        disable: false
    };
};

export const createDeck = () => {
    let fullDeck = [];

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            fullDeck.push(createCard(ranks[j], suits[i]));
        }
    }

    shuffle(fullDeck);


    const leftDeckPart = fullDeck.slice(0,12);
    const rightDeckPart = leftDeckPart.map(card => Object.assign({}, card));

    const deckPaired = leftDeckPart.concat(rightDeckPart);

    shuffle(deckPaired);

    unify(deckPaired);
    return deckPaired;
};

