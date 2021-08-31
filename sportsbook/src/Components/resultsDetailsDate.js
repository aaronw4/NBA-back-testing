import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';

const ResultsDetailsDate = (props) => {
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
                    <h5>{results.name} Projected</h5>
                    <p>{game[results.dataType+'ScoreAway']}({game[results.dataType+'SpreadAway']})</p>
                    <p>{game[results.dataType+'ScoreHome']}({game[results.dataType+'SpreadHome']})</p>
                    <p>{game[results.dataType+'Total']}</p>
                </div>
                <div className='details'>
                    <h5>Vegas</h5>
                    <p>{(game.total - game.spread_away) / 2}</p>
                    <p>{(game.total - game.spread_home) / 2}</p>
                    <br></br>
                </div>
                <div className='details'>
                    <h5>Lines</h5>
                    <p>{game.spread_away}</p>
                    <p>{game.spread_home}</p>
                    <p>{game.total}</p>
                </div>
                <div className='details'>
                    <h5>Pick</h5>
                    <p>{game[results.dataType+results.pickDiff+'SpreadPick']}</p>
                    <br></br>
                    <p>{game[results.dataType+results.pickDiff+'TotalPick']}</p>
                </div>
                <div className='details'>
                    <h5>Actual</h5>
                    <p>{game.score_away}({game.score_home-game.score_away})</p>
                    <p>{game.score_home}({game.score_away-game.score_home})</p>
                    <p>{game.score_home+game.score_away}</p>
                </div>
                <div className='details'>
                    <h5>Results</h5>
                    <p className={game[results.dataType+results.pickDiff+'ResultSpread']}>{game[results.dataType+results.pickDiff+'ResultSpread']}</p>
                    <br></br>
                    <p className={game[results.dataType+results.pickDiff+'ResultTotal']}>{game[results.dataType+results.pickDiff+'ResultTotal']}</p>
                </div>
            </div>
        ))}
        </div>
    )
}

export default ResultsDetailsDate