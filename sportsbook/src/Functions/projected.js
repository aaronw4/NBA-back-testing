export function projected(away, home, leagueAve) {
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

    let awayPoss = (away.fga + away.tov + 0.475*(away.fta) - away.orb)
    let homePoss = (home.fga + home.tov + 0.475*(home.fta) - home.orb)
    let avgPoss = (leagueAve.fga + leagueAve.tov + 0.475*(leagueAve.fta) - leagueAve.orb)
    let possessions = (awayPoss/avgPoss)*homePoss

    let awayAdjO = away.points / awayPoss
    let awayAdjD = away.points_opp / awayPoss
    let homeAdjO = home.points / homePoss
    let homeAdjD = home.points_opp / homePoss

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
    
    let scoreAway = (awayAdjO*possessions/leagueAve.points)*homeAdjD*possessions
    let scoreHome = (homeAdjO*possessions/leagueAve.points)*awayAdjD*possessions

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