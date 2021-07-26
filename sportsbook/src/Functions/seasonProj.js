import { useContext } from 'react';
import { StatsContext } from '../Context/StatsContext';

export function SeasonProj(date, awayTeam, homeTeam) {
    const stats = useContext(StatsContext)
    const seasonStats = stats.Season[date]
    const leagueAve = stats.SeasonLeagueAvg[date]
    const away = seasonStats[awayTeam]
    const home = seasonStats[homeTeam]
    
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

    let awayPoss = 0.96*(away.fga + away.tov + 0.44*(away.fta) - away.orb)
    let homePoss = 0.96*(home.fga + home.tov + 0.44*(home.fta) - home.orb)
    let avgPoss = 0.96*(leagueAve.fga + leagueAve.tov + 0.44*(leagueAve.fta) - leagueAve.orb)
    let possessions = (awayPoss/avgPoss)*homePoss

    let awayAdjO = away.points/ awayPoss * 100
    let awayAdjD = away.points_opp / awayPoss * 100
    let homeAdjO = home.points / homePoss * 100
    let homeAdjD = home.points_opp / homePoss * 100

    let pythAway = awayAdjO**14 / (awayAdjO**14 + awayAdjD**14)
    let pythHome = homeAdjO**14 / (homeAdjO**14 + homeAdjD**14)

    let oddsAway = ((pythAway - pythAway*pythHome) / (pythAway + pythHome - 2*pythAway*pythHome))*100
    let oddsHome = ((pythHome - pythAway*pythHome) / (pythAway + pythHome - 2*pythAway*pythHome))*100
    let decAway = ((100 - oddsAway) / oddsAway) + 1
    let decHome = ((100 - oddsHome) / oddsHome) + 1
    let moneylineAway
    let moneylineHome
    if (decAway >= 2) {
        moneylineAway = (decAway - 1) * 100
    } else {
        moneylineAway = -100 / (decAway - 1)
    }
    if (decHome >= 2) {
        moneylineHome = (decHome - 1) * 100
    } else {
        moneylineHome = -100 / (decHome - 1)
    }

    let adjOave = leagueAve.points / avgPoss * 100
    let scoreAway = (awayAdjO/adjOave)*homeAdjD*(possessions/100)
    let scoreHome = (homeAdjO/adjOave)*awayAdjD*(possessions/100)

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
