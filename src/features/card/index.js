import React from 'react';
import styled from "styled-components";

import {cardClicked} from "./model";

const Wrapper = styled.div`
  height: 250px;
  background: burlywood;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = ({rank, suit, id, open}) => {

   return (
       <Wrapper open={open} onClick={() => cardClicked({rank, suit, id, open})}>
          {rank} - {suit} - {open.toString()}
       </Wrapper>
   )
}
