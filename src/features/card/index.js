import React from 'react';

import {cardClicked} from "./model";
import {StyledCard} from "./ui";

export const Card = ({rank, suit, id, open}) => {

    const clickHandler = () => {
        if (open) return;
        cardClicked({rank, suit, id, open})
    }

    return (
        <StyledCard
           open={open}
           rank={rank}
           suit={suit}
           clickHandler={clickHandler}
        />
    )
}
