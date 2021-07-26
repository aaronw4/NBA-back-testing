import { useContext } from 'react';
import { StatsContext } from '../Context/StatsContext';
import { projected } from './projected';

export function Last10Proj(date, awayTeam, homeTeam) {
    const stats = useContext(StatsContext)
    const last10Stats = stats.Last10[date]
    const leagueAve = stats.SeasonLeagueAvg[date]
    const away = last10Stats[awayTeam]
    const home = last10Stats[homeTeam]
    
    return projected(away, home, leagueAve)
}
