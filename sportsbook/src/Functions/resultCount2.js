import { ResultsData } from "./resultsData";

export function resultCount2(name, resultsSpread1, resultsSpread2, resultsTotal1, resultsTotal2) {
    const resultsData = ResultsData()
    let resultKeys = Object.keys(resultsData)
    let spreadWon = 0
    let spreadTotal = 0
    let totalWon = 0
    let totalTotal = 0

    resultKeys.map(date => {
        resultsData[date].map(game => {
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