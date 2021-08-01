import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ResultsContext } from '../Context/ResultsContext';
import { resultCount } from '../Functions/resultCount';

const Results = () => {
    const {inputResults} = useContext(ResultsContext)
    let count = []

    count.push(resultCount('Season +4', 'sp4ResultSpread', 'sp4ResultTotal'))
    count.push(resultCount('Season +3', 'sp3ResultSpread', 'sp3ResultTotal'))
    count.push(resultCount('Season +2', 'sp2ResultSpread', 'sp2ResultTotal'))
    count.push(resultCount('Season Away/Home +4', 'slp4ResultSpread', 'slp4ResultTotal'))
    count.push(resultCount('Season Away/Home +3', 'slp3ResultSpread', 'slp3ResultTotal'))
    count.push(resultCount('Season Away/Home +2', 'slp2ResultSpread', 'slp2ResultTotal'))
    count.push(resultCount('Last Ten +4', 'lp4ResultSpread', 'lp4ResultTotal'))
    count.push(resultCount('Last Ten +3', 'lp3ResultSpread', 'lp3ResultTotal'))
    count.push(resultCount('Last Ten +2', 'lp2ResultSpread', 'lp2ResultTotal'))
    count.push(resultCount('Last Ten Away/Home +4', 'llp4ResultSpread', 'llp4ResultTotal'))
    count.push(resultCount('Last Ten Away/Home +3', 'llp3ResultSpread', 'llp3ResultTotal'))
    count.push(resultCount('Last Ten Away/Home +2', 'llp2ResultSpread', 'llp2ResultTotal'))

    return (
        <div>
            <h2 className='header'>Projected Line Results</h2>
            <div className='resultsCont'>
                {count.map(results => (
                    <Link className='resultsItem' onClick={() => inputResults(results)} to='/results-details'>
                        <h5>{results.name}</h5>
                        <p>Spread Results: {results.spreadWon}/{results.spreadTotal} ({(results.spreadWon/results.spreadTotal*100).toFixed(1)}%)</p>
                        <p>Total Results: {results.totalWon}/{results.totalTotal}  ({(results.totalWon/results.totalTotal*100).toFixed(1)}%)</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Results