import React from 'react';

import {cardClicked} from "./model";
import {StyledCard} from "./ui";

export const Card = ({rank, suit, id, open, disable}) => {

    const clickHandler = () => {
        if (open || disable) return;
        cardClicked({rank, suit, id, open, disable})
    }

    return (
        <StyledCard
           open={open}
           disable={disable}
           rank={rank}
           suit={suit}
           clickHandler={clickHandler}
        />
    )
}
