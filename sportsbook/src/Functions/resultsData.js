import { useContext } from 'react';
import { StatsContext } from '../Context/StatsContext';

export function ResultsData() {
    const stats = useContext(StatsContext)
    const odds = stats.Odds
    const season = stats.Season
    const last10 = stats.Last10
    let data = []

    console.log(odds, season, last10)
}