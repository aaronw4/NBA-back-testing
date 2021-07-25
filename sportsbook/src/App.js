import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import { StatsContext } from './Context/StatsContext';
import { ResultsContext } from './Context/ResultsContext';
import './App.css';
import Home from './Components/home'
import Results from './Components/results'

function App() {
  const [stats, setStats] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {   
    function fetchData(address, name) {
      axios
          .get(address)
          .then(res => {
            setStats(prevState => ({...prevState, [name]: res.data}))
          })
          .catch(err => console.log(err))    
    }
    
    fetchData('http://127.0.0.1:5000/api/nba-odds-all', 'Odds')
    fetchData('http://127.0.0.1:5000/api/nba-season/all', 'Season')
    fetchData('http://127.0.0.1:5000/api/nba-season-league-avg', 'SeasonLeagueAvg')
    fetchData('http://127.0.0.1:5000/api/nba-last10/all', 'Last10')
  },[])
  
  return (
    <div className="App">
      <StatsContext.Provider value={stats}>
        <ResultsContext.Provider value={results}>
          <Route exact path="/" component={Home}/>
          <Route path='/results' component={Results}/>
        </ResultsContext.Provider>
      </StatsContext.Provider>
    </div>
  );
}

export default App;
