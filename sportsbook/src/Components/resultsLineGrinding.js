import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import { ResultsContext } from "../Context/ResultsContext";
import { ResultCount } from "../Functions/resultCount";

const ResultsLineGrinding = () => {
    const {inputResults} = useContext(ResultsContext)
    let count = []

    count.push(ResultCount('Line Movement', 'lg1ResultSpread', 'lg1ResultTotal', 'lg', '1'))
    
    return (
        <div>
            <div className='header'>
                <h2>Line Movement Summary</h2>
                <p>Total games examined: {count[0].totalGames}</p>
            </div>
            <div className='resultsCont'>
                {count.map(results => (
                    <div class="card text-white bg-secondary mb-3 hcSummary">
                        <h5 class="card-header">{results.name}</h5>
                        <div>
                            <p class='hcP'>Spread Results: {results.spreadWon}/{results.spreadTotal} ({(results.spreadWon/results.spreadTotal*100).toFixed(1)}%)</p>
                            <p>Total Results: {results.totalWon}/{results.totalTotal}  ({(results.totalWon/results.totalTotal*100).toFixed(1)}%)</p>
                        </div>
                        <Link className='link' onClick={() => inputResults(results)} to='/lineGrinding-details'>
                            <button class="btn btn-primary">
                                See Detailed Results
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResultsLineGrinding