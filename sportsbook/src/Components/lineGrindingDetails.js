import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';
import LineGrindingDetailsDate from './lineGrindingDetailsDate';
import ScrollButton from './scrollButton';

const LineGrindingDetails = () => {
    const {results} = useContext(ResultsContext)
    const resultsKeys = Object.keys(results)

    return (
        <div>
            <h2 class='header'>Line Movement by Game</h2>
            {resultsKeys.map(date => (
                <div class='detailsCont'>
                    <h5 class='date'>{date}</h5>
                    <LineGrindingDetailsDate dateArray={results[date]}/>
                </div>
            ))}
            <ScrollButton/>
        </div>
    )
}

export default LineGrindingDetails