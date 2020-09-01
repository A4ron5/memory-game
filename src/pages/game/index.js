import React from "react";
import styled from "styled-components";

import {Layout} from "../../ui/layout";

import {CardList} from "../../features/card-list";
import {Counter} from "../../features/counter";
import {RestartButton} from "../../features/restart-button";

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`

export const Game = () => {

  return (
    <Layout>
        <RestartButton/>
        <Counter/>
        <Container>
            <CardList/>
        </Container>
    </Layout>
  );
};
