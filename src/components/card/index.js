import React from 'react';

import { StyledCard } from './ui';

import { cardClicked } from '../../models/cards';

export const Card = ({ rank, suit, id, open, disable }) => {
	const clickHandler = () => {
		cardClicked({ rank, suit, id, open, disable });
	};
	console.log(open);
	return (
		<StyledCard open={open} disable={disable} rank={rank} suit={suit} clickHandler={clickHandler} />
	);
};
