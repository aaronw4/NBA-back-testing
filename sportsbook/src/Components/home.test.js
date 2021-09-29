import React from 'react';
import { renderWithRouter, screen } from '../test-utils';
import Home from './home';

it('Displays loading page with no results', () => {
    renderWithRouter(<Home/>)
    screen.getByText('Loading...')
});

it('Doesnt display loading page with results', () => {
    const {queryByText} = renderWithRouter(<Home/>, {"stats": 1}, {"results": 2})
    expect(queryByText(/Loading.../i)).toBeNull()
})

it('Displays home page', () => {
    renderWithRouter(<Home/>)
    screen.getByText('Handicapping Method')
    screen.getByText('Line Movement Method')
    screen.getByText('Vegas Predictions')
})