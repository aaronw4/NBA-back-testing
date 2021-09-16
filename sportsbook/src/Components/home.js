import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <br/>
            <Link to='/results'>
                <button>See Projected Results</button>
            </Link>
            <Link to='/results-lineGrinding'>
                <button>See Line Grinding Results</button>
            </Link>
            <Link to='/results-vegas'>
                <button>See Vegas Results</button>
            </Link>
        </div>
    )
}

export default Home