import { useContext } from 'react';
import { StatsContext } from '../Context/StatsContext';
import { SeasonProj } from '../Projections/seasonProj';
import { SeasonLocProj } from '../Projections/seasonLocProj';
import { Last10Proj } from '../Projections/last10Proj';
import { Last10LocProj } from '../Projections/last10LocProj';
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
// sp = Season Projected, lp = Last 10 Projected, slp = Season Location Projected, llp = Last 10 Location Projected
            let sp = SeasonProj(date, game.team_away, game.team_home)
            gameStats.spScoreAway = sp[0].scoreAway
            gameStats.spScoreHome = sp[0].scoreHome
            gameStats.spMoneylineAway = sp[0].moneylineAway 
            gameStats.spMoneylineHome = sp[0].moneylineHome
            gameStats.spSpreadAway = sp[0].spreadAway
            gameStats.spSpreadHome = sp[0].spreadHome
            gameStats.spTotal = sp[0].total

            let slp = SeasonLocProj(date, game.team_away, game.team_home)
            gameStats.slpScoreAway = slp[0].scoreAway
            gameStats.slpScoreHome = slp[0].scoreHome
            gameStats.slpMoneylineAway = slp[0].moneylineAway 
            gameStats.slpMoneylineHome = slp[0].moneylineHome
            gameStats.slpSpreadAway = slp[0].spreadAway
            gameStats.slpSpreadHome = slp[0].spreadHome
            gameStats.slpTotal = slp[0].total

            let lp = Last10Proj(date, game.team_away, game.team_home)
            gameStats.lpScoreAway = lp[0].scoreAway
            gameStats.lpScoreHome = lp[0].scoreHome
            gameStats.lpMoneylineAway = lp[0].moneylineAway 
            gameStats.lpMoneylineHome = lp[0].moneylineHome
            gameStats.lpSpreadAway = lp[0].spreadAway
            gameStats.lpSpreadHome = lp[0].spreadHome
            gameStats.lpTotal = lp[0].total
            
            let llp = Last10LocProj(date, game.team_away, game.team_home)
            gameStats.llpScoreAway = llp[0].scoreAway
            gameStats.llpScoreHome = llp[0].scoreHome
            gameStats.llpMoneylineAway = llp[0].moneylineAway 
            gameStats.llpMoneylineHome = llp[0].moneylineHome
            gameStats.llpSpreadAway = llp[0].spreadAway
            gameStats.llpSpreadHome = llp[0].spreadHome
            gameStats.llpTotal = llp[0].total
// Insert projected picks
            let sp4PickSpread = pickSpread(gameStats.spSpreadAway, gameStats.spread_away, 4)
            let sp4PickTotal = pickTotal(gameStats.spTotal, gameStats.total, 4)
            gameStats.sp4SpreadPick = sp4PickSpread[0]
            gameStats.sp4SpreadCond = sp4PickSpread[1]
            gameStats.sp4TotalPick = sp4PickTotal

            let sp3PickSpread = pickSpread(gameStats.spSpreadAway, gameStats.spread_away, 3)
            let sp3PickTotal = pickTotal(gameStats.spTotal, gameStats.total, 3)
            gameStats.sp3SpreadPick = sp3PickSpread[0]
            gameStats.sp3SpreadCond = sp3PickSpread[1]
            gameStats.sp3TotalPick = sp3PickTotal

            let sp2PickSpread = pickSpread(gameStats.spSpreadAway, gameStats.spread_away, 2)
            let sp2PickTotal = pickTotal(gameStats.spTotal, gameStats.total, 2)
            gameStats.sp2SpreadPick = sp2PickSpread[0]
            gameStats.sp2SpreadCond = sp2PickSpread[1]
            gameStats.sp2TotalPick = sp2PickTotal

            let slp4PickSpread = pickSpread(gameStats.slpSpreadAway, gameStats.spread_away, 4)
            let slp4PickTotal = pickTotal(gameStats.slpTotal, gameStats.total, 4)
            gameStats.slp4SpreadPick = slp4PickSpread[0]
            gameStats.slp4SpreadCond = slp4PickSpread[1]
            gameStats.slp4TotalPick = slp4PickTotal

            let slp3PickSpread = pickSpread(gameStats.slpSpreadAway, gameStats.spread_away, 3)
            let slp3PickTotal = pickTotal(gameStats.slpTotal, gameStats.total, 3)
            gameStats.slp3SpreadPick = slp3PickSpread[0]
            gameStats.slp3SpreadCond = slp3PickSpread[1]
            gameStats.slp3TotalPick = slp3PickTotal

            let slp2PickSpread = pickSpread(gameStats.slpSpreadAway, gameStats.spread_away, 2)
            let slp2PickTotal = pickTotal(gameStats.slpTotal, gameStats.total, 2)
            gameStats.slp2SpreadPick = slp2PickSpread[0]
            gameStats.slp2SpreadCond = slp2PickSpread[1]
            gameStats.slp2TotalPick = slp2PickTotal

            let lp4PickSpread = pickSpread(gameStats.lpSpreadAway, gameStats.spread_away, 4)
            let lp4PickTotal = pickTotal(gameStats.lpTotal, gameStats.total, 4)
            gameStats.lp4SpreadPick = lp4PickSpread[0]
            gameStats.lp4SpreadCond = lp4PickSpread[1]
            gameStats.lp4TotalPick = lp4PickTotal
            
            let lp3PickSpread = pickSpread(gameStats.lpSpreadAway, gameStats.spread_away, 3)
            let lp3PickTotal = pickTotal(gameStats.lpTotal, gameStats.total, 3)
            gameStats.lp3SpreadPick = lp3PickSpread[0]
            gameStats.lp3SpreadCond = lp3PickSpread[1]
            gameStats.lp3TotalPick = lp3PickTotal

            let lp2PickSpread = pickSpread(gameStats.lpSpreadAway, gameStats.spread_away, 2)
            let lp2PickTotal = pickTotal(gameStats.lpTotal, gameStats.total, 2)
            gameStats.lp2SpreadPick = lp2PickSpread[0]
            gameStats.lp2SpreadCond = lp2PickSpread[1]
            gameStats.lp2TotalPick = lp2PickTotal
            
            let llp4PickSpread = pickSpread(gameStats.llpSpreadAway, gameStats.spread_away, 4)
            let llp4PickTotal = pickTotal(gameStats.llpTotal, gameStats.total, 4)
            gameStats.llp4SpreadPick = llp4PickSpread[0]
            gameStats.llp4SpreadCond = llp4PickSpread[1]
            gameStats.llp4TotalPick = llp4PickTotal
            
            let llp3PickSpread = pickSpread(gameStats.llpSpreadAway, gameStats.spread_away, 3)
            let llp3PickTotal = pickTotal(gameStats.llpTotal, gameStats.total, 3)
            gameStats.llp3SpreadPick = llp3PickSpread[0]
            gameStats.llp3SpreadCond = llp3PickSpread[1]
            gameStats.llp3TotalPick = llp3PickTotal

            let llp2PickSpread = pickSpread(gameStats.llpSpreadAway, gameStats.spread_away, 2)
            let llp2PickTotal = pickTotal(gameStats.llpTotal, gameStats.total, 2)
            gameStats.llp2SpreadPick = llp2PickSpread[0]
            gameStats.llp2SpreadCond = llp2PickSpread[1]
            gameStats.llp2TotalPick = llp2PickTotal
// Insert projected results
            gameStats.sp4ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.sp4SpreadPick, gameStats.sp4SpreadCond)
            gameStats.sp4ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.sp4TotalPick, gameStats.total)

            gameStats.sp3ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.sp3SpreadPick, gameStats.sp3SpreadCond)
            gameStats.sp3ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.sp3TotalPick, gameStats.total)

            gameStats.sp2ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.sp2SpreadPick, gameStats.sp2SpreadCond)
            gameStats.sp2ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.sp2TotalPick, gameStats.total)

            gameStats.slp4ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.slp4SpreadPick, gameStats.slp4SpreadCond)
            gameStats.slp4ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.slp4TotalPick, gameStats.total)

            gameStats.slp3ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.slp3SpreadPick, gameStats.slp3SpreadCond)
            gameStats.slp3ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.slp3TotalPick, gameStats.total)

            gameStats.slp2ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.slp2SpreadPick, gameStats.slp2SpreadCond)
            gameStats.slp2ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.slp2TotalPick, gameStats.total)

            gameStats.lp4ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.lp4SpreadPick, gameStats.lp4SpreadCond)
            gameStats.lp4ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.lp4TotalPick, gameStats.total)

            gameStats.lp3ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.lp3SpreadPick, gameStats.lp3SpreadCond)
            gameStats.lp3ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.lp3TotalPick, gameStats.total)

            gameStats.lp2ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.lp2SpreadPick, gameStats.lp2SpreadCond)
            gameStats.lp2ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.lp2TotalPick, gameStats.total)

            gameStats.llp4ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.llp4SpreadPick, gameStats.llp4SpreadCond)
            gameStats.llp4ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.llp4TotalPick, gameStats.total)

            gameStats.llp3ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.llp3SpreadPick, gameStats.llp3SpreadCond)
            gameStats.llp3ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.llp3TotalPick, gameStats.total)

            gameStats.llp2ResultSpread = WinOrLoseSpread(gameStats.score_away, gameStats.score_home, gameStats.llp2SpreadPick, gameStats.llp2SpreadCond)
            gameStats.llp2ResultTotal = WinOrLoseTotal(gameStats.score_away, gameStats.score_home, gameStats.llp2TotalPick, gameStats.total)

            data[date].push(gameStats)
        })
    })

    return data
}