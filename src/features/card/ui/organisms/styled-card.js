import React from 'react';
import styled, {css} from "styled-components";

import {HalfOfCard} from "../molecules";
import {BigSuit} from "../molecules";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 168px;
  width: 120px;
  padding: 0.5rem 0.3rem;
  background: #fff;
  border-radius: 0.5rem;
  transition: all .2s ease-in-out;
  
  &:hover {
    transform: scale(1.05) 
  }
  
  ${({open}) => open && css`
    background: rgba(255,255,255,0.6);
    
    &:hover {
      transform: none;
    }
  `}
`;

export const StyledCard = ({rank, suit, open, clickHandler}) => (
  <Layout open={open} onClick={clickHandler}>
      <HalfOfCard rank={rank} suit={suit}/>
      <BigSuit suit={suit}/>
      <HalfOfCard rank={rank} suit={suit} bottom/>
  </Layout>
)
