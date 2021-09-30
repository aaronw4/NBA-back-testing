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

it('Is a link to Handicapping Method Page', () => {
    const {getAllByRole} = renderWithRouter(<Home/>)
    const links = getAllByRole("button")
    expect(links[1].closest('a')).toHaveAttribute('href', '/results')
})

it('Is a link to Line Movement Method Page', () => {
    const {getAllByRole} = renderWithRouter(<Home/>)
    const links = getAllByRole("button")
    expect(links[2].closest('a')).toHaveAttribute('href', '/results-lineGrinding')
})

it('Is a link to Vegas Predictions Page', () => {
    const {getAllByRole} = renderWithRouter(<Home/>)
    const links = getAllByRole("button")
    expect(links[3].closest('a')).toHaveAttribute('href', '/results-vegas')
})