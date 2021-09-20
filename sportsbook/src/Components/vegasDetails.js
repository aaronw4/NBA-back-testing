import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';
import VegasDetailsDate from './vegasDetailsDate'
import ScrollButton from './scrollButton';

const VegasDetails = () => {
    const {results} = useContext(ResultsContext)
    const resultsKeys = Object.keys(results)

    return (
        <div>
            <h2 class='header'>Vegas Results by Game</h2>
            {resultsKeys.map(date => (
                <div class='detailsCont'>
                    <h5 class='date'>{date}</h5>
                    <VegasDetailsDate dateArray={results[date]}/>
                </div>
            ))}
            <ScrollButton/>
        </div>
    )
}

export default VegasDetails