import { useContext } from 'react';
import { StatsContext } from '../Context/StatsContext';
import { projected } from '../Functions/projected';

export function Last10LocProj(date, awayTeam, homeTeam) {
    const stats = useContext(StatsContext)
    const last10Away = stats.Last10Away[date]
    const last10Home = stats.Last10Home[date]
    const leagueAve = stats.SeasonLeagueAvg[date]
    const away = last10Away[awayTeam]
    const home = last10Home[homeTeam]
    
    return projected(away, home, leagueAve)
}
