import { useContext } from 'react';
import { ResultsContext } from '../Context/ResultsContext';
import { totalCount } from './totalPoints';

export function ResultCount(name, resultsSpread, resultsTotal, dataType, pickDiff) {
    const {results} = useContext(ResultsContext)
    let resultKeys = Object.keys(results)
    let spreadWon = 0
    let spreadTotal = 0
    let totalWon = 0
    let totalTotal = 0
    let totalOverWon = 0
    let totalUnderWon = 0
    let totalOver = 0
    let totalUnder = 0

    resultKeys.map(date => {
        results[date].map(game => {
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

            if (game[dataType+pickDiff+'TotalPick'] === 'Over' && game[resultsTotal] === 'Win') {
                totalOverWon++
                totalOver++
            } else if (game[dataType+pickDiff+'TotalPick'] === 'Over' && game[resultsTotal] === 'Lose') {
                totalOver++
            }
            
            if (game[dataType+pickDiff+'TotalPick'] === 'Under' && game[resultsTotal] === 'Win') {
                totalUnderWon++
                totalUnder++
            } else if (game[dataType+pickDiff+'TotalPick'] === 'Under' && game[resultsTotal] === 'Lose') {
                totalUnder++
            }
        })
    })

    let totals = totalCount(dataType, results)

    return({
        name: name,
        spreadWon: spreadWon, 
        spreadTotal: spreadTotal,
        totalWon: totalWon,
        totalTotal: totalTotal,
        totalOverWon: totalOverWon,
        totalOver: totalOver,
        totalUnderWon: totalUnderWon,
        totalUnder: totalUnder,
        pointsAwayAvg: totals.pointsAwayAvg,
        pointsHomeAvg: totals.pointsHomeAvg,
        pointsAvg: totals.pointsAvg,
        projPointsAwayAvg: totals.projPointsAwayAvg,
        projPointsHomeAvg: totals.projPointsHomeAvg,
        projPointsAvg: totals.projPointsAvg,
        dataType: dataType,
        pickDiff: pickDiff
    })
}