import React from 'react';
import { renderWithRouter } from '../test-utils';
import Results from './results';
import {data} from '../Context/resutlsTesting';
import {stats} from '../Context/statsTesting';

it('Displays results page', () => {
    const {getByText, getAllByText} = renderWithRouter(<Results/>, stats, data)
    getByText('Handicapping Method Summary')
    getByText(/Total games examined:/i)
    getAllByText(/Spread Results:/i)
    getAllByText(/Total Results:/i)
})

it('Displays all buttons', () => {
    const {getByText, getAllByText} = renderWithRouter(<Results/>, stats, data)
    getByText('See Side-by-Side Scores Comparison')
    getAllByText('See Detailed Results')
})

it('First button links to /results-compare', () => {
    const {getAllByRole} = renderWithRouter(<Results/>, stats, data)
    const buttons = getAllByRole('button')
    expect(buttons[0].closest('a')).toHaveAttribute('href', '/results-compare')
})

it('Second button links to /results-details', () => {
    const {getAllByRole} = renderWithRouter(<Results/>, stats, data)
    const buttons = getAllByRole('button')
    expect(buttons[1].closest('a')).toHaveAttribute('href', '/results-details')
})