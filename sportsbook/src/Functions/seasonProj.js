import { useContext } from 'react';
import { StatsContext } from '../Context/StatsContext';
import { projected } from './projected';

export function SeasonProj(date, awayTeam, homeTeam) {
    const stats = useContext(StatsContext)
    const seasonStats = stats.Season[date]
    const leagueAve = stats.SeasonLeagueAvg[date]
    const away = seasonStats[awayTeam]
    const home = seasonStats[homeTeam]

    return projected(away, home, leagueAve)
}
