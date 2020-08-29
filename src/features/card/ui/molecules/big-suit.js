import React from 'react';
import styled from "styled-components";

import {Suit} from "../atoms";

const StyledBigSuit = styled.div`
  margin: 0 auto;
  ${Suit} {
    font-size: 2.5rem;
  }
`

export const BigSuit = ({suit}) => (
    <StyledBigSuit>
        <Suit color={suit.color}>{suit.symbol}</Suit>
    </StyledBigSuit>
)
