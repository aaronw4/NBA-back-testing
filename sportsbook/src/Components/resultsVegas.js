import React from 'react';
import {Link} from 'react-router-dom'
import { ActualResults } from '../Functions/actualResults';

const ResultsVegas = () => {
    const results = ActualResults()

    return (
        <div>
            <div className='header'>
                <h2>Vegas Line Summary</h2>
            </div>
            <div className='resultsCont'>
                <div class="card text-white bg-secondary mb-3 hcSummary">
                    <h5 class="card-header">Vegas Opening and Closing Lines</h5>
                    <div>
                        <p class='hcP'>Actual Points per Game: {results.pointsAvg}</p>
                        <p>Games the Favorite Won: {results.favWins}/{results.favWins + results.dogWins} ({(results.favWins / (results.favWins + results.dogWins) * 100).toFixed(1)}%)</p>
                        <p>Games the Dog Won: {results.dogWins}/{results.favWins + results.dogWins} ({(results.dogWins / (results.favWins + results.dogWins) * 100).toFixed(1)}%)</p>
                    </div>
                    <table class="table table-bordered table-secondary vegasTable">
                        <thead>
                            <tr>
                                <th></th>
                                <th scope="col">Opening Lines</th>
                                <th scope="col">Closing Lines</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Average Points Per Game</td>
                                <td>{results.openVegasPointsAve}</td>
                                <td>{results.vegasPointsAve}</td>
                            </tr>
                            <tr>
                                <td>Games Over</td>
                                <td>{results.openOverWins}/{results.openOverWins + results.openUnderWins} ({(results.openOverWins / (results.openOverWins + results.openUnderWins) * 100).toFixed(1)}%)</td>
                                <td>{results.overWins}/{results.overWins + results.underWins} ({(results.overWins / (results.overWins + results.underWins) * 100).toFixed(1)}%)</td>
                            </tr>
                            <tr>
                                <td>Games Under</td>
                                <td>{results.openUnderWins}/{results.openOverWins + results.openUnderWins} ({(results.openUnderWins / (results.openOverWins + results.openUnderWins) * 100).toFixed(1)}%)</td>
                                <td>{results.underWins}/{results.overWins + results.underWins} ({(results.underWins / (results.overWins + results.underWins) * 100).toFixed(1)}%)</td>
                            </tr>
                            <tr>
                                <td>Favorite Covers</td>
                                <td>{results.openFavCovers}/{results.openFavCovers + results.openDogCovers} ({(results.openFavCovers / (results.openFavCovers + results.openDogCovers) * 100).toFixed(1)}%)</td>
                                <td>{results.favCovers}/{results.favCovers + results.dogCovers} ({(results.favCovers / (results.favCovers + results.dogCovers) * 100).toFixed(1)}%)</td>
                            </tr>
                            <tr>
                                <td>Dog Covers</td>
                                <td>{results.openDogCovers}/{results.openFavCovers + results.openDogCovers} ({(results.openDogCovers / (results.openFavCovers + results.openDogCovers) * 100).toFixed(1)}%)</td>
                                <td>{results.dogCovers}/{results.favCovers + results.dogCovers} ({(results.dogCovers / (results.favCovers + results.dogCovers) * 100).toFixed(1)}%)</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to='vegas-details'>
                        <button class="btn btn-primary">
                            Details
                        </button>
                    </Link>
                    <div class="card-footer">
                        <small class="text-white">
                            There are a few reasons as to why the total number of games do not match. 
                            The first reason is that some games are missing opening or closing lines in the database. 
                            Another reason is that games that are a push are not counted. 
                            A push occurs when the Vegas spread and the actual spread are the same. 
                            (Vegas line is home team by 8 and they actually win by exactly eight.) 
                            When this occurs, there is now winner, so the betters get their money back.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsVegas