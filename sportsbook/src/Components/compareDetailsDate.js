import React from 'react';
import {Link} from 'react-router-dom';

const CompareDetailsDate = (props) => {
    let dateArray = props.dateArray

    return (
        dateArray.map(game => (
            <table className="table table-hover table-bordered table-secondary">
                <Link to='/results'>
                    <button type="button" className="btn btn-outline-dark back">Back</button>
                </Link>
                <thead>
                    <tr>
                        <th scope="col">Teams</th>
                        <th scope="col">Vegas Opening</th>
                        <th scope="col">Vegas Closing</th>
                        <th scope="col">Season Projected</th>
                        <th scope='col'>Home/Away <br/> Season Projected</th>
                        <th scope='col'>Last Ten Games Projected</th>
                        <th scope='col'>Home/Away <br/> Last Ten Projected</th>
                        <th scope='col'>Actual</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{game.team_away}</td>
                        {game.spread_open_away === '' ? 
                            <td>-</td> :
                            <td>{(game.total_open - game.spread_open_away) / 2}</td>
                        }  
                        <td>{(game.total - game.spread_away) / 2}</td>
                        <td>{game.spScoreAway}</td>
                        <td>{game.slpScoreAway}</td>
                        <td>{game.lpScoreAway}</td>
                        <td>{game.llpScoreAway}</td>
                        <td>{game.score_away}</td>
                    </tr>
                    <tr>
                        <td>{game.team_home}</td>
                        {game.spread_open_away === '' ? 
                            <td>-</td> :
                            <td>{(game.total_open - game.spread_open_home) / 2}</td>
                        }  
                        <td>{(game.total - game.spread_home) / 2}</td>
                        <td>{game.spScoreHome}</td>
                        <td>{game.slpScoreHome}</td>
                        <td>{game.lpScoreHome}</td>
                        <td>{game.llpScoreHome}</td>
                        <td>{game.score_home}</td>
                    </tr>
                </tbody>
            </table>
        ))
    )
}

export default CompareDetailsDate