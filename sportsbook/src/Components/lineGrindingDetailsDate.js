import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ResultsContext } from '../Context/ResultsContext';

const LineGrindingDetailsDate = (props) => {
    const {selected} = useContext(ResultsContext)
    let dateArray = props.dateArray

    return (
        dateArray.map(game => (
            <table class="table table-bordered table-secondary">
                <Link to='/results-lineGrinding'>
                    <button type="button" class="btn btn-outline-dark back">Back</button>
                </Link>
                <thead>
                    <tr>
                        <th scope="col">Teams</th>
                        <th scope="col">Opening Lines</th>
                        <th scope="col">Closing Lines</th>
                        <th scope='col'>Pick</th>
                        <th scope="col">Opening Vegas Points</th>
                        <th scope='col'>Actual</th>
                        <th scope='col'>Results</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{game.team_away}</td>
                        <td>{game.spread_open_away}</td>
                        <td>{game.spread_away}</td>
                        <td>{game[selected.dataType+selected.pickDiff+'SpreadPick']}</td>
                        {!game.total_open || !game.spread_open_away ? 
                        <td>-</td> :
                        <td>{(game.total_open - game.spread_open_away) / 2}</td>
                        }
                        <td>{game.score_away}({game.score_home-game.score_away})</td>
                        <td class={game[selected.dataType+selected.pickDiff+'ResultSpread']}>{game[selected.dataType+selected.pickDiff+'ResultSpread']}</td>
                    </tr>
                    <tr>
                        <td>{game.team_home}</td>
                        <td>{game.spread_open_home}</td>
                        <td>{game.spread_home}</td>
                        <td></td>
                        {!game.total_open || !game.spread_open_away ? 
                        <td>-</td> :
                        <td>{(game.total_open - game.spread_open_home) / 2}</td>
                        }
                        <td>{game.score_home}({game.score_away-game.score_home})</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{game.total_open}</td>
                        <td>{game.total}</td>
                        <td>{game[selected.dataType+selected.pickDiff+'TotalPick']}</td>
                        <td></td>
                        <td>{game.score_home+game.score_away}</td>
                        <td class={game[selected.dataType+selected.pickDiff+'ResultTotal']}>{game[selected.dataType+selected.pickDiff+'ResultTotal']}</td>
                    </tr>
                </tbody>
            </table>
        ))
    )
}

export default LineGrindingDetailsDate