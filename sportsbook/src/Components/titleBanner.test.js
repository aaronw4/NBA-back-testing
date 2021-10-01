import React from 'react';
import { renderWithRouter, screen } from '../test-utils';
import TitleBanner from './titleBanner';

it('Displays Title Banner', () => {
    renderWithRouter(<TitleBanner/>)
    screen.getByText('NBA Sports Betting Analysis: 2020/2021 Season')
})

it('Displays Home button', () => {
    renderWithRouter(<TitleBanner/>)
    screen.getByRole('button', {name: /Home/i})
})

it('Is a link to Home Page', () => {
    const {getByRole} = renderWithRouter(<TitleBanner/>)
    const link = getByRole("button", {name: /Home/i})
    expect(link.closest('a')).toHaveAttribute('href', '/')
})