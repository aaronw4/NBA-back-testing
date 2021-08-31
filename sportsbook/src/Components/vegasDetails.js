import React from 'react';
import { ResultsData } from '../Functions/resultsData';
import VegasDetailsDate from './vegasDetailsDate'

const VegasDetails = () => {
    const resultsData = ResultsData()
    let resultsDataKeys = Object.keys(resultsData)

    return (
        <div>
            <h2 className='header'>Vegas Results by Game</h2>
            {resultsDataKeys.map(date => (
                <div className='detailsCont'>
                    <h3 className='date'>{date}</h3>
                    <VegasDetailsDate dateArray={resultsData[date]}/>
                </div>
            ))}
        </div>
    )
}

export default VegasDetails