import React from "react";
import styled from "styled-components";

import {Layout} from "../../ui/layout";

import {CardList} from "../../components/card-list";
import {Counter} from "../../components/counter";
import {RestartButton} from "../../components/restart-button";

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`

export const GamePage = () => {

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
