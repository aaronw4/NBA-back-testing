import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import { StatsContext } from './Context/StatsContext';
import { ResultsContext } from './Context/ResultsContext';
import './App.css';
import Home from './Components/home';
import Results from './Components/results';
import ResultsDetails from './Components/resultDetails';

function App() {
  const [stats, setStats] = useState({});
  const [results, setResults] = useState({});

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
    fetchData('http://127.0.0.1:5000/api/nba-season-location/all?location=away', 'SeasonAway')
    fetchData('http://127.0.0.1:5000/api/nba-season-location/all?location=home', 'SeasonHome')
    fetchData('http://127.0.0.1:5000/api/nba-last10/all', 'Last10')
    fetchData('http://127.0.0.1:5000/api/nba-last10-location/all?location=away', 'Last10Away')
    fetchData('http://127.0.0.1:5000/api/nba-last10-location/all?location=home', 'Last10Home')
    fetchData('http://127.0.0.1:5000/api/nba-season-league-avg', 'SeasonLeagueAvg')
    fetchData('http://127.0.0.1:5000/api/nba-season-league-avg-location?location=away', 'SeasonLeagueAveAway')
    fetchData('http://127.0.0.1:5000/api/nba-season-league-avg-location?location=home', 'SeasonLeagueAveHome')
    fetchData('http://127.0.0.1:5000/api/nba-scores-all', 'Scores')
  },[])

  function inputResults(data) {
    setResults(data)
  }
  
  return (
    <div className="App">
      <StatsContext.Provider value={stats}>
        <ResultsContext.Provider value={{results, inputResults}}>
          <Route exact path="/" component={Home}/>
          <Route path='/results' component={Results}/>
          <Route path='/results-details' component={ResultsDetails}/>
        </ResultsContext.Provider>
      </StatsContext.Provider>
    </div>
  );
}

export default App;
