import React, {useContext} from 'react';
import { ResultsContext } from '../Context/ResultsContext';

const ResultsDetailsDate = (props) => {
    const {selected} = useContext(ResultsContext)
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
                    <h5>{selected.name} Projected</h5>
                    <p>{game[selected.dataType+'ScoreAway']}({game[selected.dataType+'SpreadAway']})</p>
                    <p>{game[selected.dataType+'ScoreHome']}({game[selected.dataType+'SpreadHome']})</p>
                    <p>{game[selected.dataType+'Total']}</p>
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
                    <p>{game[selected.dataType+selected.pickDiff+'SpreadPick']}</p>
                    <br></br>
                    <p>{game[selected.dataType+selected.pickDiff+'TotalPick']}</p>
                </div>
                <div className='details'>
                    <h5>Actual</h5>
                    <p>{game.score_away}({game.score_home-game.score_away})</p>
                    <p>{game.score_home}({game.score_away-game.score_home})</p>
                    <p>{game.score_home+game.score_away}</p>
                </div>
                <div className='details'>
                    <h5>Results</h5>
                    <p className={game[selected.dataType+selected.pickDiff+'ResultSpread']}>{game[selected.dataType+selected.pickDiff+'ResultSpread']}</p>
                    <br></br>
                    <p className={game[selected.dataType+selected.pickDiff+'ResultTotal']}>{game[selected.dataType+selected.pickDiff+'ResultTotal']}</p>
                </div>
            </div>
        ))}
        </div>
    )
}

export default ResultsDetailsDate