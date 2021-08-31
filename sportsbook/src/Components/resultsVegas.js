import React from 'react';
import {Link} from 'react-router-dom'
import { actualResults } from '../Functions/actualResults';

const ResultsVegas = () => {
    const results = actualResults()

    return (
        <div>
            <h2 className='header'>Vegas Line Results</h2>
            <div>
                <p>Average Points per Game: {results.pointsAvg}</p>
                <p>Vegas Avg Points per Game: {results.vegasPointsAve}</p>
                <p>Games Over: {results.overWins}</p>
                <p>Games Under: {results.underWins}</p>
                <p>Favorite Covered: {results.favWins}</p>
                <p>Dog Covered: {results.dogWins}</p>
            </div>
            <Link to='vegas-details'>
                <button>Details</button>
            </Link>
        </div>
    )
}

export default ResultsVegas