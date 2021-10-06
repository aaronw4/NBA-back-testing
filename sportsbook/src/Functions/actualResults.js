import { useContext } from "react";
import { ResultsContext } from "../Context/ResultsContext";

export function ActualResults() {
    const {results} = useContext(ResultsContext)
    let resultKeys = Object.keys(results)
    let pointsAway = [], pointsHome = [], vegasPoints = [], openVegasPoints = []
    let overWins = 0, underWins = 0, openOverWins = 0, openUnderWins = 0
    let dogCovers = 0, favCovers = 0, openDogCovers = 0, openFavCovers = 0
    let dogWins = 0, favWins = 0

    resultKeys.forEach(date => {
        results[date].forEach(game => {
            if (game.score_home - game.score_away < Number(game.spread_away) && Number(game.spread_away) > 0) {
                dogCovers++
            } else if (game.score_home - game.score_away < Number(game.spread_away) && Number(game.spread_away) < 0) {
                favCovers++
            } else if (game.score_home - game.score_away > Number(game.spread_away) && Number(game.spread_away) > 0) {
                favCovers++
            } else if (game.score_home - game.score_away > Number(game.spread_away) && Number(game.spread_away) < 0) {
                dogCovers++
            }

            if (game.score_home - game.score_away < Number(game.spread_open_away) && Number(game.spread_open_away) > 0) {
                openDogCovers++
            } else if (game.score_home - game.score_away < Number(game.spread_open_away) && Number(game.spread_open_away) < 0) {
                openFavCovers++
            } else if (game.score_home - game.score_away > Number(game.spread_open_away) && Number(game.spread_open_away) > 0) {
                openFavCovers++
            } else if (game.score_home - game.score_away > Number(game.spread_open_away) && Number(game.spread_open_away) < 0) {
                openDogCovers++
            }

            if (game.score_home + game.score_away < game.total) {
                underWins++
            } else if (game.score_home + game.score_away > game.total) {
                overWins++
            }

            if (game.score_home + game.score_away < game.total_open) {
                openUnderWins++
            } else if (game.score_home + game.score_away > game.total_open) {
                openOverWins++
            }

            if (game.score_away > game.score_home && game.spread_away < 0) {
                favWins++
            } else if (game.score_away < game.score_home && game.spread_home < 0) {
                favWins++
            } else if (game.score_away > game.score_home && game.spread_away > 0) {
                dogWins++
            } else if (game.score_away < game.score_home && game.spread_home > 0) {
                dogWins++
            }

            if (game.score_away !== 'Cancelled') {
                vegasPoints.push(Number(game.total))
                openVegasPoints.push(Number(game.total_open))
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
    let pointsAvg = pointsTotal / pointsAway.length
    let vegasPointsSum = vegasPoints.reduce(reducer)
    let vegasPointsAve = vegasPointsSum / vegasPoints.length
    let openVegasPointsSum = openVegasPoints.reduce(reducer)
    let openVegasPointsAve = openVegasPointsSum / openVegasPoints.length

    let data = {
        'overWins': overWins,
        'underWins': underWins,
        'dogWins': dogWins,
        'favWins': favWins,
        'dogCovers': dogCovers,
        'favCovers': favCovers,
        'openOverWins': openOverWins,
        'openUnderWins': openUnderWins,
        'openDogCovers': openDogCovers,
        'openFavCovers': openFavCovers,
        'pointsAvg': pointsAvg.toFixed(1),
        'vegasPointsAve': vegasPointsAve.toFixed(1),
        'openVegasPointsAve': openVegasPointsAve.toFixed(1)
    }
    
    return data
}