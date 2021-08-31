import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';

const VegasDetailsDate = (props) => {
    const {results} = useContext(ResultsContext)
    let dateArray = props.dateArray

    return (
        <div>
            {dateArray.map(game => (
                <div className='detailsDateCont'>
                    <div className='details'>
                        <h5>Teams</h5>
                        <p>{game.team_away}</p>
                        <p>{game.team_home}</p>
                    </div>
                    <div className='details'>
                        <h5>Lines</h5>
                        <p>{game.spread_away}</p>
                        <p>{game.spread_home}</p>
                        <p>{game.total}</p>
                    </div>
                    <div className='details'>
                        <h5>Vegas</h5>
                        <p>{(game.total - game.spread_away) / 2}</p>
                        <p>{(game.total - game.spread_home) / 2}</p>
                        <br></br>
                    </div>
                    <div className='details'>
                        <h5>Actual</h5>
                        <p>{game.score_away}({game.score_home-game.score_away})</p>
                        <p>{game.score_home}({game.score_away-game.score_home})</p>
                        <p>{game.score_home+game.score_away}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VegasDetailsDate