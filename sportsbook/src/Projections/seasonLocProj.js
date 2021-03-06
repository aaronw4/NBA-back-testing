import { projected } from '../Functions/projected';

export function SeasonLocProj(date, awayTeam, homeTeam, stats) {
    const seasonAway = stats.SeasonAway[date]
    const seasonHome = stats.SeasonHome[date]
    const leagueAve = stats.SeasonLeagueAvg[date]
    const leagAveAway = stats.SeasonLeagueAveAway[date]
    const leagAveHome = stats.SeasonLeagueAveHome[date]
    const away = seasonAway[awayTeam]
    const home = seasonHome[homeTeam]
    
    return projected(away, home, leagueAve, leagAveAway, leagAveHome)
}
