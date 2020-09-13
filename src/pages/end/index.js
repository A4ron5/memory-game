import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Counter } from '../../components/counter';
import { Button } from '../../ui/atoms';

const Container = styled.div`
	color: #fff;
	margin: 300px auto 0;
`;

export const EndPage = () => {
	return (
		<Container>
			<Counter secondary />
			<Button>
				<Link to="/game">Try again</Link>
			</Button>
		</Container>
	);
};
