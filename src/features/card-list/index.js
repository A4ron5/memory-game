import React from 'react';
import {useList} from "effector-react";

import {$cards} from "./model";

import {Card} from "../card";
import {Wrapper} from "./ui";

export const CardList = () => {
    const cards = useList($cards, ({rank, suit, open}) => (
        <Card rank={rank} suit={suit} open={open}/>
    ))

    return (
        <Wrapper>{cards}</Wrapper>
    )
}
