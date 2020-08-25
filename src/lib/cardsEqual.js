import {shallowEqual} from "./shalowEqual";

export const cardsEqual = (first, second) => {
    const equal = shallowEqual(first, second);
    if (first.id === second.id) return false;
    return equal;
}
