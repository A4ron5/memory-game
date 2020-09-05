import {createEvent} from "effector";

import {$cards} from "../card-list/model";
import {$counter} from '../counter/model';
import {createDeck} from "../../api";

export const restart = createEvent();

$cards.on(restart, () => createDeck());

$counter.reset(restart);
