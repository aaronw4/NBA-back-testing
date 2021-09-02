import { possessions } from "./possessions"
import { freeThrows } from "./freeThrows"
import { oddsToMoneyline } from "./oddsToMoneyline"

export function projected(away, home, leagueAve, awayLeagAve = leagueAve, homeLeagAve = leagueAve) {
    if (away === undefined || home === undefined) {
        return ([{
            scoreAway: null,
            scoreHome: null,
            moneylineAway: null, 
            moneylineHome: null,
            spreadAway: null,
            spreadHome: null,
            total: null
        }])
    }

    let awayPoss = possessions(away.fga, away.tov, away, away.orb)
    let homePoss = possessions(home.fga, home.tov, home.fta, home.orb)
    let avgPoss = possessions(leagueAve.fga, leagueAve.tov, leagueAve.fta, leagueAve.orb)
    let gamePoss = (awayPoss/avgPoss)*homePoss

    let awayFT = freeThrows(away.points, away.three, away.fg)
    let awayFT_opp = freeThrows(away.points_opp, away.three_opp, away.fg_opp)
    let homeFT = freeThrows(home.points, home.three, home.fg)
    let homeFT_opp = freeThrows(home.points_opp, home.three_opp, home.fg_opp)
    let leagueAveFT = freeThrows(leagueAve.points, leagueAve.three, leagueAve.fg)

    let awayAdjO = (away.points - awayFT) / awayPoss
    let awayAdjD = (away.points_opp - awayFT_opp) / awayPoss
    let homeAdjO = (home.points - homeFT) / homePoss
    let homeAdjD = (home.points_opp - homeFT_opp) / homePoss

    let pythAway = awayAdjO**14 / (awayAdjO**14 + awayAdjD**14)
    let pythHome = homeAdjO**14 / (homeAdjO**14 + homeAdjD**14)

    let oddsAway = ((pythAway - pythAway*pythHome) / (pythAway + pythHome - 2*pythAway*pythHome))*100
    let oddsHome = ((pythHome - pythAway*pythHome) / (pythAway + pythHome - 2*pythAway*pythHome))*100
    let moneylineAway = oddsToMoneyline(oddsAway)
    let moneylineHome = oddsToMoneyline(oddsHome)
        
    let scoreAway = (awayAdjO*gamePoss/(awayLeagAve.points - leagueAveFT))*homeAdjD*gamePoss + awayFT*homeFT_opp/leagueAveFT
    let scoreHome = (homeAdjO*gamePoss/(homeLeagAve.points - leagueAveFT))*awayAdjD*gamePoss + homeFT*awayFT_opp/leagueAveFT
    
    let spreadHome = (scoreAway - scoreHome).toFixed(1)
    let spreadAway = (scoreHome - scoreAway).toFixed(1)
    let total = (scoreAway + scoreHome).toFixed(1)

    return ([{
        scoreAway: Number(scoreAway.toFixed(1)),
        scoreHome: Number(scoreHome.toFixed(1)),
        moneylineAway: Number(moneylineAway.toFixed(1)), 
        moneylineHome: Number(moneylineHome.toFixed(1)),
        spreadAway: Number(spreadAway),
        spreadHome: Number(spreadHome),
        total: Number(total)
    }])
}