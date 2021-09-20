import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';
import VegasDetailsDate from './vegasDetailsDate'

const VegasDetails = () => {
    const {results} = useContext(ResultsContext)
    let resultsKeys = Object.keys(results)

    return (
        <div>
            <h2 className='header'>Vegas Results by Game</h2>
            {resultsKeys.map(date => (
                <div className='detailsCont'>
                    <h5 className='date'>{date}</h5>
                    <VegasDetailsDate dateArray={results[date]}/>
                </div>
            ))}
        </div>
    )
}

export default VegasDetails