import {shuffle} from "../lib/shuffle";

const suits = ["diamonds", "spades", "hearts", "clubs"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const createCard = (rank, suit) => {
    return {
        rank,
        suit,
        open: false
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

    const deckWithoutPair = fullDeck.slice(0,9);

    const deckPaired = [...deckWithoutPair, ...deckWithoutPair];

    shuffle(deckPaired);

    return deckPaired;
};

