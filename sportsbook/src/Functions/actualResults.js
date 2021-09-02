import { useContext } from "react";
import { ResultsContext } from "../Context/ResultsContext";

export function ActualResults() {
    const {results} = useContext(ResultsContext)
    let resultKeys = Object.keys(results)
    let pointsAway = []
    let pointsHome = []
    let vegasPoints = []
    let overWins = 0
    let underWins = 0
    let dogWins = 0
    let favWins = 0

    resultKeys.map(date => {
        results[date].map(game => {
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
                vegasPoints.push(Number(game.total))
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
        'pointsAvg': pointsAvg.toFixed(1),
        'vegasPointsAve': vegasPointsAve.toFixed(1)
    }

    return data
}