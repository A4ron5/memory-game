import React from 'react';

import { resetedCards } from '../../models/reset';
import { Button } from '../../ui/atoms';

export const RestartButton = ({ secondary }) => {
	const clickHandler = () => {
		resetedCards();
	};

	return (
		<Button onClick={clickHandler} secondary={secondary}>
			Restart
		</Button>
	);
};
