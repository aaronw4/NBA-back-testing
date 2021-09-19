import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';

const ResultsDetailsDate = (props) => {
    const {selected} = useContext(ResultsContext)
    let dateArray = props.dateArray

    return (
        dateArray.map(game => (
            <table class="table table-bordered table-secondary">
                <thead>
                    <tr>
                        <th scope="col">Teams</th>
                        <th scope="col">{selected.name} Projected</th>
                        <th scope="col">Vegas Points</th>
                        <th scope="col">Vegas Lines</th>
                        <th scope='col'>Pick</th>
                        <th scope='col'>Actual</th>
                        <th scope='col'>Results</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{game.team_away}</td>
                        <td>{game[selected.dataType+'ScoreAway']}({game[selected.dataType+'SpreadAway']})</td>
                        <td>{(game.total - game.spread_away) / 2}</td>
                        <td>{game.spread_away}</td>
                        <td>{game[selected.dataType+selected.pickDiff+'SpreadPick']}</td>
                        <td>{game.score_away}({game.score_home-game.score_away})</td>
                        <td class={game[selected.dataType+selected.pickDiff+'ResultSpread']}>{game[selected.dataType+selected.pickDiff+'ResultSpread']}</td>
                    </tr>
                    <tr>
                        <td>{game.team_home}</td>
                        <td>{game[selected.dataType+'ScoreHome']}({game[selected.dataType+'SpreadHome']})</td>
                        <td>{(game.total - game.spread_home) / 2}</td>
                        <td>{game.spread_home}</td>
                        <td></td>
                        <td>{game.score_home}({game.score_away-game.score_home})</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{game[selected.dataType+'Total']}</td>
                        <td></td>
                        <td>{game.total}</td>
                        <td>{game[selected.dataType+selected.pickDiff+'TotalPick']}</td>
                        <td>{game.score_home+game.score_away}</td>
                        <td class={game[selected.dataType+selected.pickDiff+'ResultTotal']}>{game[selected.dataType+selected.pickDiff+'ResultTotal']}</td>
                    </tr>
                </tbody>
            </table>
        ))
    )
}

export default ResultsDetailsDate