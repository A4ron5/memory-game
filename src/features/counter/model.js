import {createStore} from "effector";
import {comparedCardsSuccess, comparedCardsFailed} from '../comparator/model';

export const $counter = createStore(0);

$counter
    .on(comparedCardsSuccess, (state) => state + 70)
    .on(comparedCardsFailed, (state) => state - 35);
