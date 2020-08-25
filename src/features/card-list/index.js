import React from 'react';
import {useList} from "effector-react";

import {$cards} from "./model";

import {Card} from "../card";
import {Wrapper} from "./ui";

export const CardList = () => {
    const cards = useList($cards, ({rank, suit, id, open}) => (
        <Card rank={rank} suit={suit} open={open} id={id}/>
    ))

    return (
        <Wrapper>{cards}</Wrapper>
    )
}
