import React from 'react';
import { ResultsData } from '../Functions/resultsData';
import CompareDetailsDate from './compareDetailsDate';

const CompareDetails = () => {
    const resultsData = ResultsData()
    const resultsDataKeys = Object.keys(resultsData)

    return (
        <div>
            <h2 className='header'>Side by Side Results by Game</h2>
                {resultsDataKeys.map(date => (
                    <div className='detailsCont'>
                        <h3 className='date'>{date}</h3>
                        <CompareDetailsDate dateArray={resultsData[date]}/>
                    </div>
            ))}
        </div>
    )
}

export default CompareDetails