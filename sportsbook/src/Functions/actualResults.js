import { ResultsData } from "./resultsData"

export function actualResults() {
    const resultsData = ResultsData()
    let resultKeys = Object.keys(resultsData)
    let pointsAway = []
    let pointsHome = []
    let vegasPoints = []
    let overWins = 0
    let underWins = 0
    let dogWins = 0
    let favWins = 0

    resultKeys.map(date => {
        resultsData[date].map(game => {
            if (game.score_home - game.score_away < Number(game.spread_away) && Number(game.spread_away) > 0) {
                dogWins++
            } else if (game.score_home - game.score_away < Number(game.spread_away) && Number(game.spread_away) < 0) {
                favWins++
            } else if (game.score_home - game.score_away > Number(game.spread_away) && Number(game.spread_away) > 0) {
                favWins++
            } else if (game.score_home - game.score_away > Number(game.spread_away) && Number(game.spread_away) < 0) {
                dogWins++
            }

            if (game.score_home + game.score_away < game.total) {
                underWins++
            } else if (game.score_home + game.score_away > game.total) {
                overWins++
            }

            if (game.score_away === 'Cancelled') {
                let nothing = 0
            } else {
                vegasPoints.push(game.total)
                pointsAway.push(game.score_away)
                pointsHome.push(game.score_home)
            }   
        })
    })

    function reducer(total, num) {
        return total + num
    }

    let pointsAwayTotal = pointsAway.reduce(reducer)
    let pointsHomeTotal = pointsHome.reduce(reducer)
    let pointsTotal = pointsAwayTotal + pointsHomeTotal
    let vegasPointsSum = vegasPoints.reduce(reducer)
    let pointsAvg = pointsTotal / pointsAway.length
    let vegasPointsAve = vegasPointsSum / vegasPoints.length

    let data = {
        'overWins': overWins,
        'underWins': underWins,
        'dogWins': dogWins,
        'favWins': favWins,
        'pointsAvg': pointsAvg,
        'vegasPointsAve': vegasPointsAve
    }

    return data
}