import { ResultsData } from "./resultsData"

export function actualResults() {
    const resultsData = ResultsData()
    let resultKeys = Object.keys(resultsData)
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
        })
    })

    let data = {
        'overWins': overWins,
        'underWins': underWins,
        'dogWins': dogWins,
        'favWins': favWins
    }

    return data
}