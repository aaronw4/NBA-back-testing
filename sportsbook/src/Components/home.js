import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ResultsContext } from '../Context/ResultsContext';

const Home = () => {
    const {results} = useContext(ResultsContext)

    return (
        <div>
        {Object.keys(results).length === 0 ? 
            <button id='loading' className="btn btn-primary" type="button" disabled>
                <span className="spinner-border" role="status" aria-hidden="true"></span>
                Loading...
            </button>
            :
            null
        }
            <div className='homeCont'>
                <div className="card text-white bg-secondary mb-3">
                    <h3 className="card-header">Handicapping Method</h3>
                    <div className="card-body">
                        <p className="card-text">
                            In this method, NBA team stats were used to calculate expected game scores. 
                            Subtracting the two scores provided the projected spread, while adding the 
                            two scores provided the projected total. In the simulation, a bet was made 
                            if the projected result was off the vegas line by four points or more. Several 
                            different sets of data were used and compared to each other.
                        </p>
                        <Link className='link-hp' to='/results'>
                            <button className="btn btn-primary">See Sumary</button>
                        </Link>
                    </div>
                </div>
                <div className="card text-white bg-secondary mb-3">
                    <h3 className="card-header">Line Movement Method</h3>
                    <div className="card-body">
                        <p className="card-text">
                            In this method, the Vegas lines for spread and totals were compared to their opening lines. 
                            If a line moved by 1 point or more, then a bet would be made on the side with the improved odds. 
                        </p>
                        <Link className='link-hp' to='/results-lineGrinding'>
                            <button className="btn btn-primary">See Sumary</button>
                        </Link>
                    </div>
                </div>
                <div className="card text-white bg-secondary mb-3">
                    <h3 className="card-header">Vegas Predictions</h3>
                    <div className="card-body">
                        <p className="card-text">
                            Here, the scores of games were predicted from Vegas's lines. A formula was used to find the scores 
                            that would match the spreads and totals for each game. These Vegas predictions were then compared 
                            to actual game results.
                        </p>
                        <Link className='link-hp' to='/results-vegas'>
                            <button className="btn btn-primary">See Sumary</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home