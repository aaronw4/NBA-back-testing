import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';
import CompareDetailsDate from './compareDetailsDate';

const CompareDetails = () => {
    const {results} = useContext(ResultsContext)
    const resultsKeys = Object.keys(results)

    return (
        <div>
            <h2 className='header'>Side by Side Results by Game</h2>
                {resultsKeys.map(date => (
                    <div className='detailsCont'>
                        <h3 className='date'>{date}</h3>
                        <CompareDetailsDate dateArray={results[date]}/>
                    </div>
            ))}
        </div>
    )
}

export default CompareDetails