import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import { StatsContext } from './Context/StatsContext';
import { ResultsContext } from './Context/ResultsContext';
import { ResultsData } from './Functions/resultsData';
import './App.css';
import TitleBanner from './Components/titleBanner';
import Home from './Components/home';
import Results from './Components/results';
import ResultsDetails from './Components/resultDetails';
import ResultsVegas from './Components/resultsVegas';
import VegasDetails from './Components/vegasDetails';
import ResultsLineGrinding from './Components/resultsLineGrinding';
import LineGrindingDetails from './Components/lineGrindingDetails';
import CompareDetails from './Components/compareDetails';

function App() {
  const [stats, setStats] = useState({});
  const [results, setResults] = useState({});
  const [selected, setSelected] = useState({})

  useEffect(() => {   
    async function fetchData(address) {
      let result = axios
          .get(address)
          .then(res => res.data)
          .catch(err => console.log(err))  
      return result
    }
    
    async function fetchAllData() {
      let obj = {}

      obj['Odds'] = await fetchData('https://arw-nba-backend.herokuapp.com/api/nba-odds-all')      
      obj['Season'] = await fetchData('https://arw-nba-backend.herokuapp.com/api/nba-season/all')
      obj['SeasonAway'] = await fetchData('https://arw-nba-backend.herokuapp.com/api/nba-season-location/all?location=away', 'SeasonAway')
      obj['SeasonHome'] = await fetchData('https://arw-nba-backend.herokuapp.com/api/nba-season-location/all?location=home', 'SeasonHome')
      obj['Last10'] = await fetchData('https://arw-nba-backend.herokuapp.com/api/nba-last10/all', 'Last10')
      obj['Last10Away'] = await fetchData('https://arw-nba-backend.herokuapp.com/api/nba-last10-location/all?location=away', 'Last10Away')
      obj['Last10Home'] = await fetchData('https://arw-nba-backend.herokuapp.com/api/nba-last10-location/all?location=home', 'Last10Home')
      obj['SeasonLeagueAvg'] = await fetchData('https://arw-nba-backend.herokuapp.com/api/nba-season-league-avg', 'SeasonLeagueAvg')
      obj['SeasonLeagueAveAway'] = await fetchData('https://arw-nba-backend.herokuapp.com/api/nba-season-league-avg-location?location=away', 'SeasonLeagueAveAway')
      obj['SeasonLeagueAveHome'] = await fetchData('https://arw-nba-backend.herokuapp.com/api/nba-season-league-avg-location?location=home', 'SeasonLeagueAveHome')
      obj['Scores'] = await fetchData('https://arw-nba-backend.herokuapp.com/api/nba-scores-all', 'Scores')

      return obj
    }

    function updateStats(data) {
      setStats(data)
    }
    
    fetchAllData().then(res => updateStats(res))
  },[])

  useEffect(() => {
    let result = ResultsData(stats)
    setResults(result)
  },[stats])

  function inputResults(data) {
    setSelected(data)
  }

  return (
    <div className="App">
      <StatsContext.Provider value={stats}>
        <ResultsContext.Provider value={{results, selected, inputResults}}>
          <Route path="/" component={TitleBanner}/>
          <Route exact path="/" component={Home}/>
          <Route path="/results-vegas" component={ResultsVegas}/>
          <Route path="/vegas-details" component={VegasDetails}/>
          <Route path="/results-lineGrinding" component={ResultsLineGrinding}/>
          <Route path="/lineGrinding-details" component={LineGrindingDetails}/>
          <Route path="/results" component={Results}/>
          <Route path="/results-details" component={ResultsDetails}/>
          <Route path="/results-compare" component={CompareDetails}/>
        </ResultsContext.Provider>
      </StatsContext.Provider>
    </div>
  );
}

export default App;
