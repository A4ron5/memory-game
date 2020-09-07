import React from 'react';

import {resetedCards} from "../../models/reset";
import {Button} from "../../ui/atoms";

export const RestartButton = () => {

    const clickHandler = () => {
        resetedCards()
    }

    return <Button onClick={clickHandler}>Restart</Button>
}
