import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';
import ResultsDetailsDate from './resultsDetailsDate';

const ResultsDetails = () => {
    const {results} = useContext(ResultsContext)
    let resultsKeys = Object.keys(results)
    
    return (
        <div>
            <h2 className='header'>Projected Results by Game</h2>
            {resultsKeys.map(date => (
                <div className='detailsCont'>
                    <h5 className='date'>{date}</h5>
                    <ResultsDetailsDate dateArray={results[date]}/>
                </div>
            ))}
        </div>
    )
}

export default ResultsDetails