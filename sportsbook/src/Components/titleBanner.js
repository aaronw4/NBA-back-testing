import React from 'react';
import {Link} from 'react-router-dom';

const TitleBanner = () => {
    return (
        <div className='banner'>
            <Link to='/'>
                <button type="button" className="btn btn-outline-dark home">Home</button>
            </Link>
            <h1>NBA Sports Betting Analysis: 2020/2021 Season</h1>
        </div>
    )
}

export default TitleBanner