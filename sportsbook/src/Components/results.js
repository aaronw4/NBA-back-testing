import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ResultsContext } from '../Context/ResultsContext';
import { ResultCount } from '../Functions/resultCount';
import { ResultCount2 } from '../Functions/resultCount2';

const Results = () => {
    const {inputResults} = useContext(ResultsContext)
    let count = []
    let count2 = []

    count.push(ResultCount('Season +4', 'sp4ResultSpread', 'sp4ResultTotal', 'sp', '4'))
    count.push(ResultCount('Season (Away/Home) +4', 'slp4ResultSpread', 'slp4ResultTotal', 'slp', '4'))
    count.push(ResultCount('Last Ten +4', 'lp4ResultSpread', 'lp4ResultTotal', 'lp', '4'))
    count.push(ResultCount('Last Ten (Away/Home) +4', 'llp4ResultSpread', 'llp4ResultTotal', 'llp', '4'))
    count2.push(ResultCount2('Season and Last Ten +4', 'sp4ResultSpread', 'lp4ResultSpread', 'sp4ResultTotal', 'lp4ResultTotal'))
    count2.push(ResultCount2('Season (Away/Home) and Last Ten (Away/Home) +4', 'slp4ResultSpread', 'llp4ResultSpread', 'slp4ResultTotal', 'llp4ResultTotal'))
    count2.push(ResultCount2('Season and Season (Away/Home) +4', 'sp4ResultSpread', 'slp4ResultSpread', 'sp4ResultTotal', 'slp4ResultTotal'))

    return (
        <div>
            <h2 className='header'>Projected Line Results</h2>
            <div className='resultsCont'>
                {count.map(results => (
                    <Link className='resultsItem' onClick={() => inputResults(results)} to='/results-details'>
                        <h5>{results.name}</h5>
                        <p>Spread Results: {results.spreadWon}/{results.spreadTotal} ({(results.spreadWon/results.spreadTotal*100).toFixed(1)}%)</p>
                        <p>Total Results: {results.totalWon}/{results.totalTotal}  ({(results.totalWon/results.totalTotal*100).toFixed(1)}%)</p>
                        {/* <p>Total Over Results: {results.totalOverWon}/{results.totalOver} ({(results.totalOverWon/results.totalOver*100).toFixed(1)}%)</p>
                        <p>Total Under Results: {results.totalUnderWon}/{results.totalUnder} ({(results.totalUnderWon/results.totalUnder*100).toFixed(1)}%)</p>
                        <p>Actual Avg Totals: Away({results.pointsAwayAvg}), Home({results.pointsHomeAvg}), Combined({results.pointsAvg})</p>
                        <p>Projected Avg Totals: Away({results.projPointsAwayAvg}), Home({results.projPointsHomeAvg}), Combined ({results.projPointsAvg})</p> */}
                    </Link>
                ))}
            </div>
            <div className='resultsCont'>
                {count2.map(results => (
                    <div className='resultsItem'>
                        <h5>{results.name}</h5>
                        <p>Spread Results: {results.spreadWon}/{results.spreadTotal} ({(results.spreadWon/results.spreadTotal*100).toFixed(1)}%)</p>
                        <p>Total Results: {results.totalWon}/{results.totalTotal}  ({(results.totalWon/results.totalTotal*100).toFixed(1)}%)</p>
                    </div>
                ))}
            </div>
            <Link to='/results-compare'>
                <button>Side-by-Side Score Comparison</button>
            </Link>
        </div>
    )
}

export default Results