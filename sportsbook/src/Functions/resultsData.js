import { useContext } from 'react';
import { StatsContext } from '../Context/StatsContext';
import { SeasonProj } from './seasonProj';
import { Last10Proj } from './last10Proj';
import { pickSpread, pickTotal } from './pick';
import { WinOrLoseSpread, WinOrLoseTotal } from './winOrLose';

export function ResultsData() {
    const stats = useContext(StatsContext)
    const odds = stats.Odds
    const scores = stats.Scores

    let oddsKeys
    if (odds === undefined) {
        oddsKeys = []
    } else {
        oddsKeys = Object.keys(odds)
    }

    let data = {}

    oddsKeys.map(date => {
        data[date] = []
        odds[date].map(game => {
// Insert betting odds numbers
            let gameStats = {}
            let gameKeys = Object.keys(game)
            gameKeys.map(stat => {
                gameStats[stat] = game[stat]    
            })
// Insert game scores
            let awayPoints = scores[date][game.team_away]
            if (awayPoints === undefined) {
                gameStats.score_away = "Cancelled"
            } else {
                gameStats.score_away = awayPoints.points
            }
            let homePoints = scores[date][game.team_home]
            if (homePoints === undefined) {
                gameStats.score_home = "Cancelled"
            } else {
                gameStats.score_home = homePoints.points
            }
// Insert projected numbers
// sp = Season Projected, lp = Last 10 Projected
            let sp = SeasonProj(date, game.team_away, game.team_home)
            gameStats.spScoreAway = sp[0].scoreAway
            gameStats.spScoreHome = sp[0].scoreHome
            gameStats.spMoneylineAway = sp[0].moneylineAway 
            gameStats.spMoneylineHome = sp[0].moneylineHome
            gameStats.spSpreadAway = sp[0].spreadAway
            gameStats.spSpreadHome = sp[0].spreadHome
            gameStats.spTotal = sp[0].total

            let lp = Last10Proj(date, game.team_away, game.team_home)
            gameStats.lpScoreAway = lp[0].scoreAway
            gameStats.lpScoreHome = lp[0].scoreHome
            gameStats.lpMoneylineAway = lp[0].moneylineAway 
            gameStats.lpMoneylineHome = lp[0].moneylineHome
            gameStats.lpSpreadAway = lp[0].spreadAway
            gameStats.lpSpreadHome = lp[0].spreadHome
            gameStats.lpTotal = lp[0].total
// Insert projected picks
            let spPickSpread = pickSpread(gameStats.spSpreadAway, gameStats.spread_away)
            gameStats.spSpreadPick = spPickSpread[0]
            gameStats.spSpreadCond = spPickSpread[1]

            let spPickTotal = pickTotal(gameStats.spTotal, gameStats.total)
            gameStats.spTotalPick = spPickTotal

            let lpPickSpread = pickSpread(gameStats.lpSpreadAway, gameStats.spread_away)
            gameStats.lpSpreadPick = lpPickSpread[0]
            gameStats.lpSpreadCond = lpPickSpread[1]

            let lpPickTotal = pickTotal(gameStats.lpTotal, gameStats.total)
            gameStats.lpTotalPick = lpPickTotal
// Insert projected results
            gameStats.spResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.spSpreadPick, gameStats.spSpreadCond)
            gameStats.spResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.spTotalPick, gameStats.total)
            gameStats.lpResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.lpSpreadPick, gameStats.lpSpreadCond)
            gameStats.lpResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.lpTotalPick, gameStats.total)

            data[date].push(gameStats)
        })
    })

    return data
}