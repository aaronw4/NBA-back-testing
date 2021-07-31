import { useContext } from 'react';
import { StatsContext } from '../Context/StatsContext';
import { projected } from '../Functions/projected';

export function SeasonLocProj(date, awayTeam, homeTeam) {
    const stats = useContext(StatsContext)
    const seasonAway = stats.SeasonAway[date]
    const seasonHome = stats.SeasonHome[date]
    const leagueAve = stats.SeasonLeagueAvg[date]
    const away = seasonAway[awayTeam]
    const home = seasonHome[homeTeam]
    
    return projected(away, home, leagueAve)
}
