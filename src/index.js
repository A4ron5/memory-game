import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

const renderTarget = document.getElementById('app');
render(<App />, renderTarget);
