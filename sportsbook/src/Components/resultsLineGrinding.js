import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import { ResultsContext } from "../Context/ResultsContext";
import { ResultCount } from "../Functions/resultCount";

const ResultsLineGrinding = () => {
    const {inputResults} = useContext(ResultsContext)
    let count = []

    count.push(ResultCount('Line Grinding', 'lg1ResultSpread', 'lg1ResultTotal', 'lg', '1'))
    
    return (
        <div>
            <h2 className='header'>Line Grinding Results</h2>
            <div className='resultsCont'>
                {count.map(results => (
                    <Link className='resultsItem' onClick={() => inputResults(results)} to='/lineGrinding-details'>
                        <h5>{results.name}</h5>
                        <p>Spread Results: {results.spreadWon}/{results.spreadTotal} ({(results.spreadWon/results.spreadTotal*100).toFixed(1)}%)</p>
                        <p>Total Results: {results.totalWon}/{results.totalTotal}  ({(results.totalWon/results.totalTotal*100).toFixed(1)}%)</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ResultsLineGrinding