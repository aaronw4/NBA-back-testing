import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='homeCont'>
            <div class="card text-white bg-secondary mb-3">
                <h3 class="card-header">Handicapping Method</h3>
                <div class="card-body">
                    <p class="card-text">
                        In this method, NBA team stats were used to calculate expected game scores. 
                        Subtracting the two scores provided the projected spread, while adding the 
                        two scores provided the projected total. In the simulation, a bet was made 
                        if the projected result was off the vegas line by four points or more. Several 
                        different sets of data were used and compared to each other.
                    </p>
                    <Link className='link-hp' to='/results'>
                        <button class="btn btn-primary">See Sumary</button>
                    </Link>
                </div>
            </div>
            <div class="card text-white bg-secondary mb-3">
                <h3 class="card-header">Line Movement Method</h3>
                <div class="card-body">
                    <p class="card-text">
                        In this method, the Vegas lines for spread and totals were compared to their opening lines. 
                        If a line moved by 1 point or more, then a bet would be made on the side with the improved odds. 
                    </p>
                    <Link className='link-hp' to='/results-lineGrinding'>
                        <button class="btn btn-primary">See Sumary</button>
                    </Link>
                </div>
            </div>
            <div class="card text-white bg-secondary mb-3">
                <h3 class="card-header">Vegas Predictions</h3>
                <div class="card-body">
                    <p class="card-text">
                        Here, the scores of games were predicted from Vegas's lines. A formula was used to find the scores 
                        that would match the spreads and totals for each game. These Vegas predictions were then compared 
                        to actual game results.
                    </p>
                    <Link className='link-hp' to='/results-vegas'>
                        <button class="btn btn-primary">See Sumary</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home