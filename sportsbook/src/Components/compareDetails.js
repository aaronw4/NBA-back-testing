import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';
import CompareDetailsDate from './compareDetailsDate';

const CompareDetails = () => {
    const {results} = useContext(ResultsContext)
    const resultsKeys = Object.keys(results)

    return (
        <div>
            <h2 class='header'>Side by Side Points by Game</h2>
                {resultsKeys.map(date => (
                    <div class='detailsCont'>
                        <h5 class='date'>{date}</h5>
                        <CompareDetailsDate dateArray={results[date]}/>
                    </div>
            ))}
        </div>
    )
}

export default CompareDetails