import {$score} from "./index";
import {cardComparingSuccessFx, cardComparingFailedFx} from "../cards";

$score
    .on(cardComparingSuccessFx.doneData, score => score + 75)
    .on(cardComparingFailedFx.failData, score => score - 35)
