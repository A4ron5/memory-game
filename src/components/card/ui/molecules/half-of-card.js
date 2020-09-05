import React from 'react';
import styled from "styled-components";

import {Rank, Suit} from "../atoms";

const StyledHalfOfCad = styled.div`
  transform: ${({bottom}) => bottom && 'rotate(180deg)'};
  margin-top: ${({bottom}) => bottom && 'auto'};
`;

export const HalfOfCard = ({rank, suit, bottom}) => (
    <StyledHalfOfCad bottom={bottom}>
        <Rank color={suit.color}>{rank}</Rank>
        <br/>
        <Suit color={suit.color}>{suit.symbol}</Suit>
    </StyledHalfOfCad>
);
