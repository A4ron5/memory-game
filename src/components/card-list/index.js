import React from 'react';
import {useList} from "effector-react";

import {$cards} from "./model";

import {Card} from "../card";
import {StyledCardList} from "./ui";

export const CardList = () => {
    const cards = useList($cards, ({rank, suit, id, open, disable}) => (
        <Card rank={rank} suit={suit} open={open} id={id} disable={disable}/>
    ))

    return (
        <StyledCardList>{cards}</StyledCardList>
    )
}
