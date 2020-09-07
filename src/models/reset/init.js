import {$cards} from "../cards";
import {$score} from "../score";

import {resetedCards} from "./index";

import {createDeck} from "../../api";

$cards.on(resetedCards, () => createDeck());
$score.reset(resetedCards);
