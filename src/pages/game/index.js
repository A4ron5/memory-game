import React from 'react';
import styled from 'styled-components';
import { useGate } from 'effector-react';

import { GamePageGate } from '../../models/cards';

import { Layout } from '../../ui/layout';

import { CardList } from '../../components/card-list';
import { Counter } from '../../components/counter';

import '../../models/init';

const Container = styled.div`
	width: 1000px;
	margin: 0 auto;
`;

export const GamePage = () => {
	useGate(GamePageGate);

	return (
		<Layout>
			<Counter />
			<Container>
				<CardList />
			</Container>
		</Layout>
	);
};
