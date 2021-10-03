import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ResultsContext } from '../Context/ResultsContext';
import { ResultCount } from '../Functions/resultCount';
import { ResultCount2 } from '../Functions/resultCount2';

const Results = () => {
    const {inputResults} = useContext(ResultsContext)
    let count = []
    let count2 = []

    count.push(ResultCount('Season Team Stats', 'sp4ResultSpread', 'sp4ResultTotal', 'sp', '4'))
    count.push(ResultCount('Season Home/Away Team Stats', 'slp4ResultSpread', 'slp4ResultTotal', 'slp', '4'))
    count.push(ResultCount('Last Ten Games Team Stats', 'lp4ResultSpread', 'lp4ResultTotal', 'lp', '4'))
    count.push(ResultCount('Last Ten Games Home/Away Team Stats', 'llp4ResultSpread', 'llp4ResultTotal', 'llp', '4'))
    count2.push(ResultCount2('Season Stats and Last Ten Stats Agree', 'sp4ResultSpread', 'lp4ResultSpread', 'sp4ResultTotal', 'lp4ResultTotal'))
    count2.push(ResultCount2('Season Home/Away Stats and Last Ten Home/Away Stats Agree', 'slp4ResultSpread', 'llp4ResultSpread', 'slp4ResultTotal', 'llp4ResultTotal'))
    count2.push(ResultCount2('Season and Season Home/Away Agree', 'sp4ResultSpread', 'slp4ResultSpread', 'sp4ResultTotal', 'slp4ResultTotal'))
    count2.push(ResultCount2('Last Ten Stats and Last Ten Home/Away Stats Agree', 'lp4ResultSpread', 'llp4ResultSpread', 'lp4ResultTotal', 'llp4ResultTotal'))

    return (
        <div className='resultsPage'>
            <div className='header'>
                <h2>Handicapping Method Summary</h2>
                <p>Total games examined: {count[0].totalGames}</p>
                <Link to='/results-compare'>
                    <button className='btn btn-primary'>See Side-by-Side Scores Comparison</button>
                </Link>
            </div>
            <div className='resultsCont'>
                {count.map(results => (
                    <div className="card text-white bg-secondary mb-3 hcSummary" key={results.name}>
                        <h5 className="card-header">{results.name}</h5>
                        <div>
                            <p className='hcP'>Spread Results: {results.spreadWon}/{results.spreadTotal} ({(results.spreadWon/results.spreadTotal*100).toFixed(1)}%)</p>
                            <p>Total Results: {results.totalWon}/{results.totalTotal}  ({(results.totalWon/results.totalTotal*100).toFixed(1)}%)</p>
                            {/* <p>Total Over Results: {results.totalOverWon}/{results.totalOver} ({(results.totalOverWon/results.totalOver*100).toFixed(1)}%)</p>
                            <p>Total Under Results: {results.totalUnderWon}/{results.totalUnder} ({(results.totalUnderWon/results.totalUnder*100).toFixed(1)}%)</p>
                            <p>Actual Avg Totals: Away({results.pointsAwayAvg}), Home({results.pointsHomeAvg}), Combined({results.pointsAvg})</p>
                            <p>Projected Avg Totals: Away({results.projPointsAwayAvg}), Home({results.projPointsHomeAvg}), Combined ({results.projPointsAvg})</p> */}
                            <Link className='link' onClick={() => inputResults(results)} to='/results-details'>
                                <button className="btn btn-primary">
                                    See Detailed Results
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='divider'/>
            <div className='resultsCont'>
                {count2.map(results => (
                    <div className="card text-white bg-secondary mb-3 hcSummary" key={results.name}>
                        <h5 className="card-header">{results.name}</h5>
                        <p className='hcP'>Spread Results: {results.spreadWon}/{results.spreadTotal} ({(results.spreadWon/results.spreadTotal*100).toFixed(1)}%)</p>
                        <p>Total Results: {results.totalWon}/{results.totalTotal}  ({(results.totalWon/results.totalTotal*100).toFixed(1)}%)</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Results