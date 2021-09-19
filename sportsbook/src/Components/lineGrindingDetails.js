import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';
import LineGrindingDetailsDate from './lineGrindingDetailsDate';

const LineGrindingDetails = () => {
    const {results} = useContext(ResultsContext)
    let resultKeys = Object.keys(results)

    return (
        <div>
            <h2 className='header'>Line Movement by Game</h2>
            {resultKeys.map(date => (
                 <div className='detailsCont'>
                 <h5 className='date'>{date}</h5>
                 <LineGrindingDetailsDate dateArray={results[date]}/>
             </div>
            ))}
        </div>
    )
}

export default LineGrindingDetails