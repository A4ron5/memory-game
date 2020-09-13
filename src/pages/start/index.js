import React from 'react';
import { Link } from 'react-router-dom';

import { Logotype } from '../../components/logotype';
import { Button } from '../../ui/atoms';

export const StartPage = () => {
	return (
		<div>
			<Logotype />
			<Button>
				<Link to="game">Start</Link>
			</Button>
		</div>
	);
};
