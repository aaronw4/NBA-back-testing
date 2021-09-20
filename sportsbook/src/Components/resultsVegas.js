import React from 'react';
import {Link} from 'react-router-dom'
import { ActualResults } from '../Functions/actualResults';

const ResultsVegas = () => {
    const results = ActualResults()

    return (
        <div>
            <div className='header'>
                <h2>Vegas Line Summary</h2>
            </div>
            <div className='resultsCont'>
                <div class="card text-white bg-secondary mb-3 hcSummary">
                    <h5 class="card-header">Vegas vs Actual Results</h5>
                    <div>
                        <p class='hcP'>Average Points per Game: {results.pointsAvg}</p>
                        <p>Vegas Avg Points per Game: {results.vegasPointsAve}</p>
                        <p>Games Over: {results.overWins}</p>
                        <p>Games Under: {results.underWins}</p>
                        <p>Favorite Covered: {results.favWins}</p>
                        <p>Dog Covered: {results.dogWins}</p>
                    </div>
                    <Link to='vegas-details'>
                        <button class="btn btn-primary">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResultsVegas