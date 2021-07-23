import { useContext } from 'react';
import { StatsContext } from '../Context/StatsContext';

export function ResultsData() {
    const stats = useContext(StatsContext)
    const odds = stats.Odds
    const season = stats.Season
    const last10 = stats.Last10

    let oddsKeys
    if (odds === undefined) {
        oddsKeys = []
    } else {
        oddsKeys = Object.keys(odds)
    }

    let data = {}

    oddsKeys.map(date => {
        data[date] = []
        odds[date].map(game => {
            let gameStats = {}
            let gameKeys = Object.keys(game)
            gameKeys.map(stat => {
                gameStats[stat] = game[stat]    
            })
        })
    })

    console.log(odds, oddsKeys)
}