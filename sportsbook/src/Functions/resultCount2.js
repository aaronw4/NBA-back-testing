import { useContext } from 'react';
import { ResultsContext } from '../Context/ResultsContext';

export function ResultCount2(name, resultsSpread1, resultsSpread2, resultsTotal1, resultsTotal2) {
    const {results} = useContext(ResultsContext)
    let resultsKeys = Object.keys(results)
    let spreadWon = 0
    let spreadTotal = 0
    let totalWon = 0
    let totalTotal = 0

    resultsKeys.forEach(date => {
        results[date].forEach(game => {
            if (game[resultsSpread1] === 'Win' && game[resultsSpread2] === 'Win') {
                spreadWon++
                spreadTotal++
            } else if (game[resultsSpread1] === 'Lose' && game[resultsSpread2] === 'Lose') {
                spreadTotal++
            }
            
            if (game[resultsTotal1] === 'Win' && game[resultsTotal2] === 'Win') {
                totalWon++
                totalTotal++
            } else if (game[resultsTotal1] === 'Lose' && game[resultsTotal2] === 'Lose') {
                totalTotal++
            }
        })
    })

    return({
        name: name,
        spreadWon: spreadWon, 
        spreadTotal: spreadTotal,
        totalWon: totalWon,
        totalTotal: totalTotal
    })
}