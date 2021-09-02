import { projected } from '../Functions/projected';

export function Last10LocProj(date, awayTeam, homeTeam, stats) {
    const last10Away = stats.Last10Away[date]
    const last10Home = stats.Last10Home[date]
    const leagueAve = stats.SeasonLeagueAvg[date]
    const leagAveAway = stats.SeasonLeagueAveAway[date]
    const leagAveHome = stats.SeasonLeagueAveHome[date]
    const away = last10Away[awayTeam]
    const home = last10Home[homeTeam]
    
    return projected(away, home, leagueAve, leagAveAway, leagAveHome)
}
