import { ResultsData } from '../Functions/resultsData';

export function resultCount(name, resultsSpread, resultsTotal) {
    const resultsData = ResultsData()
    let resultKeys = Object.keys(resultsData)
    let spreadWon = 0
    let spreadTotal = 0
    let totalWon = 0
    let totalTotal = 0

    resultKeys.map(date => {
        resultsData[date].map(game => {
            if (game[resultsSpread] === 'Win') {
                spreadWon++
                spreadTotal++
            } else if (game[resultsSpread] === 'Lose') {
                spreadTotal++
            }
            
            if (game[resultsTotal] === 'Win') {
                totalWon++
                totalTotal++
            } else if (game[resultsTotal] === 'Lose') {
                totalTotal++
            }
        })
    })

    return({
        name: name,
        spreadWon: spreadWon, 
        spreadTotal: spreadTotal,
        totalWon: totalWon,
        totalTotal: totalTotal,
        spreadName: resultsSpread,
        totalName: resultsTotal
    })
}