import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';
import LineGrindingDetailsDate from './lineGrindingDetailsDate';

const LineGrindingDetails = () => {
    const {results} = useContext(ResultsContext)
    let resultKeys = Object.keys(results)

    return (
        <div>
            <h2 className='header'>Line Grinding by Game</h2>
            {resultKeys.map(date => (
                 <div className='detailsCont'>
                 <h3 className='date'>{date}</h3>
                 <LineGrindingDetailsDate dateArray={results[date]}/>
             </div>
            ))}
        </div>
    )
}

export default LineGrindingDetails