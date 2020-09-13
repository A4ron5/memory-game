import React from 'react';
import styled, { css } from 'styled-components';

import { HalfOfCard } from '../molecules';
import { BigSuit } from '../molecules';

import back from '../../../../assets/back.jpg';

const Back = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 8px;
	background-image: url(${back});
`;

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	height: 168px;
	width: 120px;
	padding: 0.5rem 0.3rem;
	background: url(${back});
	border-radius: 0.5rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
	}

	${({ open }) =>
		open &&
		css`
			padding: 0.5rem 0.3rem;
			transform: scale(1.07);
			box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
			background: #fff;
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
		{open || disable ? (
			<>
				<HalfOfCard rank={rank} suit={suit} />
				<BigSuit suit={suit} />
				<HalfOfCard rank={rank} suit={suit} bottom />
			</>
		) : null}
	</Layout>
);
