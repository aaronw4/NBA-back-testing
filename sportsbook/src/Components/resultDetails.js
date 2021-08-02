import React from 'react';
import { ResultsData } from '../Functions/resultsData';
import ResultsDetailsDate from './resultsDetailsDate';


const ResultsDetails = () => {
    const resultsData = ResultsData()
    let resultsDataKeys = Object.keys(resultsData)
    
    return (
        <div>
            {resultsDataKeys.map(date => (
                <div>
                    <h5>{date}</h5>
                    <ResultsDetailsDate dateArray={resultsData[date]}/>
                </div>
            ))}
        </div>
    )
}

export default ResultsDetails