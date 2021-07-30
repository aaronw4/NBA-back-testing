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
            let sp4PickSpread = pickSpread(gameStats.spSpreadAway, gameStats.spread_away, 4)
            let sp4PickTotal = pickTotal(gameStats.spTotal, gameStats.total, 4)
            gameStats.sp4SpreadPick = sp4PickSpread[0]
            gameStats.sp4SpreadCond = sp4PickSpread[1]
            gameStats.sp4TotalPick = sp4PickTotal

            let lp4PickSpread = pickSpread(gameStats.lpSpreadAway, gameStats.spread_away, 4)
            let lp4PickTotal = pickTotal(gameStats.lpTotal, gameStats.total, 4)
            gameStats.lp4SpreadPick = lp4PickSpread[0]
            gameStats.lp4SpreadCond = lp4PickSpread[1]
            gameStats.lp4TotalPick = lp4PickTotal
// Insert projected results
            gameStats.sp4ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.sp4SpreadPick, gameStats.sp4SpreadCond)
            gameStats.sp4ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.sp4TotalPick, gameStats.total)
            gameStats.lp4ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.lp4SpreadPick, gameStats.lp4SpreadCond)
            gameStats.lp4ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.lp4TotalPick, gameStats.total)

            data[date].push(gameStats)
        })
    })

    return data
}