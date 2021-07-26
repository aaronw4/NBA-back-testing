import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <br/>
            <Link to='/results'>
                <button>See Results</button>
            </Link>
        </div>
    )
}

export default Home