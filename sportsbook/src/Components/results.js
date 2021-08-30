import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ResultsContext } from '../Context/ResultsContext';
import { resultCount } from '../Functions/resultCount';
import { resultCount2 } from '../Functions/resultCount2';
import { actualResults } from '../Functions/actualResults';

const Results = () => {
    const {inputResults} = useContext(ResultsContext)
    const results = actualResults()
    let count = []
    let count2 = []

    count.push(resultCount('Season +4', 'sp4ResultSpread', 'sp4ResultTotal', 'sp', '4'))
    count.push(resultCount('Season +3', 'sp3ResultSpread', 'sp3ResultTotal', 'sp', '3'))
    count.push(resultCount('Season +2', 'sp2ResultSpread', 'sp2ResultTotal', 'sp', '2'))
    count.push(resultCount('Season (Away/Home) +4', 'slp4ResultSpread', 'slp4ResultTotal', 'slp', '4'))
    count.push(resultCount('Season (Away/Home) +3', 'slp3ResultSpread', 'slp3ResultTotal', 'slp', '3'))
    count.push(resultCount('Season (Away/Home) +2', 'slp2ResultSpread', 'slp2ResultTotal', 'slp', '2'))
    count.push(resultCount('Last Ten +4', 'lp4ResultSpread', 'lp4ResultTotal', 'lp', '4'))
    count.push(resultCount('Last Ten +3', 'lp3ResultSpread', 'lp3ResultTotal', 'lp', '3'))
    count.push(resultCount('Last Ten +2', 'lp2ResultSpread', 'lp2ResultTotal', 'lp', '2'))
    count.push(resultCount('Last Ten (Away/Home) +4', 'llp4ResultSpread', 'llp4ResultTotal', 'llp', '4'))
    count.push(resultCount('Last Ten (Away/Home) +3', 'llp3ResultSpread', 'llp3ResultTotal', 'llp', '3'))
    count.push(resultCount('Last Ten (Away/Home) +2', 'llp2ResultSpread', 'llp2ResultTotal', 'llp', '3'))
    count2.push(resultCount2('Season and Last Ten +4', 'sp4ResultSpread', 'lp4ResultSpread', 'sp4ResultTotal', 'lp4ResultTotal'))
    count2.push(resultCount2('Season (Away/Home) and Last Ten (Away/Home) +4', 'slp4ResultSpread', 'llp4ResultSpread', 'slp4ResultTotal', 'llp4ResultTotal'))
    count2.push(resultCount2('Season and Season (Away/Home) +4', 'sp4ResultSpread', 'slp4ResultSpread', 'sp4ResultTotal', 'slp4ResultTotal'))

    return (
        <div>
            <h2 className='header'>Projected Line Results</h2>
            <div>
                <p>Games Over: {results.overWins}</p>
                <p>Games Under: {results.underWins}</p>
                <p>Favorite Covered: {results.favWins}</p>
                <p>Dog Covered: {results.dogWins}</p>
            </div>
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
        </div>
    )
}

export default Results