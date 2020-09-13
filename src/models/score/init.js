import { $score } from './index';
import { attachedCardComparingFinishedFx } from '../cards/init';

$score
	.on(attachedCardComparingFinishedFx.doneData, (score) => score + 75)
	.on(attachedCardComparingFinishedFx.failData, (score) => score - 35);
