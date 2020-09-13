import React from 'react';
import styled, { css } from 'styled-components';

import { HalfOfCard } from '../molecules';
import { BigSuit } from '../molecules';

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	height: 168px;
	width: 120px;
	padding: 0.5rem 0.3rem;
	background: #fff;
	border-radius: 0.5rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
	}

	${({ open }) =>
		open &&
		css`
			transform: scale(1.07);
			box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
		`}

	${({ disable }) =>
		disable &&
		css`
			background: rgba(255, 255, 255, 0.6);

			&:hover {
				box-shadow: none;
			}
		`}
`;

export const StyledCard = ({ rank, suit, disable, open, clickHandler }) => (
	<Layout disable={disable} open={open} onClick={clickHandler}>
		<HalfOfCard rank={rank} suit={suit} />
		<BigSuit suit={suit} />
		<HalfOfCard rank={rank} suit={suit} bottom />
	</Layout>
);
