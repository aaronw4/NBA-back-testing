import { projected } from '../Functions/projected';

export function SeasonProj(date, awayTeam, homeTeam, stats) {
    const seasonStats = stats.Season[date]
    const leagueAve = stats.SeasonLeagueAvg[date]
    const away = seasonStats[awayTeam]
    const home = seasonStats[homeTeam]

    return projected(away, home, leagueAve)
}
