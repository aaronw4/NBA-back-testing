import React from 'react';
import { ResultsData } from '../Functions/resultsData';
import ResultsDetailsDate from './resultsDetailsDate';


const ResultsDetails = () => {
    const resultsData = ResultsData()
    let resultsDataKeys = Object.keys(resultsData)
    
    return (
        <div>
            <h2 className='header'>Projected Results by Game</h2>
            {resultsDataKeys.map(date => (
                <div className='detailsCont'>
                    <h3 className='date'>{date}</h3>
                    <ResultsDetailsDate dateArray={resultsData[date]}/>
                </div>
            ))}
        </div>
    )
}

export default ResultsDetails