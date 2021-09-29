import React from 'react';
import { renderWithRouter, screen } from '../test-utils';
import Home from './home';

it('Displays loading page', () => {
    renderWithRouter(<Home/>)
    screen.getByText('Loading...')
});