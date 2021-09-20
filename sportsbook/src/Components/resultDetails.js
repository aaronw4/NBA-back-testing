import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';
import ResultsDetailsDate from './resultsDetailsDate';
import ScrollButton from './scrollButton';

const ResultsDetails = () => {
    const {results} = useContext(ResultsContext)
    const resultsKeys = Object.keys(results)
    
    return (
        <div>
            <h2 class='header'>Projected Results by Game</h2>
            {resultsKeys.map(date => (
                <div class='detailsCont'>
                    <h5 class='date'>{date}</h5>
                    <ResultsDetailsDate dateArray={results[date]}/>
                </div>
            ))}
            <ScrollButton/>
        </div>
    )
}

export default ResultsDetails