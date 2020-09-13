import React from 'react';
import { Router, Redirect } from 'react-router-dom';

import './models/init';

import { history } from './lib/routing';

import { Routes } from './routes';
import { GlobalStyles } from './ui/global';

export const App = () => {
	return (
		<>
			<GlobalStyles />
			<Router history={history}>
				<Redirect to="/start" />
				<Routes />
			</Router>
		</>
	);
};
