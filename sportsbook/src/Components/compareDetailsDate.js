import React from 'react';

const CompareDetailsDate = (props) => {
    let dateArray = props.dateArray

    return (
        <div>
            {dateArray.map(game => (
                <div className='detailsDateCont'>
                    {console.log(game)}
                    <div className='details'>
                        <h5>Teams</h5>
                        <p>{game.team_away}</p>
                        <p>{game.team_home}</p>
                    </div>
                        {game.spread_open_away === '' ? 
                        <div className='details'>
                            <h5>Vegas Opening</h5>
                            <p>-</p>
                            <p>-</p>                      
                        </div>
                        :
                        <div className='details'>
                            <h5>Vegas Opening</h5>
                            <p>{(game.total - game.spread_open_away) / 2}</p>
                            <p>{(game.total - game.spread_open_home) / 2}</p>                      
                        </div>
                        }  
                    <div className='details'>
                        <h5>Vegas Closing</h5>
                        <p>{(game.total - game.spread_away) / 2}</p>
                        <p>{(game.total - game.spread_home) / 2}</p>
                    </div>
                    <div className='details'>
                        <h5>Season Projected</h5>
                        <p>{game.spScoreAway}</p>
                        <p>{game.spScoreHome}</p>
                    </div>
                    <div className='details'>
                        <h5>Season (Away/Home) Projected</h5>
                        <p>{game.slpScoreAway}</p>
                        <p>{game.slpScoreHome}</p>
                    </div>
                    <div className='details'>
                        <h5>Last Ten Projected</h5>
                        <p>{game.lpScoreAway}</p>
                        <p>{game.lpScoreHome}</p>
                    </div>
                    <div className='details'>
                        <h5>Last Ten (Away/Home) Projected</h5>
                        <p>{game.llpScoreAway}</p>
                        <p>{game.llpScoreHome}</p>
                    </div>
                    <div className='details'>
                        <h5>Actual</h5>
                        <p>{game.score_away}</p>
                        <p>{game.score_home}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CompareDetailsDate