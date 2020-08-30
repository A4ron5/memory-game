import React from 'react';
import styled from "styled-components";

import {HalfOfCard} from "../molecules";
import {BigSuit} from "../molecules";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 168px;
  width: 120px;
  padding: 0.5rem 0.3rem;
  background: ${({open}) => open ? 'rgba(255,255,255,0.6)' : '#fff'};
  border-radius: 0.5rem;
`;

export const StyledCard = ({rank, suit, open, clickHandler}) => (
  <Layout open={open} onClick={clickHandler}>
      <HalfOfCard rank={rank} suit={suit}/>
      <BigSuit suit={suit}/>
      <HalfOfCard rank={rank} suit={suit} bottom/>
  </Layout>
)
