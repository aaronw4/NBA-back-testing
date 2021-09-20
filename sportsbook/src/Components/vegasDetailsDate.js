import React from 'react';
import {Link} from 'react-router-dom';

const VegasDetailsDate = (props) => {
    let dateArray = props.dateArray
    
    return (
        dateArray.map(game => (
            <table class="table table-bordered table-secondary">
                <Link to='/results-vegas'>
                    <button type="button" class="btn btn-outline-dark back">Back</button>
                </Link>
                <thead>
                    <tr>
                        <th scope="col">Teams</th>
                        <th scope="col">Opening Lines</th>
                        <th scope="col">Closing Lines</th>
                        <th scope="col">Opening Vegas Points</th>
                        <th scope="col">Closing Vegas Points</th>
                        <th scope='col'>Actual</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{game.team_away}</td>
                        <td>{game.spread_open_away}</td>
                        <td>{game.spread_away}</td>
                        {
                            !game.total_open || !game.spread_open_away ? 
                            <td>-</td> :
                            <td>{(game.total_open - game.spread_open_away) / 2}</td>
                        }
                        {
                            !game.total|| !game.spread_away ? 
                            <td>-</td> :
                            <td>{(game.total - game.spread_away) / 2}</td>
                        }
                        <td>{game.score_away} ({game.score_home-game.score_away})</td>
                    </tr>
                    <tr>
                        <td>{game.team_home}</td>
                        <td>{game.spread_open_home}</td>
                        <td>{game.spread_home}</td>
                        {
                            !game.total_open || !game.spread_open_home ? 
                            <td>-</td> :
                            <td>{(game.total_open - game.spread_open_home) / 2}</td>
                        }
                        {
                            !game.total|| !game.spread_home ? 
                            <td>-</td> :
                            <td>{(game.total - game.spread_home) / 2}</td>
                        }
                        <td>{game.score_home} ({game.score_away-game.score_home})</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{game.total_open}</td>
                        <td>{game.total}</td>
                        <td></td> 
                        <td></td>
                        <td>{game.score_home+game.score_away}</td>
                    </tr>
                </tbody>
            </table>
        ))
    )
}

export default VegasDetailsDate